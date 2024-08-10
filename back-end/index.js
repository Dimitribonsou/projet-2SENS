const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const homeroute = require("./routes/homeRoute");
const Authroute=require('./routes/AuthRoute')
//importer le midelwares cors pour autoriser la communication avec different serveur
app.use(cors());
//importer les midelwares pour autoriser l'envoie des donnees au format json au serveur
app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
//importer les routes du projet
app.use(homeroute);
app.use(Authroute);

const port = 3000;
app.get("", (req, res) => {
  res.send("hello dimidev");
});
app.listen(port, (err) => {
  console.log(`serveur demarrer sur l'adresse http://localhost:${port}`);
});
