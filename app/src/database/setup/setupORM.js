import sequelize from 'sequelize';
import Movies_schema from '../tables/Movies/Movies_schema.js';
import Halls_schema from '../tables/Halls/Halls_schema.js';
import Presentation_schema from '../tables/Presentation/Presentation_schema.js';
import Presentation_Seat_schema from '../tables/Presentation_Seat/Presentation_Seat_schema.js';
import Seats_schema from '../tables/Seats/Seats_schema.js';
import Tickets_schema from '../tables/Tickets/Tickets_schema.js';
import Users_schema from '../tables/Users/Users_schema.js';

let DB_NAME = 'cinema';

const createDBConnection = async () => {
  return await new sequelize(DB_NAME, 'root', 'maria1234', {
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
  });
};

export const setup_ORM = async () => {
  const dbConnection = await createDBConnection();
  const ORM_OBJ = await define_ORM_tables(dbConnection);
  return ORM_OBJ;
};

const define_ORM_tables = async (dbConnection) => {
  console.log('================================================================');
  console.log('SETTING UP ORM TABLE CONNECTIONS...');
  const movies = await connectTable('Movies', Movies_schema, dbConnection);
  const halls = await connectTable('Halls', Halls_schema, dbConnection);
  const presentation = await connectTable('Presentation', Presentation_schema, dbConnection);
  const seats = await connectTable('Seats', Seats_schema, dbConnection);
  const tickets = await connectTable('Tickets', Tickets_schema, dbConnection);
  const users = await connectTable('Users', Users_schema, dbConnection);
  const presentation_seat = await connectTable(
    'Presentation_Seat',
    Presentation_Seat_schema,
    dbConnection,
  );

  console.log('----------------------------------------------------------------');
  console.log('Creating Associations:');

  await halls.hasMany(seats, { onDelete: 'cascade' });
  await seats.belongsTo(halls, {
    foreignKey: 'id',
    // onDelete: 'cascade',
    // onUpdate: 'cascade'
  });
  console.log(`\thalls.hasMany(seats)\t->\tseats belongsTo(halls, on Seats.id)`);

  await presentation.belongsTo(movies, {
    foreignKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });
  await movies.hasMany(presentation);

  await presentation.belongsTo(halls, {
    foreignKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });
  await halls.hasMany(presentation);

  await presentation_seat.belongsTo(seats, {
    foreignKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await seats.hasMany(presentation_seat);

  await presentation_seat.belongsTo(presentation, {
    foreignKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await presentation.hasMany(presentation_seat);

  await tickets.belongsTo(users, {
    foreignKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  users.hasMany(tickets);

  await tickets.belongsTo(presentation_seat, {
    foreignKey: 'id',
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });
  presentation_seat.hasMany(tickets);

  console.log('----------------------------------------------------------------');
  console.log('Validating Tables');

  await validate_table(movies, 'Movies');
  await validate_table(halls, 'Halls');
  await validate_table(presentation, 'Presentation');
  await validate_table(presentation_seat, 'Presentation_Seat');
  await validate_table(seats, 'Seats');
  await validate_table(tickets, 'Tickets');
  await validate_table(users, 'Users');

  console.log('----------------------------------------------------------------');
  console.log('================================================================');

  return { movies, halls, presentation, presentation_seat, seats, tickets, users };
};

const connectTable = async (tableName, tableScheme, dbConnection) => {
  let table = await dbConnection.define(tableName, tableScheme);
  let indent = '\t';
  if (tableName.length < 8) indent = '\t\t\t';
  else if (tableName.length == 12) indent = '\t\t';
  console.log(`\t${tableName}${indent}TABLE CONNECTED`);
  return table;
};

const validate_table = async (table, tableName) => {
  await table
    .findAll({})
    .then(async () => {
      let indent = '\t';
      if (tableName.length < 8) indent = '\t\t\t';
      else if (tableName.length == 12) indent = '\t\t';
      console.log(`\t${tableName}${indent}TABLE VALIDATED`);
    })
    .catch((err) => {
      console.log(err);
      console.log(`TABLE '${tableName}' NOT FOUND`);
      console.log(`CREATING '${tableName}' TABLE`);
      table.sync({ alter: true });
      setup_ORM();
    });
};
