const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  libelle: String,
  description: String,
});

const model = mongoose.model("Questions", QuestionSchema);
module.exports = model;
