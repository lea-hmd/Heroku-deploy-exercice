//Importation des modules utilisés
require("dotenv").config();
const dbUrl =
  process.env.URI ||
  "mongodb+srv://lea:MEgwQpcuTF5smhw7@cluster0.0xnydzq.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");

//Déclaration globale de mongoose
mongoose.Promise = global.Promise;

//Initialisation de la bdd
const db = {};
db.mongoose = mongoose;
db.url = dbUrl;
db.books = require("./book.model.js")(mongoose);

module.exports = db;
