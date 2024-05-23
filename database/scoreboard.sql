DROP TABLE IF EXISTS scoreboard;

CREATE TABLE 'scoreboard' (
    'id' INTEGER NOT NULL UNIQUE,
    'nombreDelJugador' TEXT NOT NULL UNIQUE,
    'score' INTEGER NOT NULL,
    PRIMARY KEY ('id' AUTOINCREMENT)
)STRICT;

INSERT INTO scoreboard (id, nombreDelJugador, score) VALUES(1, 'Makram', 16);
