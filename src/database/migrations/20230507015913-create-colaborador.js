'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable('collaborators', { 
      
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      path:{
        type: Sequelize.STRING
      },

      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },

      tel:{
        type: Sequelize.STRING,
        allowNull: false
      },
      
      moderator:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },

      password:{
        type: Sequelize.STRING,
        allowNull: false
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
    
     await queryInterface.dropTable('collaborators');
    
  }
};
