const express = require("express");
const router = express.Router();
const multer = require("multer");
const session = require("express-session");
const authcontroller = require("./../Controllers/AuthController");
//DEFINIR LE CHEMIN DE STOCKAGE DES FICHIERS
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/Files");
  },
//   filename: function (err, file, cb) {
//     cb(null, file.originalname);
//   },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + '-' + file.originalname);
  }
});
// Créez un objet "multer" avec les options de stockage 
const upload = multer({ storage: storage });
router.use(
  session({
    secret: "2sens2024sessionkey@gmail.com",
    resave: false,
    saveUninitialized: true,
  })
);


//route pour l'authentification
router.post("/NewAccount", authcontroller.AddUser);
//route pour la connection de l'utilisateur
router.post("/Login", authcontroller.ConnectUser);
router.post("/deleteUser/:id", authcontroller.Deleteusers);
router.post("/UpdateUser/:id", authcontroller.UpdateUserInfo);
router.get("/deconnect",authcontroller.DeconnectUser);
router.get("/UserList",authcontroller.AllUser);

//router pour la gestion des question
router.post("/NewQuestion", authcontroller.AddQuestions);
router.post("/deleteQuestion/:id", authcontroller.DeleteQuestions);
module.exports=router