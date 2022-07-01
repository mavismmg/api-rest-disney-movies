import producers from "../models/Producer.js";

export default class ProducerController {
    static listProducers = (req, res) => {
        producers.find((err, producers) => {
                if (!err) {
                    res.status(200).json(producers);
                } else {
                    res.status(500).send({
                        message: `${err.message} - producer do not exist.`
                    });
                }
        });
    };
    static listProducersById = (req, res) => {
        const id = req.params.id;
        producers.findById(id, (err, producers) => {
                if (err) {
                    res.status(400).send({
                        message: `${err.message} - id do not exist.`
                    });
                } else {
                    res.status(200).send(producers);
                }
            });
    };
    static registerProducers = (req, res) => {
        let producer = new producers(req.body);
        producer.save((err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - failed to register producer.`
                });
            } else {
                res.status(201).send(producer.toJSON());
            }
        });
    };
    static changeProducers = (req, res) => {
        const id = req.params.id;    
        producers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Producer was changed with successful."
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - failed to change producer.`
                });
            }
        });
    };
    static deleteProducers = (req, res) => {
        const id = req.params.id;
        producers.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({
                    message: "Producer was deleted with successful."
                });
            } else {
                res.status(500).send({
                    message: `${err.message} - failed to delete producer.`
                });
            }
        });
    };
};