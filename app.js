//Importation des modules utilisés
const express = require("express");
const app = express();
const router = express.Router();

//Route principale du site
router.get("/", (req, res) => {
  //Permet d'afficher correctement les accents
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  //Phrase affichée si le serveur est bien fonctionnel et lancé
  res.write("Vous êtes à la racine de l'exercice de Léa HAMADOUCHE - E4 WMD A");
  res.send();
});

//Affiche la route principale
app.use("/", router);

module.exports = app;
