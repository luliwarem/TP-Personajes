import sql from 'mssql';
import configDB from '../models/db.js';


export class personajeService{
    getAll = async (name, age, movies) => {
        const conn = await sql.connect(configDB);
        let query = 'SELECT Personaje.IdPersonaje, Imagen, Nombre FROM Personaje'
        let cont = 0

        if(movies){
            cont++
            query+= ' INNER JOIN PeliPersonaje ON Personaje.IdPersonaje = PeliPersonaje.IdPersonaje WHERE IdPeli = @pMovies'
        }
        if (name) {
            if(cont > 0){
                query += ' and'
            }
            else{
                query += ' WHERE'
            }
            query+= ' Nombre = @pName'
            cont++
        }
        if(age){
            if(cont > 0){
                query += ' and'
            }
            else{
                query += ' WHERE'
            }
            query+= ' Edad = @pAge'
        }

        const results = await conn.request()
        .input( "pName", sql.VarChar, name)
        .input("pAge", sql.Int, age)
        .input( "pMovies", sql.Int, movies)
        .query(query)    
        return results.recordset;
    }
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM Personaje WHERE Personaje.IdPersonaje = @pId');
        const results2 = await conn.request().input("pId", id).query('SELECT * FROM PeliculaSerie INNER JOIN PeliPersonaje ON PeliculaSerie.IdPeli = PeliPersonaje.IdPeli WHERE PeliPersonaje.IdPersonaje = @pId')
        const personaje = results.recordset[0]
        personaje.peliculas = results2.recordset
        return personaje;
    }
    
    
    updateById = async (id, personaje) => {
        const conn = await sql.connect(configDB);

        const personajeOriginal = await this.getById(id)

        const results = await conn.request().input("pId", sql.Int, id)

        .input( "pImagen", sql.VarChar, personaje?.Imagen ?? personajeOriginal.Imagen)
        .input("pNombre", sql.VarChar, personaje?.Nombre ?? personajeOriginal.Nombre)
        .input( "pEdad", sql.Int, personaje?.Edad ?? personajeOriginal.Edad)
        .input("pPeso", sql.Int, personaje?.Peso ?? personajeOriginal.Peso)
        .input("pHistoria", sql.VarChar, personaje?.Historia ?? personajeOriginal.Historia)

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
        .input( "pImagen", sql.VarChar, personaje?.Imagen)
        .input("pNombre", sql.VarChar, personaje?.Nombre)
        .input( "pEdad", sql.Int, personaje?.Edad)
        .input("pPeso", sql.Int, personaje?.Peso)
        .input("pHistoria", sql.VarChar, personaje?.Historia)
        .query('INSERT INTO Personaje (Imagen, Nombre, Edad, Peso, Historia) VALUES (@pImagen, @pNombre, @pEdad, @pPeso, @pHistoria)');
    
        return results.recordset;
    }

}
