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
/*
let archivosssl = {
    key:fs.readFileSync("https/key.pem"),
    certificado:fs.readFileSync("https/server.crt")
}
*/
var server = http.createServer(app);
app.use(express.static('public'));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
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
app.get('artistas/:nombre/:album/dash/:file', function (req, res) {
    console.log("iniciando streaming");
    var cancion = path.join(__dirname, 'artistas', req.params.nombre, req.params.album, 'dash', req.params.file);
    var stream = fs;
    var readStream = fs.createReadStream(cancion);
    console.log("a punto de streamear");
    readStream.pipe(res);
});
server.listen(4001, '192.168.100.2', function () {
    console.log('aplcacion corriendo');
    //var resultadoSegmentacion =  segmentador.segmentar("dreamtheather","whendreamanddayunite","orignal.mp3");
    //var rutascriptStream = path.join(__dirname,'generate-dash.sh');
    //var rutaCanciones = path.join(__dirname,'../','artistas','dreamtheater','whendreamanddayunite');
    /*exec(`${global.rutascriptStream} ${global.rutaCanciones}`, (err, stdout, stderr) => {

        console.log(global.rutascriptStream);
        console.log(global.rutaCanciones);
        console.log('ejecutando script');
        console.log(stderr);
        console.log(__dirname);

    });
    */
});
