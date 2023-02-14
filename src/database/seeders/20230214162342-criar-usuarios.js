const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'jhon@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_At: new Date(),
          updated_At: new Date(),
        },
        {
          nome: 'Joh12n Doe',
          email: 'jho2eqwn@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_At: new Date(),
          updated_At: new Date(),
        },
        {
          nome: 'Johwqe21n Doe',
          email: 'jho121n@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_At: new Date(),
          updated_At: new Date(),
        },
      ],

      {},
    );
  },

  async down() { },
};
