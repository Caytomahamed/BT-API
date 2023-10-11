/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('drivers').del()
  await knex('drivers').insert([
    {
      driverName: 'Michael Anderson',
      licenseNumber: 'ABC123',
      employDate: '2022-01-01',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      roleId: 2,
      bloodType: 'A+',
    },
    {
      driverName: 'Emily Davis',
      licenseNumber: 'DEF456',
      employDate: '2022-02-01',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      roleId: 2,
      bloodType: 'O-',
    },
    {
      driverName: 'David Wilson',
      licenseNumber: 'GHI789',
      employDate: '2022-03-01',
      address: '789 Oak St',
      city: 'Chicago',
      state: 'IL',
      roleId: 2,
      bloodType: 'B+',
    },
  ]);
};
