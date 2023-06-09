'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('services','time', { 
      
        type: Sequelize.DATE,
        allowNull: false,
      
    });
     
  },

  async down (queryInterface) {
    
     await queryInterface.removeColumn('services');
     
  }
};
