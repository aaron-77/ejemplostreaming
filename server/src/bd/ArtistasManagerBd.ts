import pool from './bd';
import {Request,Response} from 'express';


class ArtistasManagerBd{

    public async crear(req:Request,res:Response){
        var nombre = req.body.nombre;
        var nombreArtistico = req.body.nombreArtistico;
        var fehaDeNacimeinto = req.body.fehaDeNacimeinto;
        var web = req.body.web;
        console.log("1 :"+nombre);
        console.log("2 :"+nombreArtistico);
        console.log("3 :"+fehaDeNacimeinto);
        console.log("4 :"+web);
        try{
        (await pool).query('INSERT INTO artistas set ?',[req.body]);
        }catch(Exception){

            console.log(Exception.message);
        }
        res.end("artista creado exitosamente");
        

    }
    public actualizar(req:Request,res:Response){
        console.log("artista actualizado exitosmente");

    }
    public eliminar(req:Request,res:Response){
        console.log("artista eliminado exitosamente");

    }




}

export const artistasManagerBd = new ArtistasManagerBd();