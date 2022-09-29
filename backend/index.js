const express = require('express');
const app = express();
var routerDisp = require("./routes/dispositivo")

//Conversion de body desde json
app.use(express.json());

//Importacion de routers
app.use("/dispositivo", routerDisp)

var logger = function(req, res, next){
    console.log("Logger api - " + new Date());
    next();
}
//app.use(logger);



app.listen(3000, function(req, res){
    console.log("Api funcionando")
})