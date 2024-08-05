const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
const connection = require("./connection");

const port = 3000;
app.get("", (req, res) => {
  res.send("hello dimidev");
});
app.get("/newsletter", (req, res) => {
  const query = "SELECT * FROM newsletter";
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});
app.post("/Addnewsletter", (req, res) => {
  const emailAdresse = req.body.email;
  const query = "INSERT INTO newsletter (adresse) VALUES (?)";
  connection.query(query, [emailAdresse], (err, results) => {
    if (err) {
      res
        .status(500)
        .send("erreur lors de l'enregistrement de l'email : ", err);
    }

    console.log("insertion reussit");
    res.status(200).send("email enregistrer avec succes !");
  });
});
app.post("/AddComment", (req, res) => {
  const nom = req.body.nom;
  const email = req.body.email;
  const message = req.body.message;
  const query = "INSERT INTO sugestion (nom,email,message) VALUES (?,?,?)";
  connection.query(query, [nom,email,message], (err, results) => {
    if (err) {
      res
        .status(500)
        .send("erreur lors de l'enregistrement de l'email : ", err);
    }

    console.log("sugestion inserer avec success !");
    res.status(200).send("sugestion enregistrer avec succes !");
  });
});

app.listen(port, (err) => {
  console.log(`serveur demarrer sur l'adresse http://localhost:${port}`);
});
