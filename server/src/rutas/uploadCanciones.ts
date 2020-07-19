import { Router, Request, Response, NextFunction } from "express";
import * as express from 'express';
//var express = require('express');
import { cancionesManagerBd } from '../bd/cancionesManagerBd';
import * as multer from "multer";
import * as path from "path";
import * as fs from "fs";
import { rutaCanciones } from "../global";
import {segmentador} from '../segmentador/segmentador';



class UploadCancionesConfig {

    router: Router;
    storage: any;
    upload: any;
    app : any;





    constructor() {
        this.storage = multer.diskStorage({

            destination: (req, file, cb) => {
                // let rutaDeGuardado = path.join('./artistas', req.params.nombreArtista, req.params.nombreAlbum);
                let cancion = req.body.titulo;
                let artista = req.body.nombreArtista;
                let album = req.body.nombreAlbum;
                console.log("cancion: " + cancion);
                console.log("artista: " + artista);
                console.log("album: " + album);
                cb(null, "../artistas/" + artista + "/" + album);

            },
            filename: (req, file, cb) => {
                let nombre: String = req.body.titulo;
                cb(null, nombre + path.extname(file.originalname));
            }
        });

        this.upload = multer({ storage: this.storage, limits: { filesize: 209800000 } });
        this.router = Router();
        this.routes();



    }
    routes(): void {
        this.router.use( express.json());
        this.router.use( this.upload.single('archivo'));
        this.router.post('/subirArchivo',this.subirCancion);
    }

    

    async subirCancion(req: any, res: any, nextFunction: NextFunction) {
    
        try {
            console.log("Artista2: "+req.params.nombreArtista);
            console.log("Album2 :"+req.params.nombreAlbum);
            var cancionConExtesion = req.body.titulo+".mp3";

            var idArista = req.body.fkArtista;
            var resultadoRegistrarCancionEnBd = await cancionesManagerBd.crear(req, res);
            var resultadoSegmentarArchivo =  segmentador.segmentar(req.body.nombreArtista,req.body.nombreAlbum,cancionConExtesion);
            console.log("archivo subido correctamente");
            res.status(200);
            res.end("peticion exitosa");
            
        } catch (error) {
            console.log(error);

        }
        /*
        if (!req.file) {
            res.status(400).json({ message: "No se ha enviado archivo" });
        }
        else {
            console.log("archivo subido correctamente");
            res.status(200);
            res.end("peticion exitosa");
        }
        */
    }







}


export let uploadcanciones = new UploadCancionesConfig().router;

