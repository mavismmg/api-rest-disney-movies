import mongoose from "mongoose";

const producerSchema = new mongoose.Schema(
    {
        id: {type: String},
        producer: {type: String, required: true},
        service: {type: String}
    },
    {
        versionKey: false
    }
);

const producers = mongoose.model("producers", producerSchema);

export default producers;