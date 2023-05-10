import { Router } from 'express';
import { peliculaService } from '../services/peliculaService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const PeliculaService = new peliculaService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);

  const pelicula = await PeliculaService.getAll();

  return res.status(200).json(pelicula);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const pelicula = await PeliculaService.getById(req.params.id);

  return res.status(200).json(pelicula);
});

router.post('', Authenticate, async (req, res) => {
  console.log(`This is a post operation`);

  const pelicula = await PeliculaService.insert(req.body);

  return res.status(201).json(pelicula);
});

router.put('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a put operation`);

  const pelicula = await PeliculaService.updateById(req.body);

  return res.status(200).json(pelicula);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const pelicula = await PeliculaService.deleteById(req.params.id);

  return res.status(200).json(pelicula);
});

export default router;