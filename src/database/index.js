import Sequelize from 'sequelize';
import Aluno from '../models/Aluno';
import dataBaseConfig from '../config/database';

const models = [Aluno];
const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
