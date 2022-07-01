import express from "express";
import MovieController from "../controllers/moviesController.js";

const router = express.Router();

router
    .get("/movies", MovieController.listMovies)
    .get("/movies/search", MovieController.listMoviesByProducer)
    .get("/movies/:id", MovieController.listMoviesById)
    .post("/movies", MovieController.registerMovies)
    .put("/movies/:id", MovieController.changeMovies)
    .delete("/movies/:id", MovieController.deleteMovies);

export default router;