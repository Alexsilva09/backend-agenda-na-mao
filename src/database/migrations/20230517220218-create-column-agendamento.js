'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.addColumn('agendamentos', 'horario_id', {
      
      
        type: Sequelize.INTEGER,
        references: {model: 'horarios', key: 'id'},
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      
    
    });
     
  },

  async down (queryInterface) {
  
    await queryInterface.removeColumn('agendamentos', 'horario_id');
     
  }
};
