const fs = require("fs")
const path = require("path")
const dbpath = path.join(__dirname, "../db/puntos.db")
const sqlite = require("better-sqlite3")
const db = new sqlite(dbpath)

function initDB(){
    const init = fs.readFileSync(path.join(__dirname, "../db/init.sql"), "utf8")
    const statements = init.split(";").filter( statement => statement.trim() !== "")
    statements.forEach(statement => {
        db.prepare(statement).run()
    })
}

function readAll(tabla){
    return db.prepare(`SELECT * FROM ${tabla}`).all();
}
function nuevaPuntuacion(nombre, puntos){
    db.prepare("INSERT INTO puntos (nombre, puntos) VALUES (?, ?)").run(nombre, puntos);
}

module.exports = {
    initDB,
    readAll,
    nuevaPuntuacion
}

