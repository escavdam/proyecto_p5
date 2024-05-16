
CREATE DATABASE IF NOT EXISTS puntuacion_juego;
USE puntuacion_juego;

CREATE TABLE IF NOT EXISTS puntuacion_juego; 
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    puntos INT
);

INSERT INTO puntuacion_juego (nombre, puntos) VALUES
('Alex', 100),
('Cristian', 150),
('Makram', 200),
('Alejandro', 250),
('Lucas', 300),
('Javier', 350),
('Camacho', 400),
('Idaira', 450);

SELECT * FROM puntuacion_juego;