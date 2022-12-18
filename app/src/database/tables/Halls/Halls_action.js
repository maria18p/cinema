import { ORM } from '../../DBConnectionModule.js';

export const add_hall = async (requestObject) => {
  result = await ORM.halls
    .create({
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

export const clear_halls = async (requestObject) => {
  const result = ORM.halls
    .destroy({ where: {} })
    .then(() => {
      return `TABLE CLEARED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const get_all_halls = async () => {
  return await ORM.halls
    .findAll({})
    .then(async (rows) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

export const update_hall = async (requestObject) => {
  const update_result = ORM.halls
    .update(
      {
        name: requestObject.name,
      },
      { where: { id: requestObject.id } },
    )
    .then(async () => {
      return {
        message: `HALL ${requestObject.name} DESCRIPTION UPDATED TO: ${requestObject.name}`,
      };
    });
  return update_result;
};

export const get_hall_by_id = async (requestObject) => {
  const result = await ORM.halls
    .findByPk(requestObject.id)
    .then(async (row) => {
      return row;
    })
    .catch((err) => {
      console.log('REQUESTED HALL NOT FOUND');
      return 404;
    });
  return result;
};

export const remove_movie = (requestObject) => {
  const result = ORM.halls
    .destroy({ where: { id: requestObject.id } })
    .then(() => {
      return `Hall by id :${requestObject.id} was removed`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};
