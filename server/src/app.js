"use strict";
exports.__esModule = true;
var path = require("path");
var express = require('express');
var logger = require("morgan");
var bodyParser = require("body-parser");
var rutas_1 = require("./rutas");
var rutas_2 = require("./rutas");
var rutas_3 = require("./rutas");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        // Static files
        this.express.use(express.static('public'));
        //this.express.use("/images", express.static(path.join(__dirname, "../storage/images")));
        this.express.use("/artistas", express.static(path.join(__dirname, "../storage/audio")));
        // Headers, allow CORS
        this.express.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
    };
    App.prototype.routes = function () {
        this.express.use('/artistas', rutas_1.uploadartistasconfig);
        this.express.use('/albumes', rutas_2.uploadalbumesconfig);
        this.express.use('/musica', rutas_3.uploadcanciones);
    };
    return App;
}());
exports["default"] = new App().express;
