'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('servicos', { 
      
      servico_id:{

        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      price:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      time:{
        type: Sequelize.INTEGER,
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

  async down (queryInterface,) {
    
     await queryInterface.dropTable('servicos');
     
  }
};
