const express = require('express')
var routerDispositivo = express.Router();
const sql = require("../mysql")

routerDispositivo.get("/", function(req, res){

    /*
    this.dispositivos.push(new Dispositivo(1, "prueba1", "prueba ubicacion1", 111))
        this.dispositivos.push(new Dispositivo(2, "prueba2", "prueba ubicacion2", 112))
        this.dispositivos.push(new Dispositivo(3, "prueba3", "prueba ubicacion3", 113))
        this.dispositivos.push(new Dispositivo(4, "prueba4", "prueba ubicacion4", 114))
    */

    sql.query("SELECT * FROM Dispositivos", function(response){
        res.send("Dispositivo");
    })
})

module.exports=routerDispositivo