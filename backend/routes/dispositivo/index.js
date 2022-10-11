const express = require('express')
var routerDispositivo = express.Router();
const sql = require("../mysql")

routerDispositivo.get("/", function(req, res){

    sql.query("SELECT * FROM Dispositivos", function(error, result, fields){
        if (error) {
            console.log(error)
            res.status(error.code).send(error)
        }
        
        res.send(result);
    })
})

routerDispositivo.get("/:id", function(req, res){

    sql.query("Select * from Dispositivos where dispositivoId=?", [req.params.id], 
        function(error, result, fields){
            if (error) {
                console.log(error)
                res.status(error.code).send(error)
            }
            
            res.send(result);
    })
})

module.exports=routerDispositivo