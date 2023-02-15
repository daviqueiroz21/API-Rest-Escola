import Sequelize, { Model } from 'sequelize';

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
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
