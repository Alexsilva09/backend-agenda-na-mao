'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.createTable('horarios', { 

      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
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

      days:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      start:{
        type: Sequelize.DATE,
        allowNull: false,
      },

      end:{
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
