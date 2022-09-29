var mysql = require("mysql");
var configSql = {
    connectionLimit: 10,
    host: "mysql-server",
    port: "3306",
    user: "root",
    password: "userpass",
    database: "DAM"
};

const poolConexions = mysql.createPool(configSql);
poolConexions.getConnection((err, connection) => {
    if(err){
        switch(err.code){
            case "ER_ACCESS_DENIED_ERROR":
                console.error("Usuario o password incorrecto.")
                break;
            case "PROCOTOL_CONNECTION_LOST":
                console.error("Se perdió conexion a la BDD.")
                break;
            case "ECONNREFUSED":
                console.log(err)
                console.error("Conexion BDD rechazada.")
                break;
            case "ER_CON_COUNT_ERROR":
                console.error("BDD con muchas conexiones.")
                break;
            default:
                console.error("Error en conexion BDD.")
                break;
        }
    }

    if(connection){
        console.log("BDD conectada")
        connection.release();
    }

    return;
});

module.exports = poolConexions