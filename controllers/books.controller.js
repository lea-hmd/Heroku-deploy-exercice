//Importation des modules utilisés
const db = require("../models");
const Book = db.books;

/*------------ AJOUT ------------*/

//Ajout d'un nouveau livre
exports.createOne = (req, res) => {
  //Création d'un nouvel objet Book
  const book = new Book({
    ...req.body,
  });

  //Enregistrement du livre dans la bdd
  book
    .save(book)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send(err.message || "Error while creating a new book ...");
    });
};

//Ajout de plusieurs livres
exports.createMany = (req, res) => {
  Book.insertMany(req.body.books)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send(err.message || "Error while creating multiple books ...");
    });
};

/*------------ AFFICHAGE ------------*/

//Affichage de tous les livres
exports.getAll = (req, res) => {
  Book.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err.message || "Error while finding all books ...");
    });
};

/*------------ MODIFICATION ------------*/

//Modification d'un livre via son id
exports.updateById = (req, res) => {
  if (!req.body) {
    return res.status(400).send("Cannot update the book with empty body");
  }

  const id = req.params.id;

  Book.findByIdAndUpdate(id, req.body)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send(
            `Cannot update the book with id: ${id}, you must verify the id !`
          );
      } else res.send("The book was successfully updated.");
    })
    .catch((err) => {
      res
        .status(500)
        .send(
          "Error while updating the book with the following id: " +
            id +
            ", please check if there is no identical data in the database !"
        );
    });
};

/*------------ SUPPRESSION ------------*/

//Efface tous les livres
exports.deleteAll = (req, res) => {
  Book.deleteMany({})
    .then((data) => {
      res.send(`${data.deletedCount} book(s) were successfully deleted !`);
    })
    .catch((err) => {
      res.status(500).send(err.message || "Error while deleting all books ...");
    });
};

//Efface un livre via son id
exports.deleteById = (req, res) => {
  const id = req.params.id;

  Book.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send(
            `Cannot delete the book with id: ${id}, you must verify the id !`
          );
      } else {
        res.send("The book was successfully deleted !");
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send("Could not delete the book with the following id: " + id);
    });
};
