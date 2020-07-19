"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.albumesManagerBd = void 0;
const bd_1 = require("./bd");
class AlbumesManagerBd {
    async crear(req, res) {
        var fkArtista = req.body.fkArtista;
        var titulo = req.body.titulo;
        var duracion = req.body.duracion;
        var numeroDeTracks = req.body.numeroDeTracks;
        var compañiaProductora = req.body.compañiaProductora;
        var tipoDeAlbum = req.body.tipoDeAlbum;
        var fechaDeLanzamiento = req.body.fechaDeLanzamiento;
        var urlDePortada = req.body.urlDePortada;
        var album = {
            fkArtista: fkArtista,
            titulo: titulo,
            duracion: duracion,
            numeroDeTracks: numeroDeTracks,
            compañiaProductora: compañiaProductora,
            tipoDeAlbum: tipoDeAlbum,
            fechaDeLanzamiento: fechaDeLanzamiento,
            urlDePortada: urlDePortada
        };
        var canciones = req.body.canciones;
        console.log("1 :" + fkArtista);
        console.log("2 :" + titulo);
        console.log("3 :" + duracion);
        console.log("4 :" + numeroDeTracks);
        console.log("1 :" + compañiaProductora);
        console.log("2 :" + tipoDeAlbum);
        console.log("3 :" + fechaDeLanzamiento);
        console.log("4 :" + urlDePortada);
        (await bd_1.default).query('INSERT INTO albumes set ?', [album]);
        res.end("album creado exitosamente");
    }
    actualizar(req, res) {
        console.log("album actualizado exitosmente");
    }
    eliminar(req, res) {
        console.log("album eliminado exitosamente");
    }
}
exports.albumesManagerBd = new AlbumesManagerBd();
//# sourceMappingURL=albumesManagerBd.js.map