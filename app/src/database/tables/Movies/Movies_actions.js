import { ORM } from '../../DBConnectionModule.js';

export const add_movie = async (requestObject) => {
  let result = -1;
  result = await ORM.movies
    .create({
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

export const get_all_movies = async () => {
  return await ORM.movies
    .findAll({})
    .then(async (rows) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

export const clear_records_movies = async () => {
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

export const update_movie = async (requestObject) => {
  const update_result = ORM.movies
    .update(
      {
        name: requestObject.name,
        length: requestObject.length,
      },
      { where: { name: requestObject.name } },
    )
    .then(async () => {
      return {
        message: `MOVIE UPDATED TO: ${requestObject.name} / LENGTH: ${requestObject.length}`,
      };
    })
    .catch((err) => {
      throw err;
    });
  return update_result;
};

export const get_movie_by_id = async (requestObject) => {
  const result = await ORM.movies
    .findByPk(requestObject.id)
    .then(async (row) => {
      return row;
    })
    .catch((err) => {
      console.log('REQUESTED MOVIE NOT FOUND');
      return 404;
    });
  return result;
};

export const remove_movie = (requestObject) => {
  const result = ORM.movies
    .destroy({ where: { id: requestObject.id } })
    .then(() => {
      return `MOVIE BY ID :${requestObject.id} WAS REMOVED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};
