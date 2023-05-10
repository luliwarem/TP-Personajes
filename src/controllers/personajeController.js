import { Router } from 'express';
import { personajeService } from '../services/personajeService.js';
import { Authenticate } from '../common/jwt.strategy.js';

const router = Router();
const PersonajeService = new personajeService();

router.get('', Authenticate, async (req, res) => {
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getAll();

  return res.status(200).json(personaje);
});

router.get('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a get operation`);

  const personaje = await PersonajeService.getById(req.params.id);

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

  const personaje = await PersonajeService.updateById(req.body);

  return res.status(200).json(personaje);
});

router.delete('/:id', Authenticate, async (req, res) => {
  console.log(`Request URL Param: ${req.params.id}`);
  console.log(`This is a delete operation`);

  const personaje = await PersonajeService.deleteById(req.params.id);

  return res.status(200).json(personaje);
});

export default router;