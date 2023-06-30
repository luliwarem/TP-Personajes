import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const PersonajeService = new personajeService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);

  const name = req.query.name
  const age = req.query.age
  const movies = req.query.movies

  const personaje = await PersonajeService.getAll(name, age, movies);

  return res.status(200).json(personaje);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getById(req.params.id);

  if(personaje == undefined){
    return res.status(404).json({error: `Id no encontrado`})

  }

  return res.status(200).json(personaje);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  const personaje = await PersonajeService.insert(req.body);

  return res.status(201).json(personaje);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const personaje = await PersonajeService.updateById(req.params.id, req.body);

  if(personaje == "Error"){
    return res.status(404).json({error: `Id no encontrado`})
  }else{
    return res.status(200).json(personaje);
  }

});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  
  const id = await PersonajeService.deleteById(req.params.id);

  if(pelicula == "Error"){
    return res.status(404).json({error: `Id no encontrado`})
  }else{
    return res.status(200).json(pelicula);
  }

});

export default router;