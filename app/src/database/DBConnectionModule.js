import { setup_database } from './setup/setupDatabase.js';
import { setup_ORM } from './setup/setupORM.js';
import { addMovie } from './tables/Movies/Movies_actions.js';
let ORM;

export const createDBConnection = async () => {
  await setup_database();
  ORM = await setup_ORM();

  await addDefaultValues();
};

export { ORM };

const addDefaultValues = async () => {
  await addMovie({ name: 'Titanic' });
};
