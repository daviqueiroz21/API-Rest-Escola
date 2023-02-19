import Sequelize, { Model } from 'sequelize';

import config from '../config/app';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValues: '',
          notEmpty: {
            msg: 'O Campo originalName não pode ser vazio',
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValues: '',
          notEmpty: {
            msg: 'O Campo originalName não pode ser vazio',
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.URL}/images/${this.getDataValue('filename')}`;
          },
        },
      },
      {
        sequelize,
        tableName: 'fotos',
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
