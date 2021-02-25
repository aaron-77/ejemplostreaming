"use strict";
/**
 * datos de uso en toda la aplicacion
 */
exports.__esModule = true;
exports.rutaCanciones = exports.rutascriptStream = void 0;
var path = require("path");
// rutas de almacenamiento de canciones e imagenes de portada de albumes
exports.rutascriptStream = path.join(__dirname, 'generate-dash.sh');
exports.rutaCanciones = path.join(__dirname, '../', 'artistas', 'dreamtheater', 'whendreamanddayunite');
