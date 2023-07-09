'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   
     await queryInterface.removeColumn('horarios', 'services_id');
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.createColumn('horarios','services_id', {

        type: Sequelize.INTEGER,
        references: {model: 'services', key: 'id'},
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',

     });
     
  }
};
