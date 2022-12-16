import sequelize from 'sequelize';
import Movies_schema from '../tables/Movies/Movies_schema.js';

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

  // console.log("----------------------------------------------------------------")
  // console.log("Creating Associations:")

  console.log('----------------------------------------------------------------');
  console.log('Validating Tables');

  await validate_table(movies, 'Movies');

  console.log('----------------------------------------------------------------');
  console.log('================================================================');

  return { movies };
};

const connectTable = async (tableName, tableScheme, dbConnection) => {
  let table = await dbConnection.define(tableName, tableScheme);
  let indent = '\t';
  if (tableName.length < 8) indent = '\t\t';
  console.log(`\t${tableName}${indent}TABLE CONNECTED`);
  return table;
};

const validate_table = async (table, tableName) => {
  await table
    .findAll({})
    .then(async () => {
      let indent = '\t';
      if (tableName.length < 8) indent = '\t\t';
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
