import './database';

import dotenv from 'dotenv';
import express from 'express';
import { resolve } from 'path';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';
import homeRoutes from './routes/homeRoutes';
import tokenRoutes from './routes/tokenRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use(homeRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
