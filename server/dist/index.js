"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');
var mediaserver = require('mediaserver');
let exec = require("child_process").exec;
var path = require('path');
const app_1 = require("./app");
const multer = require("multer");
var server = http.createServer(app_1.default);
app.use(express.static('public'));
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../artistas");
    },
    filename: (req, file, cb) => {
        let nombreCancion = req.body.nombreCancion;
        console.log(nombreCancion);
        cb(null, nombreCancion + path.extname(file.originalname));
    }
});
var upload = multer({ storage: storage, limits: { filesize: 209800000 } });
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.post('/subirCancion', upload.single('archivo'), function (req, res) {
    console.log(req.body.nombreCancion);
    console.log("subiendo cancion");
    res.end("SUBIDA EXCITANTE!!");
});
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/canciones/thekillinghand', function (req, res) {
    fs.readFile(path.join(__dirname, 'canciones.json'), 'utf8', function (err, canciones) {
        if (err) {
            throw err;
        }
        res.json(JSON.parse(canciones));
    });
});
app.get('/canciones/:nombre/dash/:file', function (req, res) {
    console.log("Cancion: " + req.params.nombre);
    console.log("Archivo: " + req.params.file);
    var cancion = path.join(__dirname, 'canciones', req.params.nombre, 'dash', req.params.file);
    let stream = fs;
    let readStream = fs.createReadStream(cancion);
    console.log("a punto de streamear");
    readStream.pipe(res);
});
server.listen(4000, '127.0.0.1', function () {
    console.log('aplcacion corriendo');
});
function algo() {
    console.log("¡¡MISION  COMPLETE!!");
}
algo();
//# sourceMappingURL=index.js.map