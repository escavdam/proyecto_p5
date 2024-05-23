DROP TABLE IF EXISTS puntuaciones;
CREATE TABLE IF NOT EXISTS puntuaciones(
  id INTEGER NOT NULL UNIQUE,
  nombre TEXT NOT NULL,
  puntos INTEGER NOT NULL,
  PRIMARY KEY (id AUTOINCREMENT)
);

INSERT INTO puntuaciones(nombre, puntos) VALUES ('administrador', 100);