"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.artistasManagerBd = void 0;
const bd_1 = require("./bd");
class ArtistasManagerBd {
    async crear(req, res) {
        var nombre = req.body.nombre;
        var nombreArtistico = req.body.nombreArtistico;
        var fehaDeNacimeinto = req.body.fehaDeNacimeinto;
        var web = req.body.web;
        console.log("1 :" + nombre);
        console.log("2 :" + nombreArtistico);
        console.log("3 :" + fehaDeNacimeinto);
        console.log("4 :" + web);
        (await bd_1.default).query('INSERT INTO artistas set ?', [req.body]);
        res.end("artista creado exitosamente");
    }
    actualizar(req, res) {
        console.log("artista actualizado exitosmente");
    }
    eliminar(req, res) {
        console.log("artista eliminado exitosamente");
    }
}
exports.artistasManagerBd = new ArtistasManagerBd();
//# sourceMappingURL=artistasManagerBd.js.map