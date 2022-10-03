const express = require('express')
var routerMedicion = express.Router();
const sql = require("../mysql")

routerMedicion.get("/:dispositivoId", function(req, res){

    sql.query("Select * from Mediciones where dispositivoId=? order by fecha desc", [req.params.dispositivoId], 
        function(error, result, fields){
        res.send(result);
    })
})

module.exports=routerMedicion