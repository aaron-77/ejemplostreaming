import { Router, Request, Response,NextFunction } from "express";
import * as express from 'express';
var express2 = require('express');
import { artistasManagerBd } from '../bd/artistasManagerBd';
import * as multer from "multer";
import * as path from "path";
import * as fs from "fs";
import { rutaCanciones } from "../global";
import * as bodyParser from 'body-parser';


var upload = multer({ dest: 'uploads/' });

class UploadArtistasConfig {
    
    router: Router;
    storage: any;
    upload: any;
    app:any;

    constructor() {
        this.app = express2();
        this.router = Router();
        this.routes();
    }



    routes(): void {
        
        
        this.router.get('/streaming/:nombre/:album/dash/:file',this.streaming);
        this.router.post('/subirArtista',express.json(),this.subirArtista); 
        this.router.put('/subirArtista', this.actualizarArtista);
        this.router.delete('/subirArtista', this.borrarArtista);
    }

    async subirArtista(req: any, res: any, nextFunction: NextFunction) {
        try {
            console.log("subir artista: "+req.body.nombre);
            var resultadoRegistrarCancionEnBd = await artistasManagerBd.crear(req, res);

        } catch (error) {
            console.log(error);
        }
    }

    async actualizarArtista(req: any, res: any, nextFunction: NextFunction) {


    }


    async borrarArtista(req: any, res: any, nextFunction: NextFunction) {

    }

    async streaming(req: any, res: any, nextFunction: NextFunction){
        console.log("inicialdo streaming");
        var cancion = path.join(__dirname, 'artistas', req.params.nombre, req.params.album,'dash', req.params.file);
        let stream = fs
        let readStream = fs.createReadStream(cancion);
        console.log("a punto de streamear");
        readStream.pipe(res);


    }







}


export let uploadartistasconfig = new UploadArtistasConfig().router;

