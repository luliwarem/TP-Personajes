import sql from 'mssql';
import configDB from '../models/db.js';


export class peliculaService{
    getAll = async (name, order) => {
        const conn = await sql.connect(configDB);
        let query = 'SELECT PeliculaSerie.IdPeli, Imagen, Titulo, FechaDeCreacion FROM PeliculaSerie'

        
        if (name) {
            query+= ' WHERE Titulo = @pName'
        }
        if(order){
            query+= ` ORDER BY FechaDeCreacion ${order}`
        }

        console.log(query)

        const results = await conn.request()
        .input( "pName", sql.VarChar, name)
        .query(query)    
        return results.recordset;
    }
    
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM PeliculaSerie WHERE PeliculaSerie.IdPeli = @pId');
        const results2 = await conn.request().input("pId", id).query('SELECT * FROM Personaje INNER JOIN PeliPersonaje ON Personaje.IdPersonaje = PeliPersonaje.IdPersonaje WHERE PeliPersonaje.IdPeli = @pId')
        const pelicula = results.recordset[0]
        pelicula.peliculas = results2.recordset
        
        return pelicula;
    }
    
    
    updateById = async (id, pelicula) => {
        const conn = await sql.connect(configDB);

        const peliculaOriginal =  await this.getById(id)
        const results = await conn.request().input("pId", sql.Int, id)

        .input( "pImagen", sql.VarChar, pelicula?.Imagen ?? peliculaOriginal.Imagen)
        .input("pTitulo", sql.VarChar, pelicula?.Titulo ?? peliculaOriginal.Titulo)
        .input( "pFechaDeCreacion", sql.Date, pelicula?.FechaDeCreacion ?? peliculaOriginal.FechaDeCreacion)
        .input("pCalificacion", sql.Float, pelicula?.Calificacion ?? peliculaOriginal.Calificacion)
        .query('UPDATE PeliculaSerie SET Imagen = @pImagen, Titulo = @pTitulo, FechaDeCreacion = @pFechaDeCreacion, Calificacion = @pCalificacion  WHERE IdPeli = @pId');

        
        if (results.rowsAffected[0] == 0){
            return "Error";
        } 
        
        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        await conn.request().input("pId", id).query('DELETE FROM PeliPersonaje WHERE IdPeli = @pId');
        const results = await conn.request().input("pId", id).query('DELETE FROM PeliculaSerie WHERE IdPeli = @pId');

        if (results.rowsAffected[0] == 0){
            return "Error";
        } 

        return results.recordset;
    }
    
    
    insert = async (pelicula) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pImagen", sql.VarChar, pelicula?.Imagen)
        .input("pTitulo", sql.VarChar, pelicula?.Titulo)
        .input( "pFechaDeCreacion", sql.Date, pelicula?.FechaDeCreacion)
        .input("pCalificacion", sql.Float, pelicula?.Calificacion)
        .query('INSERT INTO PeliculaSerie (Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@pImagen, @pTitulo, @pFechaDeCreacion, @pCalificacion)');

        return results.recordset;
    }

}

