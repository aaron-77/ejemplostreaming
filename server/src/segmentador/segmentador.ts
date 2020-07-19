var path = require('path');
let exec = require("child_process").exec;
import * as global from '../global';

class Segmentador {


    constructor() {


    }

    public async segmentar(artista,album,cancionConExtension) {
     var rutaCanciones = path.join(__dirname,'../','../','artistas',artista,album);
        
        var resultadoSegmentacion = await exec(`${global.rutascriptStream} ${rutaCanciones}`, (err, stdout, stderr) => {

            //console.log(global.rutascriptStream);
            //console.log(global.rutaCanciones);
            //console.log('ejecutando script');
            console.log(err);
            console.log(__dirname);
    
        });
    
    }


}

export const segmentador = new Segmentador();
