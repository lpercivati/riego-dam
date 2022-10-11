const express = require('express')
var routerMedicion = express.Router();
const sql = require("../mysql")

routerMedicion.get("/:dispositivoId", function(req, res){

    sql.query("Select * from Mediciones where dispositivoId=? order by fecha desc", [req.params.dispositivoId], 
        function(error, result, fields){
            if (error) {
                console.log(error)
                res.status(error.code).send(error)
            }
            
            res.send(result);
    })
})

routerMedicion.post("/", function(req, res){

    sql.query("INSERT into Mediciones (fecha, valor, dispositivoId) values (?, ?, ?)", 
        [new Date(), req.body.valor, req.body.dispositivoId],
    function(error, result, fields){
        if (error) {
            console.log(error)
            res.status(error.code).send(error)
        }
        
        res.send(result);
    })
})

module.exports=routerMedicion