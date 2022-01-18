const express = require('express');
const scrapper = express();
const mongoose = require ('mongoose');

// définit où se trouve toutes les routes
const receiptRoutes = require ('./routes/receipt.js');
// const userRoutes = require('./routes/user.js')

// mongoose.connect('mongodb+srv://benamails:iK765KMkuQeC@cluster0.urrvm.mongodb.net/myScrapper?retryWrites=true&w=majority',
//   { useNewUrlParser: true,
//     useUnifiedTopology: true })
//   .then(() => console.log('Connexion à MongoDB réussie !'))
//   .catch(() => console.log('Connexion à MongoDB échouée !'));

// .use intercepte tous type de requêtes API (get, post etc...)
// anciennement bodyParser
scrapper.use(express.json());

// Middleware est un enchainement de requêtes, pour empêcher les requêtes d'expirer, le dernier middleware doit renvoyer la réponse au client. La fonction next() passe l'execution au prochain middleware de la chaine
scrapper.use((req, res, next) => {
  // Pour empêcher des erreurs CORS : Configurer des headers spécifiques sur l'objet requête
  // définit ici par * quel domain y accède
  res.setHeader('Access-Control-Allow-Origin', '*');
  // définit quels sont les éléments envoyés
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // définit quelles sont les actions faisables
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  //le next () pour passer à l'execution suivante
  next();
});
// définit le chemin par défaut réutilisé
scrapper.use('/api/receipt', receiptRoutes);
// scrapper.use('/api/auth', userRoutes);

module.exports = scrapper;
