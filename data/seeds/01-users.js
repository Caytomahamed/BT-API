/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('roles').del()
  await knex('roles').insert([
    { name: 'Admin' },
    { name: 'Driver' },
    { name: 'Passenger' },
  ]);
  await knex('users').del()
  await knex('users').insert([
    {
      firstname: 'John',
      lastname: 'Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      phone: 1234567890,
      imageUrl: 'https://example.com/avatar.jpg',
      roleId: 3,
      isActive: true,
      birthdate: '1990-01-01',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      bloodType: 'A+',
    },
    {
      firstname: 'Jane',
      lastname: 'Smith',
      email: 'janesmith@example.com',
      password: 'password456',
      phone: 9876543210,
      imageUrl: 'https://example.com/avatar.jpg',
      roleId: 3,
      isActive: true,
      birthdate: '1995-05-05',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      bloodType: 'O-',
    },
    {
      firstname: 'Robert',
      lastname: 'Johnson',
      email: 'robertjohnson@example.com',
      password: 'password789',
      phone: 5555555555,
      imageUrl: 'https://example.com/avatar.jpg',
      roleId: 3,
      isActive: true,
      birthdate: '1985-12-12',
      address: '789 Oak St',
      city: 'Chicago',
      state: 'IL',
      bloodType: 'B+',
    },
  ]);
};
