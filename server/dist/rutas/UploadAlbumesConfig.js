"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadalbumesconfig = void 0;
const express_1 = require("express");
const express = require("express");
var express2 = require('express');
const albumesManagerBd_1 = require("../bd/albumesManagerBd");
const cancionesManagerBd_1 = require("../bd/cancionesManagerBd");
const multer = require("multer");
class UploadAlbumesConfig {
    constructor() {
        this.upload = multer({ dest: 'uploads/' });
        this.app = express2();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/subirAlbum', express.json(), this.subirAlbum);
        this.router.put('/subirAlbum', this.actualizarArtista);
        this.router.delete('/subirAlbum', this.borrarArtista);
        this.router.post('/subirAlbumConCanciones', express.json(), this.subirAlbumConCanciones);
    }
    async subirAlbum(req, res, nextFunction) {
        try {
            console.log("subir album: " + req.body.nombre);
            var resultadoRegistrarAlbumEnBd = await albumesManagerBd_1.albumesManagerBd.crear(req, res);
        }
        catch (error) {
            console.log(error);
        }
    }
    async subirAlbumConCanciones(req, res, nextFunction) {
        try {
            console.log("subir album: " + req.body.nombre);
            var resultadoRegistrarAlbumEnBd = await albumesManagerBd_1.albumesManagerBd.crear(req, res);
            var resultadoRegistrarCanciones = cancionesManagerBd_1.cancionesManagerBd.crear(req, res);
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
exports.uploadalbumesconfig = new UploadAlbumesConfig().router;
//# sourceMappingURL=UploadAlbumesConfig.js.map