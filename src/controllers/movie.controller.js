import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import { Movie } from '../models/movie.model.js';
import {ApiResponse} from '../utils/ApiResponse.js';

//add a movie
const addMovie = asyncHandler(async(req,res)=>{
    //get movie deatils
    const {title,director,releaseyear,language,rating} = req.body;
    console.log(title,director,releaseyear,language,rating);
    
    //validation

    if( [title,director,releaseyear,language].some((field)=>
        field === "")
    ){
        throw new ApiError(400,"All fields are required...");
    }

    //check movie alread exist
    let movie = await Movie.findOne({title: title});

    if(movie){
        throw new ApiError(409,`Movie with title : ${title} Already exist...`);
    }

    movie = await Movie.create({
        title,
        director,
        releaseyear,
        language,
        rating: rating||0,
    })

    const createdMovie = await Movie.findById(movie._id);

    if (!createdMovie) {
        throw new ApiError(500, "Something went wrong while adding the movie")
    }

    return res.status(200).json(
        new ApiResponse(200, createdMovie, "Movie Added Successfully")
    )
})

//get All Movies
const getAllMovie = asyncHandler(async (req,res) => {
    const movies = await Movie.find({});
    const pageSize = process.env.PAGINATION_LIMIT;
    const page = Number(req.query.pageNumber) || 1;

    const keyword = req.query.keyword
        ? {
            name: {
            $regex: req.query.keyword,
            $options: 'i',
            },
        }
        : {};

    const count = await Movie.countDocuments({ ...keyword });
    const products = await Movie.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1));

    return res.status(200).json(
        new ApiResponse(200, { movies, page, pages: Math.ceil(count / pageSize) }, "Movie Loaded Successfully")
    )

})

//update a movie

const updateMovie = asyncHandler(async (req, res) => {

    const {title,director,releaseyear,language,rating} = req.body;
    console.log(title,director,releaseyear,language,rating);
    
    //validation

    if( [title,director,releaseyear,language].some((field)=>
        field === "")
    ){
        throw new ApiError(400,"All fields are required...");
    }
    
    const movie = await Movie.findById(req.params.id);
  
    console.log(movie);
    if(!movie){
        throw new ApiError(400,"Movie not found by id...");
    }
    if (movie) {
        movie.title = title;
        movie.director = director;
        movie.releaseyear = releaseyear;
        movie.language = language;
        movie.rating = rating;
  
        const updatedMovie = await movie.save();

        if(!updatedMovie){
            throw new ApiError(400,"Something Went wrong while updating and saving movie...");
        }

        return res.status(200).json(
            new ApiResponse(200, updatedMovie, "Movie Updated Successfully")
        )
    }

});

//delete a movie

const deleteMovie = asyncHandler(async (req, res) => {

    const movie = await Movie.findById(req.params.id);

    if (movie) {
        await movie.deleteOne({ _id: movie._id });
        return res.status(200).json(
            new ApiResponse(200, "", "Movie Deleted Successfully")
        )
    } else {
        throw new ApiError(404, "Movie Not Found...")
    }

});

//get a single movie

const GetMovieById = asyncHandler(async (req, res) => {

    const id =  req.params.id;
    //console.log(id);
    const movie = await Movie.findById(id);

    if(!movie){
        throw new ApiError(404, "Movie Not Found...")
    }

    return res.status(200).json(
        new ApiResponse(200, movie, "Movie Found ")
    )
});

//search a movie

const searchMovie = asyncHandler(async (req, res) => {

    
    const query = req.query.q;
    
    console.log(req.query.q);

    if (!query) {
    return res.status(400).json({ error: 'Search query parameter (q) is required' });
    }

    const regex = new RegExp(query, 'i');

    const result = await Movie.find({
    $or: [
        { title: { $regex: regex } },
        { director: { $regex: regex } }
    ]
    });

    
    if(!result){
        console.error(error);
        throw new ApiError(500,"Something Went Wring while Searching a movie....");
    }

    return res.status(200).json(
        new ApiResponse(200, result, "Movie Found ")
    )
});

//filter movie by name

const filterByName = asyncHandler(async(req,res)=>{
    const nameFilter = req.query.name;

    if (!nameFilter) {
        throw new ApiError(400, "Name Filter Query is required...")
    }

    const regex = new RegExp(nameFilter, 'i');

    const result = await Movie.find({ title: { $regex: regex } });

    return res.status(200).json(
        new ApiResponse(200, result, "Movie Filtered by Name Successfully")
    )
});

//filter movie by director

const filterByDirector = asyncHandler(async(req,res)=>{
    const directorFilter = req.query.director;

    if (!directorFilter) {
        throw new ApiError(400, "Director Filter is required...")
    }

    const regex = new RegExp(directorFilter, 'i');

    const result = await Movie.find({ director: { $regex: regex } });

    return res.status(200).json(
        new ApiResponse(200, result, "Movie Filtered by Director Successfully")
    )
});

//filter movie by release year

const filterByReleaseYear = asyncHandler(async(req,res)=>{
    const releaseYearFilter = req.query.releaseYear;

    if (!releaseYearFilter) {
      return res.status(400).json({ error: 'Release year filter is required' });
    }

    const result = await Movie.find({ releaseyear: releaseYearFilter });

    return res.status(200).json(
        new ApiResponse(200, result, "Movie Filtered by release year Successfully")
    )
})


//filter movie by Rating

const filterByRating = asyncHandler(async(req,res)=>{
    const ratingFilter = req.query.rating;

    if (!ratingFilter) {
      return res.status(400).json({ error: 'Rating year filter is required' });
    }

    const result = await Movie.find({ rating: { $gt: ratingFilter } });

    return res.status(200).json(
        new ApiResponse(200, result, "Movie Filtered by rating Successfully")
    )
})

//filter movie by language

const filterByLanguage = asyncHandler(async(req,res)=>{
    const languageFilter = req.query.language;

    if (!languageFilter) {
        throw new ApiError(400, "Director Filter is required...")
    }

    const regex = new RegExp(languageFilter, 'i');

    const result = await Movie.find({ language: { $regex: regex } });

    return res.status(200).json(
        new ApiResponse(200, result, "Movie Filtered by Director Successfully")
    )
});

//Counting number of movie with specified language

const countMovieByLanguage = asyncHandler(async(req,res)=>{
    const languageFilter = req.query.language;

    if (!languageFilter) {
        throw new ApiError(400, "Director Filter is required...")
    }

    const regex = new RegExp(languageFilter, 'i');

    
    const count = await Movie.countDocuments({ language: { $regex: regex } });
    const result = await Movie.find({ language: { $regex: regex } });
    return res.status(200).json(
        new ApiResponse(200, {count,result}, "Movie Filtered by Director Successfully")
    )
});





export {
    addMovie,
    getAllMovie,
    updateMovie, 
    deleteMovie,
    searchMovie,
    filterByName,
    filterByDirector,
    filterByReleaseYear,
    filterByRating,
    filterByLanguage,
    countMovieByLanguage,
    GetMovieById,
}