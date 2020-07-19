"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadcanciones = void 0;
const express_1 = require("express");
const express = require("express");
const cancionesManagerBd_1 = require("../bd/cancionesManagerBd");
const multer = require("multer");
const path = require("path");
class UploadCancionesConfig {
    constructor() {
        this.storage = multer.diskStorage({
            destination: (req, file, cb) => {
                let cancion = req.body.titulo;
                let artista = req.param.nombreArtista;
                let album = req.param.nombreAlbum;
                console.log("cancion: " + cancion);
                console.log("artista: " + artista);
                console.log("album: " + album);
                cb(null, "../artistas/" + "Heavenly" + "/" + "Virus");
            },
            filename: (req, file, cb) => {
                let nombre = req.body.titulo;
                cb(null, nombre + path.extname(file.originalname));
            }
        });
        this.upload = multer({ storage: this.storage, limits: { filesize: 209800000 } });
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.post('/subirArchivo', express.json(), this.subirCancion);
    }
    async subirCancion(req, res, nextFunction) {
        try {
            var idArista = req.body.fkArtista;
            var resultadoRegistrarCancionEnBd = await cancionesManagerBd_1.cancionesManagerBd.crear(req, res);
            console.log("archivo subido correctamente");
            res.status(200);
            res.end("peticion exitosa");
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.uploadcanciones = new UploadCancionesConfig().router;
//# sourceMappingURL=uploadCanciones.js.map