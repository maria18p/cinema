import { ORM } from '../../DBConnectionModule.js';

export const addMovie = async (requestObject) => {
  console.log('ORM: ' + ORM);
  let result = -1;
  result = await ORM.Movies.create({
    name: requestObject.name,
  })
    .then((result) => {
      console.log(`Movie ADDED: ${requestObject.name}`);
      return 1;
    })
    .catch((err) => console.log(err));

  console.log('result', result);
  return result;
};

export const allMovies = async () => {
  return await ORM.movies
    .findAll({})
    .then(async (rows) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

export const clear_records = async () => {
  const result = ORM.movies
    .destroy({ where: {} })
    .then(() => {
      return 'TABLE CLEARED';
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const update_name_movie = async (requestObject) => {
  const update_result = ORM.movies
    .update(
      {
        name: requestObject.updatedName,
      },
      { where: { name: requestObject.name } },
    )
    .then(async () => {
      return {
        message: `Movie ${requestObject.name} NAME UPDATED TO: ${requestObject.updateName}`,
      };
    });
  return update_result;
};

export const getMovieById = async (requestObject) => {
  const result = await ORM.movies
    .findByPk(requestObject.id)
    .then(async (row) => {
      return row;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const removeMovie = (requestObject) => {
  const result = ORM.movies
    .destroy({ where: { id: requestObject.id } })
    .then(() => {
      return `Movie bu id :${requestObject.id} was removed`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};
