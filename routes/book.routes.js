module.exports = (app) => {
  const books = require("../controllers/books.controller.js");
  var router = require("express").Router();

  /*------------ AJOUT ------------*/

  //Route de la requête de création d'un nouveau livre
  router.post(
    "/books/addOne",
    books.createOne
  );

  //Route de la requête de création de plusieurs livres
  router.post(
    "/books/addMany",
    books.createMany
  );

  /*------------ AFFICHAGE ------------*/

  //Route de la requête d'affichage de tous les livres
  router.get("/books/all", books.getAll);

  /*------------ MODIFICATION ------------*/

  //Route de la requête de modification d'un livre via son id
  router.put(
    "/books/updateById/:id",
    books.updateById
  );

  /*------------ SUPPRESSION ------------*/

  //Route de la requête de suppression de tous les livres
  router.delete(
    "/books/deleteAll",
    books.deleteAll
  );

  //Route de la requête de suppression d'un livre en fonction de son id
  router.delete(
    "/books/deleteById/:id",
    books.deleteById
  );

  //Route racine de l'api
  app.use("/api", router);
};
