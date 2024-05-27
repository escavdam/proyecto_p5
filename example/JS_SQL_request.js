const { Pool } = require('pg');

// Configuration de la connexion à la base de données
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_password',
    port: 5432,
});

// Fonction pour insérer un score dans la base de données
async function insertScore(playerName, score) {
    try {
        const query = 'INSERT INTO subway_surfers_scores (player_name, score) VALUES ($1, $2)';
        const values = [playerName, score];
        await pool.query(query, values);
        console.log('Score inséré avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'insertion du score :', error);
    }
}

// Fonction pour récupérer les scores depuis la base de données
async function getScores() {
    try {
        const query = 'SELECT * FROM subway_surfers_scores';
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error('Erreur lors de la récupération des scores :', error);
        return [];
    }
}

// Fonction pour réinitialiser les scores dans la base de données
async function resetScores() {
    try {
        const query = 'DELETE FROM subway_surfers_scores';
        await pool.query(query);
        console.log('Scores réinitialisés avec succès');
    } catch (error) {
        console.error('Erreur lors de la réinitialisation des scores :', error);
    }
}
