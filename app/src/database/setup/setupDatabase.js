import sequelize from 'sequelize';
import mysql from 'mysql2';
import util from 'util';

const DATABASE_NAME = `cinema`;

// interface CONFIG_SCHEMA {
//     host: string;
//     user: string;
//     password: string;
//     database?: string;

// }

let DB_CONFIG = {
  // dialect: 'mysql',
  host: 'localhost',
  user: 'root',
  password: 'maria1234',
};

const sendQuery = async (sql) => {
  const conn = mysql.createConnection(DB_CONFIG);
  try {
    const query = util.promisify(conn.query).bind(conn);
    const queryResult = await query(sql);
    return queryResult;
  } catch (err) {
    console.log(err.message);
    return null;
  } finally {
    conn.end();
  }
};

async function databaseExists() {
  const sql = `SHOW DATABASES LIKE '${DATABASE_NAME}';`;
  const queryResult = await sendQuery(sql);
  if (queryResult === null) return false;
  if (queryResult.length > 0) {
    console.log('DATABASE FOUND');
    return true;
  } else {
    console.log('DATABASE NOT FOUND');
    return false;
  }
}

async function createDatabase() {
  console.log('CREATING DATABASE...');
  const sql = `CREATE DATABASE ${DATABASE_NAME};`;
  await sendQuery(sql);
  DB_CONFIG.database = DATABASE_NAME;
  return await databaseExists();
}

export async function deleteDatabase() {
  const sql = `DROP DATABASE ${DATABASE_NAME};`;
  const queryResult = await sendQuery(sql);
}

export async function dropTable() {
  const sql = `DROP TABLE ${DATABASE_NAME}}`;
  const queryResult = await sendQuery(sql);
}

export async function setup_database() {
  if (!(await databaseExists())) await createDatabase();
}
