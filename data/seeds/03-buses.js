/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('buses').del()
  await knex('buses').insert([
    {
      busno: 'BUS001',
      driverId: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2021,
      color: 'Red',
      capacity: 50,
    },
    {
      busno: 'BUS002',
      driverId: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2022,
      color: 'Blue',
      capacity: 40,
    },
    {
      busno: 'BUS003',
      driverId: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2023,
      color: 'Yellow',
      capacity: 30,
    },
  ]);
};
