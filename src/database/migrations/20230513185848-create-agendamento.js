'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('agendamentos', { 
      
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      tel:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      services_id:{
        type: Sequelize.INTEGER,
        references: {model: 'services', key: 'id'},
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      collaborators_id:{
        type: Sequelize.INTEGER,
        references: {model: 'collaborators', key: 'id'},
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      date:{
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

  async down (queryInterface, Sequelize) {
    
     await queryInterface.dropTable('agendamentos');
     
  }
};
