import sql from 'mssql';
import configDB from '../models/db.js';


export class peliculaService{
    getAll = async () => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().query('SELECT * FROM PeliculaSerie');
    
        console.log(results)
    
        return results.recordset;
    }
    
    
    getById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('SELECT * FROM PeliculaSerie INNER JOIN PeliPersonaje ON PeliPersonaje.IdPeli = Pelicula.IdPeli INNER JOIN Personaje ON Personaje.IdPersonaje = PeliPersonaje.IdPersonaje WHERE @pId = id'   );
    
        return results.recordset;
    }
    
    
    updateById = async (id, pelicula) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", sql.Int, id)
        .input( "pImagen", sql.VarChar, pelicula.imagen)
        .input("pTitulo", sql.Bit, pelicula.titulo)
        .input( "pFechaDeCreacion", sql.Float, pelicula.fechaDeCreacion)
        .input("pCalificacion", sql.VarChar, pelicula.calificacion)
        .query('UPDATE PeliculaSerie SET Imagen = @pImagen, Titulo = @pTitulo, FechaDeCreacion = @pFechaDeCreacion, Calificacion = @pCalificacion  WHERE @pId = id ');
    
        return results.recordset;
    }
    
    
    deleteById = async (id) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request().input("pId", id).query('DELETE FROM PeliculaSerie WHERE @pId = id');
    
        return results.recordset;
    }
    
    
    insert = async (pelicula) => {
        const conn = await sql.connect(configDB);
        const results = await conn.request() 
        .input( "pImagen", sql.VarChar, pelicula.imagen)
        .input("pTitulo", sql.Bit, pelicula.titulo)
        .input( "pFechaDeCreacion", sql.Float, pelicula.fechaDeCreacion)
        .input("pCalificacion", sql.VarChar, pelicula.calificacion)
        .query('INSERT INTO PeliculaSerie (Imagen, Titulo, FechaDeCreacion, Calificacion) VALUES (@pImagen, @pTitulo, @pFechaDeCreacion, @pCalificacion)');
    
        return results.recordset;
    }

}

