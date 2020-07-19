import pool from './bd';
import { Request, Response } from 'express';


class CancionesManagerBd {

    public async crear(req: Request, res: Response) {
  
      
       var body = req.body;
        var fkAlbum = req.body.fkAlbum;
        var titulo = req.body.titulo;
        var numeroDeTrack = req.body.numeroDeTrack;
        var genero = req.body.genero;
        var codigoIsrc = req.body.codigoIsrc;
        var tamañoEnMb = req.body.tamañoEnMb;
        var duracion = req.body.duracion;
        var bitrate = req.body.bitrate;
        var audiencia = req.body.audiencia;
        var contenidoExplicito = req.body.contenidoExplicito;
        var urlDeUbicacion = req.body.urlDeUbicacion;
        

        var cancionBody = {
            fkAlbum : fkAlbum,
            titulo : titulo,
            numeroDeTrack : numeroDeTrack,
            genero : genero,
            codigoIsrc : codigoIsrc,
            tamañoEnMb : tamañoEnMb,
            duracion : duracion,
            bitrate : bitrate,
            audiencia : audiencia,
            contenidoExplicito : contenidoExplicito,
            urlDeUbicacion : urlDeUbicacion
        };
        (await pool).query('INSERT INTO canciones set ?', [cancionBody]);
        
       
       //var contador = 0;
        /*
        for (var cancion in req.body) {
            try{
                var cancionJson = JSON.parse(cancion)
                console.log(cancionJson);
                
            }catch(err){

            }
          
            
            //console.log("cancion creada exitosamente");
            //contador++;

        }
        */
        
        
        
        //console.log(body);

        

    }

    public actualizar(req: Request, res: Response) {
        console.log("cancion actualizada exitosmente");

    }
    public eliminar(req: Request, res: Response) {
        console.log("cancion eliminada exitosamente");

    }




}

export const cancionesManagerBd = new CancionesManagerBd();