-- Création de la table des scores
CREATE TABLE IF NOT EXISTS subway_surfers_scores (
    id SERIAL PRIMARY KEY,
    player_name VARCHAR(100) NOT NULL,
    score INT NOT NULL
);
