const { json } = require("body-parser");
const db = require("./../connection");
//middleware our le cryptage
const bcrypt = require("bcrypt");

//###############################################  gerer l'authentification des utilisateurs #################################

// fonction de hachage de mot de passe
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
//*********************methode pour l'envoie des donnees au serveur************************** */
const ConnectUser = async (req, res, next) => {
  try {
    let data = {
      iduser: null,
      nom: null,
      email: null,
      mdp: null,
      statut:false,
      message: null,
    };
    const email = req.body.email;
    const password = req.body.password;
    console.log("email envoyer : " + email);
    console.log("password envoyer : " + password);
    const rep = "SELECT  * FROM `utilisateur` WHERE  `EMAIL`=?";

    db.query(rep, [email], async (err, results, fields) => {
      if (err) {
        res.status(500).send("Une erreur s'est produite lors de la requête");
        return null;
      }
      if (results.length === 0) {
        data = {
          iduser: null,
          nom: null,
          email: null,
          mdp: null,
          statut:false,
          message: "Email invalid",
        };
        res.json(data);
        return;
      }
      //comparer le mot de passe hacher stocker dans la base de donnee avec celui saisie par l'utilisateur
      else if (
        results[0].PASSWORD != null &&
        results[0].PASSWORD != undefined
      ) {
        const passwordexist = await bcrypt.compare(
          password,
          results[0].PASSWORD
        );
        console.log("password encrypter : " + passwordexist);
        if (!passwordexist) {
          data = {
            iduser: null,
            nom: null,
            email: null,
            mdp: null,
            statut:false,
            message: "Mot de passe Invalid",
          };
          res.json(data);
          return;
        }
        // stocker les informations de l'utilisateur dans les variables de session (nom, photo, idUser)
        req.session.idusers = results[0].ID_USER;
        req.session.nom = results[0].USERNAME;
        req.session.email = results[0].EMAIL;
        req.session.password = results[0].PASSWORD;
        data = {
          iduser: req.session.idusers,
          nom: req.session.nom,
          email: req.session.email,
          mdp: req.session.password,
          statut:true,
          message: "utilisateur connecter avec succes ! ",
        };
        // // si c'est un administrateur
        // if (results[0].ROLE === 1) {
        //   // renvoyer vers l'interface de l'administrateur
        //   console.log("adminnistrateur connecter");
        //   res.json(data);
        //   return ;
        // }
        // renvoyer vers la page d'acceuil
        console.log("utilisateur connecter avec succes ! ", data);
        res.json(data);
        return;
      } else {
        data = {
          iduser: null,
          nom: null,
          email: null,
          mdp: null,
          statut:false,
          message: "Email et Mot de passe Incorect",
        };
        res.json(data);
        return ;
      }
    });
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};

const AddUser = async (req, res) => {
  try {
    InsertUser(req, res);
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
InsertUser = async (req, res) => {
  const password = req.body.password;
  console.log(password);
  const passwordhached = await hashPassword(password);
  let q =
    "INSERT INTO `utilisateur`( `USERNAME`, `EMAIL`, `PASSWORD`, `TELEPHONE`) VALUES (?,?,?,?)";
  db.query(
    q,
    [req.body.nom, req.body.email, passwordhached, req.body.telephone],
    (err) => {
      if (err) throw err;
      res.status(500).send("Creation de compte effectuer avec success !");
    }
  );
};
const UpdateUserInfo = async (req, res) => {
  try {
    UpdateUser(req, res);
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
UpdateUser = async (req, res) => {
  const id = req.params.id;
  const password = req.body.password;
  console.log(password);
  const passwordhached = await hashPassword(password);
  let q =
    "UPDATE `utilisateur` SET `USERNAME`=?,`EMAIL`=?,`TELEPHONE`=?, `PASSWORD`=? WHERE `ID_USER`=? ";

  db.query(
    q,
    [req.body.nom, req.body.email, req.body.telephone, passwordhached, id],
    (err) => {
      if (err) throw err;
      console.log("mise a jour effectuer ave succes ! ");
      res.status(500).send("mise a jour effectuer avec success !");
    }
  );
};
const DeconnectUser = (req, res) => {
  try {
    // req.session.nom="user";
    req.session.destroy();
    res.redirect("/");
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
const Deleteusers = async (req, res) => {
  try {
    const id = req.params.id;
    const q = "DELETE FROM `utilisateur` WHERE `ID_USER`=? ";
    db.query(q, [id], (err) => {
      if (err)
        res
          .satus(500)
          .send(
            "une erreur c'est produite lors de l'executtion de la requete : " +
              err
          );
      res.send("utilisateur suprimer avec success");
    });
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
const AllUser = async (req, res) => {
  try {
    const q = "SELECT * FROM `utilisateur` ORDER BY `USERNAME` ASC";
    db.query(q, (err, results) => {
      if (err)
        res
          .satus(500)
          .send(
            "une erreur c'est produite lors de l'executtion de la requete "
          );
      res.send(JSON.stringify(results));
    });
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
//#######################################     gerer les questions   ###################################
const AddQuestions = async (req, res) => {
  try {
    InsertQuestion(req, res);
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
InsertQuestion = async (req, res) => {
  let idUsers = 1;
  if (req.session.idusers) {
    idUsers = req.session.idusers;
  }
  let q =
    "INSERT INTO `questions`(`ID_USER`, `TITRE`, `DESCRIPTION`) VALUES (?,?,?)";

  db.query(q, [idUsers, req.body.titre, req.body.description], (err) => {
    if (err) throw err;
    res.status(200).send("Question Publier avec success !");
  });
};

const DeleteQuestions = async (req, res) => {
  id = req.params.id;
  let q = "DELETE FROM `questions` WHERE ID_QUESTION=?";

  db.query(q, [id], (err) => {
    if (err) throw err;
    res.status(200).send("Question Supprimer avec success !");
  });
};
const AllQuestion = async (req, res) => {
  try {
    const q =
      "SELECT q.ID_QUESTION , titre ,DESCRIPTION,date(DATE_ENVOIE) as date,time(DATE_ENVOIE) as heure ,us.USERNAME ,us.ID_USER  FROM questions q INNER JOIN utilisateur us on us.ID_USER=q.ID_USER ORDER by ID_QUESTION DESC";
    db.query(q, (err, results) => {
      if (err)
        res
          .satus(500)
          .send(
            "une erreur c'est produite lors de l'executtion de la requete "
          );
      res.send(results);
    });
  } catch (err) {
    res.status(500).send("une erreur c'est produite : " + err);
  }
};
//#######################################  gerer les reponses       ####################################
module.exports = {
  ConnectUser,
  AddUser,
  AllUser,
  Deleteusers,
  DeconnectUser,
  UpdateUserInfo,
  AddQuestions,
  DeleteQuestions,
  AllQuestion,
};
