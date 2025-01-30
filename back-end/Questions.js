import mongoose from "mongoose";

const QuestionSchema = mongoose.Schema({
  libelle: String,
  description: String,
});

const model = mongoose.model("Questions", QuestionSchema);
export default model;
