import { Router, Request, Response,NextFunction } from "express";
import * as express from 'express';
var express2 = require('express');
import { albumesManagerBd } from '../bd/albumesManagerBd';
import {cancionesManagerBd} from '../bd/cancionesManagerBd';
import * as multer from "multer";
import * as path from "path";
import * as fs from "fs";
import { rutaCanciones } from "../global";
import * as bodyParser from 'body-parser';




class UploadAlbumesConfig {
    
    router: Router;
    storage: any;
    upload: any;
    app:any;

    constructor() {
        this.upload = multer({ dest: 'uploads/' });
        this.app = express2();
        this.router = Router();
        this.routes();

    }



    routes(): void {
        
        
        this.router.post('/subirAlbum',express.json(),this.subirAlbum); // ?ids=12345...,23426...,63464....
        this.router.put('/subirAlbum', this.actualizarArtista);
        this.router.delete('/subirAlbum', this.borrarArtista);
        this.router.post('/subirAlbumConCanciones',express.json(),this.subirAlbumConCanciones);
    }

    async subirAlbum(req: any, res: any, nextFunction: NextFunction) {
        try {
            console.log("subir album: "+req.body.nombre);
            var resultadoRegistrarAlbumEnBd = await albumesManagerBd.crear(req, res);

        } catch (error) {
            console.log(error);
        }
    }

    async subirAlbumConCanciones(req: any, res: any, nextFunction: NextFunction) {
        try {
            console.log("subir album: "+req.body.nombre);
            var resultadoRegistrarAlbumEnBd = await albumesManagerBd.crear(req, res);
            var resultadoRegistrarCanciones = cancionesManagerBd.crear(req,res);
        } catch (error) {
            console.log(error);
        }
    }

    async actualizarArtista(req: any, res: any, nextFunction: NextFunction) {


    }


    async borrarArtista(req: any, res: any, nextFunction: NextFunction) {

    }







}


export let uploadalbumesconfig = new UploadAlbumesConfig().router;

