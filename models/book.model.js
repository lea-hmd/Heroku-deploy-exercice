//Création du modèle et de son schéma de données
module.exports = (mongoose) => {
  const Book = mongoose.model(
    "book", //Nom de la collection
    mongoose.Schema(
      {
        title: { type: String, unique: true, required: true },
        author: { type: String, unique: false, required: true },
        year: { type: Number, unique: false, required: true },
        pages: { type: Number, unique: false, required: true },
        country: { type: String, unique: false, required: true },
        language: { type: String, unique: false, required: true },
      },
      { timestamps: true }
    )
  );
  return Book;
};
