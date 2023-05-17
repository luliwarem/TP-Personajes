import sql from 'mssql';
import configDB from '../models/db.js';


export class personajeService{
    getAll = async (name, age, movies) => {
        const conn = await sql.connect(configDB);
        const query = 'SELECT Personaje.IdPersonaje, Imagen, Nombre FROM Personaje INNER JOIN PeliPersonaje ON PeliPersonaje.IdPersonaje = Personaje.IdPersonaje';
        const cont = 0
    
        if (name != undefined) {
            query+= ' WHERE Nombre = @name'
            cont++
        }
        else if(age != undefined){
            cont ++
            if(cont > 0){
                query += ' and'
            }
            query+= ' WHERE Edad = @age'
        }
        else if(movies != undefined){
            if(cont > 0){
                query += ' and'
            }
            query+= ' WHERE IdPeli = @movies'
        }

        const results = await conn.request().query(query)

        console.log(results)
    
        return results.recordset;
    }
    
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM Personaje  INNER JOIN PeliPersonaje ON PeliPersonaje.IdPersonaje = Personaje.IdPersonaje WHERE Personaje.IdPersonaje = @pId');
    
        return results.recordset;
    }
    
    
    updateById = async (id, personaje) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", sql.Int, id)
        .input( "pImagen", sql.VarChar, personaje.Imagen)
        .input("pNombre", sql.VarChar, personaje.Nombre)
        .input( "pEdad", sql.Int, personaje.Edad)
        .input("pPeso", sql.Int, personaje.Peso)
        .input("pHistoria", sql.VarChar, personaje.Historia)
        .query('UPDATE Personaje SET Imagen = @pImagen, Nombre = @pNombre, Edad = @pEdad, Peso = @pPeso, Historia = @pHistoria  WHERE IdPersonaje = @pId');
    
        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('DELETE FROM Personaje WHERE IdPersonaje = @pId');
    
        return results.recordset;
    }
    
    
    insert = async (personaje) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pImagen", sql.VarChar, personaje.Imagen)
        .input("pNombre", sql.VarChar, personaje.Nombre)
        .input( "pEdad", sql.Int, personaje.Edad)
        .input("pPeso", sql.Int, personaje.Peso)
        .input("pHistoria", sql.VarChar, personaje.Historia)
        .query('INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia) VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria)');
    
        return results.recordset;
    }

}
