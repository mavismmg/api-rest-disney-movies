import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        id: {type: String},
        title: {type: String, required: true},
        director: {type: mongoose.Schema.Types.ObjectId, ref: "directors"},
        producer: {type: mongoose.Schema.Types.ObjectId, ref: "producers"},
        date: {type: Date}
    }
);

const movies = mongoose.model("movies", movieSchema);

export default movies;