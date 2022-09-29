const express = require('express')
var routerDispositivo = express.Router();

routerDispositivo.get("/", function(req, res){
    res.send("dispositivo")
})

module.exports=routerDispositivo