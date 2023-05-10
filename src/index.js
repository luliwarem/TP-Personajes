import express from "express";
import cors from "cors";
import passport from 'passport';
import { jwtStrategy } from './common/jwt.strategy.js';
import personajeRouter from "./controllers/personajeController.js";
import peliculaRouter from "./controllers/peliculaController.js";
import authRouter from "./controllers/authController.js"


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/personaje", personajeRouter);
app.use("/pelicula", peliculaRouter);
app.use("/auth", authRouter);



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});