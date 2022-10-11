const express = require('express')
var routerValvula = express.Router();
const sql = require("../mysql")

routerValvula.post("/log", function(req, res){
    if(req.body.electroValvulaId < 1) {
        res.status(400).send(error)
    }

    sql.query("INSERT into Log_Riegos (apertura, fecha, electrovalvulaId) values (?, ?, ?)", [req.body.nuevoEstado, new Date(), req.body.electroValvulaId],
    function(error, result, fields){
        if (error) {
            console.log(error)
            res.status(error.code).send(error)
        }
        
        res.send(result);
    })
})

routerValvula.get("/log/:id", function(req, res){

    sql.query("Select * from Log_Riegos where electrovalvulaId=? order by 1 desc", [req.params.id], 
        function(error, result, fields){
            if (error) {
                console.log(error)
                res.status(error.code).send(error)
            }

            res.send(result);
    })
})

module.exports=routerValvula