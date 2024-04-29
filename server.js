const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
    //send public p5_sketch.html
    res.sendFile(__dirname + "/public/main.html");
    });
//
app.listen(port, () => {
    console.log(`Servidor lanzado en: http://localhost:${port}`);
    });