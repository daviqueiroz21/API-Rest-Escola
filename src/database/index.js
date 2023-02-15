import Sequelize from 'sequelize';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';
import User from '../models/User';
import dataBaseConfig from '../config/database';

const models = [Aluno, User, Foto];
const connection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
