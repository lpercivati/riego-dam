const express = require('express');
const app = express();

app.use(express.json());
app.use(logger);

var logger = function(req, res, next){
    console.log("Logger api - " + new Date());
    next();
}

app.get("/dispositivo", function(req, res){
    res.send("dispositivo")
})

app.listen(3000, function(req, res){
    console.log("Api funcionando")
})