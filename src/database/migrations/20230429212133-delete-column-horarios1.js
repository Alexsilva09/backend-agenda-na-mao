'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
  await queryInterface.removeColumn('horarios', 'especialidade',);

  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.createColumn('horarios', {

      especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

    });
  
  }
};

