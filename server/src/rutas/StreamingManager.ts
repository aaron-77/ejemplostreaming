import { Router, Request, Response, NextFunction } from "express";
import * as express from 'express';
//var express = require('express');
import { cancionesManagerBd } from '../bd/cancionesManagerBd';
import * as multer from "multer";
import * as path from "path";
import * as fs from "fs";
import { rutaCanciones } from "../global";
import {segmentador} from '../segmentador/segmentador';



class StreamingManager {

    router: Router;
    storage: any;
    upload: any;
    app : any;





    constructor() {
        this.router = Router();
        this.routes();
    }
    routes(): void {
        this.router.use( express.json());
        this.router.get('/artistas/:nombre/:album/dash/:file',this.iniciarStreaming);
    }

     async iniciarStreaming(req: any, res: any, nextFunction: NextFunction){
        try{
            console.log("iniciando streaming");
            var cancion = path.join('..', 'artistas', req.params.nombre, req.params.album,'dash', req.params.file);
            let stream = fs
            let readStream = fs.createReadStream(cancion);
            console.log("a punto de streamear");
            readStream.pipe(res);
        }catch(error){
            console.log("Error al streamear");
        }


    }

}


export let streamingManager = new StreamingManager().router;