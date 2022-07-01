import mongoose from "mongoose";

mongoose.connect("mongodb+srv://express-alura:123@alura.oy8flvo.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;