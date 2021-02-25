import * as path       from 'path';
var express = require('express');
import * as session    from 'express-session';
import * as logger     from 'morgan';
import * as bodyParser from 'body-parser';
import * as ejs        from 'ejs';
import * as multer from 'multer';
import {streamingManager, uploadartistasconfig} from './rutas'
import {uploadalbumesconfig} from './rutas';
import {uploadcanciones} from "./rutas";

class App{

    express : any;
    upload : any;

    constructor(){
        this.express = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void{

        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: true }));

        // Static files
        //this.express.use(express.static('public'));
        //this.express.use("/images", express.static(path.join(__dirname, "../storage/images")));
        //this.express.use("/artistas", express.static(path.join(__dirname, "../storage/audio")));
        // Headers, allow CORS
        this.express.use((req, res, next) => {
            console.log("CABECERAS");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();

            
        });
    }

    private routes(){

        let RootRouter = express.Router();
        RootRouter.get('/',(req,res,next) =>{
            res.json({
                message:'Welcome to the jungle'

            });

        });
        this.express.use('/',RootRouter);
        this.express.use('/artistas',uploadartistasconfig);
        this.express.use('/albumes',uploadalbumesconfig);
        this.express.use('/canciones'      , uploadcanciones);
        this.express.use('/streaming'      , streamingManager);

    }


}

export default new App().express;