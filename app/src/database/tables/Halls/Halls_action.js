import { ORM } from '../../DBConnectionModule.js';

export const addHall = async (requestObject) => {
  console.log('ORM: ' + ORM);
  result = await ORM.Halls.create({
    name: requestObject.name,
  })
    .then(() => {
      console.log(`Added Hall ${requestObject.name}`);
    })
    .catch((err) => {
      throw err;
    });
  return result;
};
