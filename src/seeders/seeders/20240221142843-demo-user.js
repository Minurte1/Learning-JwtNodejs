'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('User', [
      {
        email: 'John Doe1',
        password: '123',
        username: 'fake1123',

      },
      {
        email: 'John Doe2',
        password: '123',
        username: 'fake12',

      },
      {
        email: 'John Doe3',
        password: '123',
        username: 'fake14',

      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
