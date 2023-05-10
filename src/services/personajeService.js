import sql from 'mssql';
import configDB from '../models/db.js';


export class personajeService{
    getAll = async () => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().query('SELECT * FROM PeliculaSerie');
    
        console.log(results)
    
        return results.recordset;
    }
    
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM Personaje WHERE @pId = id');
    
        return results.recordset;
    }
    
    
    updateById = async (id, personaje) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", sql.Int, id)
        .input( "pImagen", sql.VarChar, personaje.imagen)
        .input("pNombre", sql.Bit, personaje.nombre)
        .input( "pEdad", sql.Float, personaje.edad)
        .input("pPeso", sql.VarChar, personaje.peso)
        .input("pHistoria", sql.VarChar, personaje.historia)
        .query('UPDATE Personaje SET Imagen = @pImagen, Nombre = @pNombre, Edad = @pEdad, Peso = @pPeso, Historia = @pHistoria  WHERE @pId = id ');
    
        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('DELETE FROM Personaje WHERE @pId = id');
    
        return results.recordset;
    }
    
    
    insert = async (personaje) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pImagen", sql.VarChar, personaje.imagen)
        .input("pNombre", sql.Bit, personaje.nombre)
        .input( "pEdad", sql.Float, personaje.edad)
        .input("pPeso", sql.VarChar, personaje.peso)
        .input("pHistoria", sql.VarChar, personaje.historia)
        .query('INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia) VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria)');
    
        return results.recordset;
    }

}
