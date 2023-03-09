'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('collections', [
      {
        'id': 1,
        'collection_id': 1,
        'collection_name': 'company_profiles',
        'createdAt': '2023-03-09T08:51:40.595Z',
        'updatedAt': '2023-03-09T08:51:40.595Z'
      },
      {
        'id': 2,
        'collection_id': 2,
        'collection_name': 'people_profiles',
        'createdAt': '2023-03-09T08:51:57.613Z',
        'updatedAt': '2023-03-09T08:51:57.613Z'
      },
      {
        'id': 3,
        'collection_id': 3,
        'collection_name': 'cars',
        'createdAt': '2023-03-09T08:52:26.542Z',
        'updatedAt': '2023-03-09T08:52:26.542Z'
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('collections', null, {});

  }
};
