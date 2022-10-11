const express = require('express');
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

//middlewar cors
app.use(cors(corsOptions));

//Conversion de body desde json
app.use(express.json());


//Importacion de routers
var routerDisp = require("./routes/dispositivo")
var routerMedicion = require("./routes/medicion")
var routerValvula = require("./routes/valvula")

app.use("/dispositivo", routerDisp)
app.use("/medicion", routerMedicion)
app.use("/valvula", routerValvula)

app.listen(3000, function(req, res){
    console.log("Api funcionando")
})