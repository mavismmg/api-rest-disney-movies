import express from "express";
import DirectorController from "../controllers/directorsController.js";

const router = express.Router();

router
    .get("/directors", DirectorController.listDirector)
    .get("/directors/:id", DirectorController.listDirectorById)
    .post("/directors", DirectorController.registerDirectors)
    .put("/directors/:id", DirectorController.changeDirectors)
    .delete("/directors/:id", DirectorController.deleteDirectors);

export default router;