'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   
     await queryInterface.removeColumn('users', 'cod');
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.createColumn('users','cod', {

      type: Sequelize.STRING,

     });
     
  }
};
