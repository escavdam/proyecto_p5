const express = require("express");
const app = express();
const port = 3000;
const { initDB, readAll, insertarRecord } = require("./scripts/model.js");

app.use(express.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
    // Send public p5_sketch.html
    res.sendFile(__dirname + "/public/main.html");
});

app.get("/puntos", (req, res) => res.json(readAll()));

app.post("/puntos", (req, res) => {
    console.log(req.body.nombre, req.body.puntos);

    const nombre = req.body.nombre;
    const puntos = req.body.puntos; 

    if(nombre && puntos){
        const resultado = insertarRecord(nombre, puntos);
        res.json(resultado);
    }else{
        console.log("Faltan datos")
    }
}); 

app.get("/reset", (req, res) => res.send(initDB()));

app.listen(port, () => {
    console.log(`Servidor lanzado en: http://localhost:${port}`);
});
