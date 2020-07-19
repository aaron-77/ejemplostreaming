
import * as mysql from "promise-mysql";
import * as Bluebird from 'bluebird';

import configuracionesBd from './configuracionesBd';
    


const pool = mysql.createPool(configuracionesBd.database);
    
const conexion = pool.then((r:any) => r.getConnection().then((connection:Bluebird<mysql.Connection>)=>{
        r.releaseConnection(connection);
        console.log('Conexion exitosa.')
    })).catch((error)=>{
        console.log("error de conexion con la base de datos ");
    });
    

 


export default pool;


