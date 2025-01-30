import  bcrypt from "bcrypt";
import jwt  from  "jsonwebtoken";
import db  from  "./../connection.js";
import dotenv from 'dotenv'
// Configurer l'acces aux variables d'environnement
dotenv.config();
const  JWT_SECRET = process.env.JWT_SECRET;
// Fonction pour générer un jeton JWT
function generateToken(userId, username) {
  const token = jwt.sign({ userId, username }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
}

// Middleware de vérification du jeton JWT
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Jeton d'authentification manquant" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.username = decoded.username;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Jeton d'authentification invalide" });
  }
};

// Méthode pour la connexion de l'utilisateur
const ConnectUser = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const query = "SELECT * FROM `utilisateur` WHERE `EMAIL` = ?";
    db.query(query, [email], async (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Une erreur s'est produite lors de la requête" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Email invalide" });
      }
      //stocker le resultat de la requete dans la constante user
      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.PASSWORD);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Mot de passe invalide" });
      }

      const token = generateToken(user.ID_USER, user.USERNAME);

      res.json({
        token,
        iduser: user.ID_USER,
        nom: user.USERNAME,
        email: user.EMAIL,
        message: "Connexion réussie",
      });
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Une erreur s'est produite : " + err });
  }
};

const authjwtcontroller={
  ConnectUser,
  verifyToken
};

export default authjwtcontroller;
