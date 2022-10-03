const express = require('express');
const app = express();
const cors = require('cors')

var routerDisp = require("./routes/dispositivo")
var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

//Conversion de body desde json
app.use(express.json());

//middlewar cors
app.use(cors(corsOptions));

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