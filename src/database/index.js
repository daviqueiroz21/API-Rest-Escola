import Sequelize from 'sequelize';
import Aluno from '../models/Aluno';
import User from '../models/User';
import dataBaseConfig from '../config/database';

const models = [Aluno, User];
const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
