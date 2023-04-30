'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.removeColumn('horarios', 'colaboradores');
     
  },

  async down (queryInterface, Sequelize) {
   
   await queryInterface.createColumn('horarios', {

    colaboradores: {
      type: Sequelize.STRING,
      allowNull: false,
    },

   });
  
  }
};
