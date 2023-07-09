'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('horarios','services_id', { 
      
      type: Sequelize.INTEGER,
      references: {model: 'services', key: 'id'},
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      
    });
     
  },

  async down (queryInterface) {
    
     await queryInterface.removeColumn('horarios', 'services_id');
     
  }
};
