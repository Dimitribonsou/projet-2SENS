import express  from "express";
const app = express();
import cors  from "cors";
import bodyParser  from "body-parser";
import homeroute  from "./routes/homeRoute.js";
import Authroute from './routes/AuthRoute.js';
import Imageroute from './routes/ImageRoute.js';
import path from  'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
// Configurer l'acces aux variables d'environnement
dotenv.config();
//importer le midelwares cors pour autoriser la communication avec different serveur
app.use(cors());
//importer les midelwares pour autoriser l'envoie des donnees au format json au serveur
app.use(bodyParser.urlencoded({ extends: true }));
app.use(bodyParser.json());
app.use(express.json())
// Créer les variables de chemin
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
// autoriser l'acces aux fichier images par le serveurs
app.use('/images',express.static(path.join(__dirname,'./Images')));
//importer les routes du projet
app.use(homeroute);
app.use(Authroute);
app.use(Imageroute);

const port =process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Welcome to dimidev API");
});
app.listen(port, (err) => {
  console.log(`serveur demarrer sur l'adresse http://localhost:${port}`);
});


