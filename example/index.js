const express = require('express');
const app = express();
const path = require('path');

// Définir le dossier public comme dossier statique
app.use(express.static(path.join(__dirname, 'public')));

// Importation des fonctions CRUD
const { insertScore, getScores, resetScores } = require('./crud');

// Endpoint pour obtenir les scores
app.get('/records', async (req, res) => {
    // Utilisation de la fonction CRUD pour récupérer les scores depuis la base de données
    const scores = await getScores();
    res.json(scores);
});

// Endpoint pour enregistrer les scores
app.post('/records', (req, res) => {
    const { playerName, score } = req.body;
    // Utilisation de la fonction CRUD pour insérer le score dans la base de données
    insertScore(playerName, score);
    res.send('Score enregistré avec succès');
});

// Lancer le serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
