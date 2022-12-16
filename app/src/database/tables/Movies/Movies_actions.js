import { ORM } from '../../DBConnectionModule.js';

export const addMovie = async (requestObject) => {
  console.log('ORM: ' + ORM);
  let result = -1;
  result = await ORM.movies
    .create({
      name: requestObject.name,
    })
    .then((result) => {
      console.log(`Movie ADDED: ${requestObject}`);
      return 1;
    })
    .catch((err) => console.log(err));

  console.log('result', result);
  return result;
};
