'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('horarios', { 
      
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      colaboradores: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      dias: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    
      inicio:{
        type: Sequelize.DATE,
        allowNull: false
      },

      fim:{
        type: Sequelize.DATE,
        allowNull: false,
      },

      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },

      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },

    });
     
  },

  async down (queryInterface) {
    
    await queryInterface.dropTable('horarios');
     
  }
};

