const express = require("express");
const app = express();
const port = 3000;
const { initDB, readAll, insertarRecord } = require("./scripts/model.js")

app.use(express.static("public"));
app.get("/", (req, res) => {
    //send public p5_sketch.html
    res.sendFile(__dirname + "/public/main.html");
    });

app.get("/puntos", (req, res) => res.json(readAll()));
app.post("/puntos", (req, res) => {
console.log(req.query.nombre, req.query.puntuacion)
res.json(insertarRecord(req.query.nombre, req.query.puntuacion))
});
app.get("/reset", (req, res) => res.send(initDB()));

app.listen(port, () => {
    console.log(`Servidor lanzado en: http://localhost:${port}`);
    });
