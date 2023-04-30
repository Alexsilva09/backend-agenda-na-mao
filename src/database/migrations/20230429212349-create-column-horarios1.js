'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.addColumn('horarios', 'especialidade_id', {

        type: Sequelize.INTEGER,
        references: {model: 'servicos', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
     });
     
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.removeColumn('horarios', 'especialidade_id',);
   
  }
};
