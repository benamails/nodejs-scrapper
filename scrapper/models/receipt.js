const mongoose = require('mongoose');

// Pas besoin de mettre un champ pour l'Id puisqu'il est automatiquement généré par Mongoose
// La méthode <Schema> permet de créer un schéma de données pour la base de données MongoDB.
// La méthode <model> transforme ce modèle en un modèle utilisable.
const recepeitSchema = mongoose.Schema({
  title: { type: String, required: true },
  tags: { type: Array, required: true },
  imageUrl: { type: String, required: true },
  intro: { type: String, required: true },
  ingredients: { type: String, required: false },
  steps: { type: String, required: false },
});

module.exports = mongoose.model('Receipt', recepeitSchema);
