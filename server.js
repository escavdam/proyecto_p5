const express = require("express");
const app = express();
const port = 3000;
const { initDB, readAll, insertarRecord } = require("./scripts/model.js")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
    //send public p5_sketch.html
    res.sendFile(__dirname + "/public/main.html");
    });

app.get("/puntos", (req, res) => res.json(readAll()));
app.post("/puntos", (req, res) => {
console.log(req.body.nombre, req.body.puntuacion)
res.json(insertarRecord(req.body.nombre, req.body.puntuacion))
});
app.get("/reset", (req, res) => res.send(initDB()));

app.listen(port, "0.0.0.0", () => {
    console.log(`Servidor lanzado en: http://localhost:${port}`);
    });
