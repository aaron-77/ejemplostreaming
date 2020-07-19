"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("promise-mysql");
const configuracionesBd_1 = require("./configuracionesBd");
const pool = mysql.createPool(configuracionesBd_1.default.database);
const conexion = pool.then((r) => r.getConnection().then((connection) => {
    r.releaseConnection(connection);
    console.log("ANEL ENCUERADA");
    console.log('Conexion exitosa.');
})).catch((error) => {
    console.log("error de conexion con la base de datos ");
});
exports.default = pool;
//# sourceMappingURL=bd.js.map