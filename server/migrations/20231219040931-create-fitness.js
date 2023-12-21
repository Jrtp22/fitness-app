'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fitness', {
      fitness_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      height: {
        type: Sequelize.INTEGER,
      },
      fitness_goal: {
        type: Sequelize.STRING,
      },
      activity_level: {
        type: Sequelize.STRING,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('fitness');
  }
};
