"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadartistasconfig = void 0;
const express_1 = require("express");
const express = require("express");
var express2 = require('express');
const artistasManagerBd_1 = require("../bd/artistasManagerBd");
const multer = require("multer");
var upload = multer({ dest: 'uploads/' });
class UploadArtistasConfig {
    constructor() {
        this.app = express2();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/subirArtista', express.json(), this.subirArtista);
        this.router.put('/subirArtista', this.actualizarArtista);
        this.router.delete('/subirArtista', this.borrarArtista);
    }
    async subirArtista(req, res, nextFunction) {
        try {
            console.log("subir artista: " + req.body.nombre);
            var resultadoRegistrarCancionEnBd = await artistasManagerBd_1.artistasManagerBd.crear(req, res);
        }
        catch (error) {
            console.log(error);
        }
    }
    async actualizarArtista(req, res, nextFunction) {
    }
    async borrarArtista(req, res, nextFunction) {
    }
}
exports.uploadartistasconfig = new UploadArtistasConfig().router;
//# sourceMappingURL=uploadArtistas.js.map