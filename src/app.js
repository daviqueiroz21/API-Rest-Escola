import './database';

import alunoRoutes from './routes/alunoRoutes';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import fotoRoutes from './routes/fotoRoutes';
import helmet from 'helmet';
import homeRoutes from './routes/homeRoutes';
import { resolve } from 'path';
import tokenRoutes from './routes/tokenRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

const whiteList = [
  'http://146.190.170.30/',
  'http://localhost:3001/',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
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
