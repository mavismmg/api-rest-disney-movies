import express from "express";
import ProducerController from "../controllers/producersController.js";

const router = express.Router();

router
    .get("/producer", ProducerController.listProducers)
    .get("/producer/:id", ProducerController.listProducersById)
    .post("/producer", ProducerController.registerProducers)
    .put("/producer/:id", ProducerController.changeProducers)
    .delete("/producer/:id", ProducerController.deleteProducers);

export default router;