import { Router } from "express";
import { 
    addMovie, 
    deleteMovie, 
    getAllMovie, 
    updateMovie, 
    searchMovie, 
    filterByName, 
    filterByDirector,
    filterByReleaseYear,
    filterByRating,
    filterByLanguage,
    countMovieByLanguage,
    GetMovieById,
} from "../controllers/movie.controller.js";


const router = Router();

router.route("/add").post(addMovie);

router.route("/movies").get(getAllMovie);

router.route("/search").get(searchMovie)

router.route("/filterbyname").get(filterByName);

router.route("/filterbydirector").get(filterByDirector);

router.route("/filterbyreleaseyear").get(filterByReleaseYear);

router.route("/filterbyrating").get(filterByRating);

router.route("/filterbylanguage").get(filterByLanguage);

router.route("/countbylanguage").get(countMovieByLanguage);

router.route("/:id").get(GetMovieById).put(updateMovie).delete(deleteMovie);

export default router;