'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.removeColumn('services', 'time');
     
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.createColumn('services', {

      time:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
     });
     
  }
};
