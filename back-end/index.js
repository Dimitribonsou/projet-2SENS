const mongoose = require("mongoose");
// const connectionString = "mongodb://localhost:27017/testMongoose";
const connectionString = "mongodb://localhost/testMongoose";
const Question = require("./Questions");

// creation de la connection
async function ConnectDb() {
  await mongoose.connect(connectionString);
}
ConnectDb()
  .then(() => {
    console.log("connexion reussie avec la base de donnees");
    //creation de l'instance du model question definit dans le fichier Question.js
    // const question = new Question({
    //   libelle: "comment devenir developpeur",
    //   description: "je veux savoir les etapes et par ou commencer",
    // });
    // enregistrer les informations dans le document(table) Question
    // const result = Question.insertMany([
    //   {
    //     libelle: "dimidev",
    //     description: "developpeur javascript",
    //   },
    //   {
    //     libelle: "dimipro",
    //     description: "Footballeur professionnel",
    //   },
    // ]);
  })

  .catch((error) => {
    console.log(error.message);
    ConnectDb();
  });
