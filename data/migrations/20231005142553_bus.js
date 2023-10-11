exports.up = function (knex) {
  return knex.schema
    .createTable('roles', function (table) {
      table.increments('id').primary().notNullable();
      table.string('name', 50).notNullable();
    })
    .createTable('users', function (table) {
      table.increments('id').primary().notNullable();
      table.string('firstname', 255).notNullable();
      table.string('lastname', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.integer('phone').notNullable()
      table.string('imageUrl', 255)
      table.integer('roleId').unsigned().notNullable();
      table
        .foreign('roleId')
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.boolean('isActive').defaultTo(true).notNullable();
      table.date('birthdate').nullable();
      table.string('address', 255)
      table.string('city', 100)
      table.string('state', 100)
      table.string('bloodType', 10).nullable(); // New field for blood type
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('drivers', function (table) {
      table.increments('id').primary().notNullable();
      table.string('driverName', 50).notNullable();
      table.string('licenseNumber', 50).notNullable();
      table.date('employDate').notNullable();
      table.string('address', 255).notNullable();
      table.string('city', 100).notNullable();
      table.string('state', 100).notNullable();
      table
        .integer('roleId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.string('bloodType', 10).nullable(); // New field for blood type
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('buses', function (table) {
      table.increments('id').primary().notNullable();
      table.string('busno', 50).notNullable();
      table
        .integer('driverId')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('drivers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.string('make', 50).notNullable();
      table.string('model', 50).notNullable();
      table.integer('year').notNullable();
      table.string('color', 50).notNullable();
      table.integer('capacity').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('routes', function (table) {
      table.increments('id').primary().notNullable();
      table.integer('busId').notNullable();
      table.float('price').notNullable();
      table.string('start', 50).notNullable();
      table.string('finish', 50).notNullable();
      table.integer('duration').notNullable();
      table.string('description', 255).nullable(); // New field for description
      table.string('departureTime', 50).nullable(); // New field for departure time
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
    .createTable('schedules', function (table) {
      table.increments('id').primary().notNullable();
      table.string('departureDate', 255).notNullable();
      table.string('departureTime', 255).notNullable();
      table
        .integer('routeId')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('routes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.integer('capacity').notNullable(); // New field for capacity
      table.float('occupancy').nullable(); // New field for occupancy
      table.string('status', 50).nullable(); // New field for status
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('schedules')
    .dropTableIfExists('routes')
    .dropTableIfExists('buses')
    .dropTableIfExists('drivers')
    .dropTableIfExists('users')
    .dropTableIfExists('roles');
};
