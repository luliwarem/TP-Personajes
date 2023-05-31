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
            query+= ' ORDER BY FechaDeCreacion @pOrder'
        }

        const results = await conn.request()
        .input( "pName", sql.VarChar, name)
        .input( "pOrder", sql.VarChar, order)
        .query(query)    
        return results.recordset;
    }
    
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM PeliculaSerie WHERE PeliculaSerie.IdPeli = @pId');
        const results2 = await conn.request().input("pId", id).query('SELECT * FROM Personaje INNER JOIN PeliPersonaje ON Personaje.IdPersonaje = PeliPersonaje.Personaje WHERE PeliPersonaje.IdPeli = @pId')
        const pelicula = results.recordset[0]
        pelicula.peliculas = results2.recordset
        return pelicula;
    }
    
    
    updateById = async (id, pelicula) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", sql.Int, id)
        .input( "pImagen", sql.VarChar, pelicula.Imagen)
        .input("pTitulo", sql.VarChar, pelicula.Titulo)
        .input( "pFechaDeCreacion", sql.Int, pelicula.FechaDeCreacion)
        .input("pCalificacion", sql.Int, pelicula.Calificacion)
        .query('UPDATE Pelicula SET Imagen = @pImagen, Titulo = @pTitulo, FechaDeCreacion = @pFechaDeCreacion, Calificacion = @pCalificacion  WHERE IdPeli = @pId');
    
        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('DELETE FROM Pelicula WHERE IdPeli = @pId');
    
        return results.recordset;
    }
    
    
    insert = async (pelicula) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pImagen", sql.VarChar, pelicula.Imagen)
        .input("pTitulo", sql.VarChar, pelicula.Titulo)
        .input( "pFechaDeCreacion", sql.Int, pelicula.FechaDeCreacion)
        .input("pCalificacion", sql.Int, pelicula.Calificacion)
        .query('INSERT INTO Pelicula (Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@pImagen, @pTitulo, @pFechaDeCreacion, @pCalificacion)');
    
        return results.recordset;
    }

}

