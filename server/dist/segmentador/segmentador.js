"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.segmentador = void 0;
var path = require('path');
let exec = require("child_process").exec;
const global = require("../global");
class Segmentador {
    constructor() {
    }
    async segmentar(aritista, album, cancionConExtension) {
        var resultadoSegmentacion = await exec(`${global.rutascriptStream} ${global.rutaCanciones}`, (err, stdout, stderr) => {
            console.log(global.rutascriptStream);
            console.log(global.rutaCanciones);
            console.log('ejecutando script');
            console.log(err);
            console.log(__dirname);
        });
    }
}
exports.segmentador = new Segmentador();
//# sourceMappingURL=segmentador.js.map