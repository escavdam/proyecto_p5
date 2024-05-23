const express = require("express");
const app = express();
const port = 3000;
const { initDB, readAll, insertarRecord } = require("./public/script/model")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {res.sendFile(__dirname + "/public/main.html");});
app.get("/puntos", (req, res) => res.json(readAll()));
app.post("/puntos", (req, res) => {
console.log(req.body.nombre, req.body.puntuacion)
res.json(insertarRecord(req.body.nombre, req.body.puntuacion))});
app.get("/reset", (req, res) => res.send(initDB()));

app.listen(port, () => {
    console.log(`Servidor lanzado en: http://localhost:${port}`);
    });