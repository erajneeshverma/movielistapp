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
} from "../controllers/movie.controller.js";


const router = Router();

router.route("/add").post(addMovie);

router.route("/movies").get(getAllMovie);

router.route("/:id").put(updateMovie).delete(deleteMovie);

router.route("/search").get(searchMovie)

router.route("/filterbyname").get(filterByName);

router.route("/filterbydirector").get(filterByDirector);

router.route("/filterbyreleaseyear").get(filterByReleaseYear);

router.route("/filterbyrating").get(filterByRating);

router.route("/filterbylanguage").get(filterByLanguage);

router.route("/countbylanguage").get(countMovieByLanguage);


export default router;