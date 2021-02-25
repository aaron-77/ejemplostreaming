"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');
var mediaserver = require('mediaserver');
var exec = require("child_process").exec;
var path = require('path');
var app_1 = require("./app");
/*
let archivosssl = {
    key:fs.readFileSync("https/key.pem"),
    certificado:fs.readFileSync("https/server.crt")
}
*/
//let server = app;
var server = http.createServer(app_1["default"]);
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.get('/', function (res) {
    console.log("Bienvenido a la raiz");
});
app.get('/canciones/thekillinghand', function (req, res) {
    console.log("la ruta conciones funciona correctamente");
    /*
    fs.readFile(path.join(__dirname, 'canciones.json'), 'utf8', function (err, canciones) {
        if (err) {
            throw err;
        }
        res.json(JSON.parse(canciones));

    });
    */
});
//artistas/:nombre/:album/dash/:file
app.get('/artistas/:nombre/:album/dash/:file', function (req, res) {
    console.log("iniciando streaming");
    var cancion = path.join('..', 'artistas', req.params.nombre, req.params.album, 'dash', req.params.file);
    var stream = fs;
    var readStream = fs.createReadStream(cancion);
    console.log("a punto de streamear");
    readStream.pipe(res);
});
var port = 4001;
var ip = '192.168.100.2';
server.listen(port, ip, function () {
    console.log(__dirname);
    console.log('aplcacion corriendo ' + port + ' ' + ip);
    //var resultadoSegmentacion =  segmentador.segmentar("dreamtheather","whendreamanddayunite","orignal.mp3");
    //var rutascriptStream = path.join(__dirname,'generate-dash.sh');
    //var rutaCanciones = path.join(__dirname,'../','artistas','dreamtheater','whendreamanddayunite');
    /*exec(`${global.rutascriptStream} ${global.rutaCanciones}`, (err, stdout, stderr) => {

        console.log(globa l.rutascriptStream);
        console.log(global.rutaCanciones);
        console.log('ejecutando script');
        console.log(stderr);
        console.log(__dirname);

    });
    */
});
