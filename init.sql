DROP TABLE IF EXISTS puntuacion_juego;

CREATE TABLE puntuacion_juego(
    id INTEGER NOT NULL UNIQUE PRIMARY KEY,
    nombre TEXT NOT NULL UNIQUE,
    puntuacion INTEGER NOT NULL,
);

INSERT INTO puntuacion_juego(id, nombre, puntuacion) VALUES
('Canton13', 'Daniel', '1'),
('Tanque', 'Makram', '10'),
('Gaditano', 'Alejandro', '2');

SELECT * FROM puntuacion_juego;