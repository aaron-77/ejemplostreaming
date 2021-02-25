"use strict";
exports.__esModule = true;
var mysql = require("promise-mysql");
var configuracionesBd_1 = require("./configuracionesBd");
var pool = mysql.createPool(configuracionesBd_1["default"].database);
var conexion = pool.then(function (r) { return r.getConnection().then(function (connection) {
    r.releaseConnection(connection);
    console.log('Conexion exitosa.');
}); })["catch"](function (error) {
    console.log("error de conexion con la base de datos ");
    console.log(error);
});
exports["default"] = pool;
