var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var http = require('http');
var https = require('https');
var mediaserver = require('mediaserver');
let exec = require("child_process").exec;
var path = require('path');
import applicacion from "./app";
import * as global from './global';
import * as multer from "multer";
import {segmentador} from './segmentador/segmentador';
import { AsyncLocalStorage } from "async_hooks";
import { Http2SecureServer } from "http2";



/*
let archivosssl = {
    key:fs.readFileSync("https/key.pem"),
    certificado:fs.readFileSync("https/server.crt")
}
*/

//let server = app;
let server = http.createServer(applicacion);


app.use(express.static('public'));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});




app.get('/', (res) => {
        console.log("Bienvenido a la raiz");

    });

app.get('/canciones/thekillinghand', function (req, res) {
    console.log("la ruta conciones funciona correctamente")
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
    var cancion = path.join('..', 'artistas', req.params.nombre, req.params.album,'dash', req.params.file);
    let stream = fs
    let readStream = fs.createReadStream(cancion);
    console.log("a punto de streamear");
    readStream.pipe(res);


});
const port = 4001;
const ip = '192.168.100.2';
server.listen(port, ip, function () {
    console.log(__dirname);
    console.log('aplcacion corriendo '+port+' '+ip);
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
