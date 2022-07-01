import mongoose from "mongoose";

const directorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        producer: {type: mongoose.Schema.Types.ObjectId, ref: "producers"},
        level: {type: String, required: true}
    },
    {
        versionKey: false
    }
);

const directors = mongoose.model("directors", directorSchema);

export default directors;