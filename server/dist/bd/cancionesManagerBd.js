"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancionesManagerBd = void 0;
const bd_1 = require("./bd");
class CancionesManagerBd {
    async crear(req, res) {
        var cancion1 = req.body.canciones.cancion1;
        var cancion2 = req.body.canciones.cancion2;
        var contador = 1;
        for (var cancion in req.body.canciones) {
            var cancionesjson = req.body.canciones['cancion' + contador](await bd_1.default).query('INSERT INTO canciones set ?', [cancion]);
            console.log("cancion creada exitosamente");
            contador++;
        }
        var body = req.body;
        var fkAlbum = req.body.canciones.cancion1.fkAlbum;
        var titulo = req.body.canciones.cancion1.titulo;
        var numeroDeTrack = req.body.numeroDeTrack;
        var genero = req.body.genero;
        var codigoIsrc = req.body.codigoIsrc;
        var tamañoEnMb = req.body.tamañoEnMb;
        var duracion = req.body.duracion;
        var bitrate = req.body.bitrate;
        var audiencia = req.body.audiencia;
        var contenidoExplicito = req.body.contenidoExplicito;
        var urlDeUbicacion = req.body.urlDeUbicacion;
    }
    actualizar(req, res) {
        console.log("cancion actualizada exitosmente");
    }
    eliminar(req, res) {
        console.log("cancion eliminada exitosamente");
    }
}
exports.cancionesManagerBd = new CancionesManagerBd();
//# sourceMappingURL=cancionesManagerBd.js.map