import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValues: '',
          validate: {
            length: {
              args: [3, 255],
              msg: 'O nome deve ter entre 3 e 255 caracteres',
            },
            notEmpty: true,
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValues: '',
          validate: {
            length: {
              args: [3, 255],
              msg: 'O sobrenome deve ter entre 3 e 255 caracteres',
            },
            notEmpty: true,
          },

        },
        email: {
          type: Sequelize.STRING,
          defaultValues: '',
          unique: {
            msg: 'Já existe um aluno cadastrado com este e-mail',
          },
          validate: {
            isEmail: {
              msg: 'O email deve ser um email válido',
            },
            notEmpty: true,
          },

        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValues: 0,
          isInt: {
            msg: 'A idade deve ser um número inteiro',
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValues: 0,
          isFloat: {
            msg: 'O peso deve ser um número real',
          },
        },
        altura: {
          type: Sequelize.INTEGER,
          defaultValues: 0,
          isFloat: {
            msg: 'A altura deve ser um número real',
          },
        },
      },
      {
        sequelize,
      },
    );

    return this;
  }
}
