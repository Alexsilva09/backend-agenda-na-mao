'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   
     await queryInterface.removeColumn('horarios', 'days');
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.createColumn('horarios','days', {

      type: Sequelize.STRING,
        allowNull: false,

     });
     
  }
};
