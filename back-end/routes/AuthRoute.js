import express from  "express";
const router = express.Router();
import multer  from  "multer";
import session  from  "express-session";
import authcontroller  from  "./../Controllers/AuthController.js";
import authjwtcontroller  from  "./../Controllers/loginwidthTokenController.js";
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

//implementation de l'authentification jwt 
router.post("/Loginjwt", authjwtcontroller.ConnectUser);
// Utilisation du middleware de vérification du jeton JWT
// router.use("/protected", authjwtcontroller.verifyToken, (req, res) => {
//   // Accès aux ressources protégées
//   res.json({ message: `Bienvenue ${req.username} !` });
// });

//router pour la gestion des question
router.post("/NewQuestion", authcontroller.AddQuestions);
router.post("/deleteQuestion/:id", authcontroller.DeleteQuestions);
router.get("/QuestionsList", authcontroller.AllQuestion);
router.get("/QuestionDetail/:id", authcontroller.DetailQuestion);
router.get("/QuestionPerso/:id", authcontroller.AllUsersQuestion);
//route pour la gestion des questions signaler
router.post('/NewSignal',authcontroller.AddSignal)
//router pour la gestion des reponses
router.post("/NewResponse", authcontroller.AddResponses);
router.get("/QuestionResponse/:id", authcontroller.AllQuestionReponses);
router.get("/ResponseCount/:id", authcontroller.ReponseCount);

export default router;