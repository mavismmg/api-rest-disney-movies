import directors from "../models/Director.js";

export default class DirectorController {
    static listDirector = (req, res) => {
        directors.find()
            .populate("producer")
            .exec((err, directors) => {
                if (!err) {
                    res.status(200).json(directors);
                } else {
                    res.status(500).send({
                        message: `${err.message} - director do not exist.`
                    });
                }
        });
    };
    static listDirectorById = (req, res) => {
        const id = req.params.id;
        directors.findById(id)
            .populate("producer", "service")
            .exec((err, directors) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message} - id do not exist.`
                    });
                } else {
                    res.status(200).send(directors);
                }
            });
    };
    static registerDirectors = (req, res) => {
        let director = new directors(req.body);
        director.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - failed to register director.`
                });
            } else {
                res.status(201).send(director.toJSON());
            }
        });
    };
    static changeDirectors = (req, res) => {
        const id = req.params.id;    
        directors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Director was changed with successful."
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - failed to change director.`
                });
            }
        });
    };
    static deleteDirectors = (req, res) => {
        const id = req.params.id;
        directors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Director was deleted with successful."
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - failed to delete director.`
                });
            }
        });
    };
};