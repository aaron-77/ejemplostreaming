"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
var express = require('express');
const logger = require("morgan");
const bodyParser = require("body-parser");
const rutas_1 = require("./rutas");
const rutas_2 = require("./rutas");
const rutas_3 = require("./rutas");
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(express.static('public'));
        this.express.use("/artistas", express.static(path.join(__dirname, "../storage/audio")));
        this.express.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
    }
    routes() {
        this.express.use('/artistas', rutas_1.uploadartistasconfig);
        this.express.use('/albumes', rutas_2.uploadalbumesconfig);
        this.express.use('/musica', rutas_3.uploadcanciones);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map