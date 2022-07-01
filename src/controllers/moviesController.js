import movies from "../models/Movie.js";

export default class MovieController {
    static listMovies = (req, res) => {
        movies.find()
            .populate("director")
            .populate("producer")
            .exec((err, movies) => {
                if (!err) {
                    res.status(200).json(movies);
                } else {
                    res.status(500).send({
                        message: `${err.message} - movie do not exist.`
                    });
                }
        });
    };
    static listMoviesById = (req, res) => {
        const id = req.params.id;
        movies.findById(id)
            .populate("director", "name")
            .populate("producer", "service")
            .exec((err, movies) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message} - id do not exist.`
                    });
                } else {
                    res.status(200).send(movies);
                }
            });
    };
    static listMoviesByProducer = (req, res) => {
        const producer = req.query.producer;
        movies.find({"producer": producer}, {}, (err, movies) => {
            if (!err) {
                res.status(200).send(movies);
            } else {
                res.status(500).send({
                    message: `${err.message} - movie do not exist in this producer.`
                });
            }
        });
    };
    static registerMovies = (req, res) => {
        let movie = new movies(req.body);
        movie.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - failed to register movie.`
                });
            } else {
                res.status(201).send(movie.toJSON());
            }
        });
    };
    static changeMovies = (req, res) => {
        const id = req.params.id;    
        movies.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Movie was changed with successful."
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - failed to change movie.`
                });
            }
        });
    };
    static deleteMovies = (req, res) => {
        const id = req.params.id;
        movies.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Movie was deleted with successful."
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - failed to delete movie.`
                });
            }
        });
    };
};