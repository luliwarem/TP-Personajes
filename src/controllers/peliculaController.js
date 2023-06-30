import { Router } from 'express';
import { peliculaService } from '../services/peliculaService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const PeliculaService = new peliculaService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);

  const name = req.query.name
  const order = req.query.order

  const pelicula = await PeliculaService.getAll(name, order);

  return res.status(200).json(pelicula);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const pelicula = await PeliculaService.getById(req.params.id);

  if(pelicula == undefined ){
    return res.status(404).json({error: `Id no encontrado`})

  }

  return res.status(200).json(pelicula);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  
  if (req.body.Calificacion < 1 || req.body.Calificacion > 5 ) {
    return res.status(400).json({error: "La calificacion no es valida"})
  }
    
  const pelicula = await PeliculaService.insert(req.body);

  return res.status(201).json(pelicula);
  
  

});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  if (req.body.Calificacion < 1 || req.body.Calificacion > 5 ) {
    return res.status(400).json({error: "La calificacion no es valida"})
  }
  const pelicula = await PeliculaService.updateById(req.params.id, req.body);


  if(pelicula == "Error"){
    return res.status(404).json({error: `Id no encontrado`})
  }else{
    return res.status(200).json(pelicula);
  }


});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const pelicula = await PeliculaService.deleteById(req.params.id);

  if(pelicula == "Error"){
    return res.status(404).json({error: `Id no encontrado`})
  }else{
    return res.status(200).json(pelicula);
  }

});

export default router;