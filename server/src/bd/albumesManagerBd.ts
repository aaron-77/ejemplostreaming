import pool from './bd';
import {Request,Response} from 'express';
import {cancionesManagerBd} from './cancionesManagerBd';


class AlbumesManagerBd{

    public async crear(req:Request,res:Response){
        var fkArtista = req.body.fkArtista;
        var titulo = req.body.titulo;
        var duracion = req.body.duracion;
        var numeroDeTracks = req.body.numeroDeTracks;
        var compañiaProductora = req.body.compañiaProductora;
        var tipoDeAlbum = req.body.tipoDeAlbum;
        var fechaDeLanzamiento = req.body.fechaDeLanzamiento;
        var urlDePortada = req.body.urlDePortada;
        var album = {
            fkArtista : fkArtista,
            titulo : titulo,
            duracion : duracion,
            numeroDeTracks : numeroDeTracks,
            compañiaProductora : compañiaProductora,
            tipoDeAlbum : tipoDeAlbum,
            fechaDeLanzamiento : fechaDeLanzamiento,
            urlDePortada : urlDePortada
        }
        var canciones = req.body.canciones;
        console.log("1 :"+fkArtista);
        console.log("2 :"+titulo);
        console.log("3 :"+duracion);
        console.log("4 :"+numeroDeTracks);
        console.log("1 :"+compañiaProductora);
        console.log("2 :"+tipoDeAlbum);
        console.log("3 :"+fechaDeLanzamiento);
        console.log("4 :"+urlDePortada);
        (await pool).query('INSERT INTO albumes set ?',[album]);

       
        res.end("album creado exitosamente");
        

    }
    public actualizar(req:Request,res:Response){
        console.log("album actualizado exitosmente");

    }
    public eliminar(req:Request,res:Response){
        console.log("album eliminado exitosamente");

    }




}

export const albumesManagerBd = new AlbumesManagerBd();