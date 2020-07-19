"use strict";
exports.__esModule = true;
exports.uploadcanciones = void 0;
var express_1 = require("express");
var multer = require("multer");
var path = require("path");
var UploadCancionesConfig = /** @class */ (function () {
    function UploadCancionesConfig() {
        this.storage = multer.diskStorage({
            destination: function (req, file, cb) {
                var rutaDeGuardado = path.join('./artistas', req.params.nombreArtista, req.params.nombreAlbum);
                cb(null, rutaDeGuardado);
            },
            filename: function (req, file, cb) {
                var nombreCancion = req.params.nombreCancion;
                cb(null, nombreCancion + path.extname(file.originalname));
            }
        });
        this.upload = multer({ storage: this.storage, limits: { filesize: 209800000 } });
        this.router = express_1.Router();
        this.routes();
    }
    UploadCancionesConfig.prototype.routes = function () {
        this.router.get('/subirArtista', this.subirArtista); // ?ids=12345...,23426...,63464....
        this.router.get('/subirAlbum', this.subirAlbum);
        this.router.post('/subirCancion', this.upload.single('archivo'), this.subirCancion);
    };
    UploadCancionesConfig.prototype.subirArtista = function (req, res, nextFunction) {
    };
    UploadCancionesConfig.prototype.subirAlbum = function (req, res, nextFunction) {
    };
    UploadCancionesConfig.prototype.subirCancion = function (req, res, nextFunction) {
        console.log(req.body.nombreArtista);
        console.log(req.body.nombreAlbum);
        console.log(req.body.nombreCancion);
        if (!req.params.file) {
            res.status(400).json({ message: "No se ha enviado archivo" });
        }
        else {
            console.log("archivo subido correctamente");
            /*
            // File correctly uploaded
            let filePath: string = path.join(rutacanciones, req.params.nombreAlbum,req.params.nombreArtista );
            let dir: string = path.join(audioStoragePath, req.params.id);

            // se ejecuta el script para segmentar la cancion
            exec(`${dashScript} ${dir}`, (err, stdout, stderr) => {
               
            });

            mp3Duration(filePath, (err, duration) => {
                if (err) {
                    // borramos el audio en caso de error
                    fs.unlink(filePath, (err) => {
                        if (err) console.log(err);
                    });

                    res.status(500).json({
                        message: "Error updating track data. (1)"
                    });
                }
                else {
                    //
                    Track.findByIdAndUpdate(req.params.id,
                        {
                            $set:
                            {
                                isPlayable: true,
                                // url: "stream/" + req.params.id + "/html5",
                                url: {
                                    html5: "stream/" + req.params.id + "/html5",
                                    dash: "stream/" + req.params.id + "/dash/index.mpd"
                                },
                                duration: duration
                            }
                        },
                        { new: true }, (err, track) => {

                            if (err) {
                                // Delete audio file // TODO cambiar por la forma nueva
                                fs.unlink(filePath, (err) => {
                                    if (err) console.log(err);
                                });

                                res.status(500).json({
                                    message: "Error updating track data. (2)"
                                });
                            }
                            else {
                                res.status(200).json({
                                    message: "File uploaded.",
                                    track: track
                                });
                            }
                        }); // Track.findByIdAndUpdate
                }
            }); // mp3Duration
        }
        */
        }
    };
    return UploadCancionesConfig;
}());
exports.uploadcanciones = new UploadCancionesConfig().router;
