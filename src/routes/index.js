import express from "express";
import movies from "./moviesRoutes.js";
import directors from "./directorsRoutes.js";
import producers from "./producersRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({title: "Movies: Initial Page"});
    });
    app.use(
        express.json(),
        movies,
        directors,
        producers
    );
};

export default routes;