'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('horarios','days', { 
      
        type: Sequelize.STRING,
        allowNull: false,
      
    });
     
  },

  async down (queryInterface) {
    
     await queryInterface.removeColumn('horarios', 'days');
     
  }
};