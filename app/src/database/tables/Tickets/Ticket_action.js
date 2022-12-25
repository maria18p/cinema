import { ORM } from '../../DBConnectionModule.js';

export const add_tickets = async (requestObject) => {
  const result = await ORM.tickets
    .create({
      id: requestObject.id,
    })
    .then(() => {
      console.log(`TICKET ${requestObject.id} ADDED`);
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const clear_tickets = async (requestObject) => {
  const result = ORM.tickets
    .destroy({ where: {} })
    .then(() => {
      return `TABLE CLEARED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const get_all_tickets = async () => {
  return await ORM.tickets
    .findAll({})
    .then(async (rows) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

export const update_seat = async (requestObject) => {
  const update_result = ORM.tickets
    .update(
      {
        id: requestObject.id,
      },
      { where: { id: requestObject.id } },
    )
    .then(async () => {
      return {
        message: `SEAT ${requestObject.id} UPDATED ${requestObject.id}`,
      };
    });
  return update_result;
};

export const get_tickets_by_id = async (requestObject) => {
  const result = await ORM.tickets
    .findByPk(requestObject.id)
    .then(async (row) => {
      return row;
    })
    .catch((err) => {
      console.log('REQUESTED TICKET NOT FOUND');
      return 404;
    });
  return result;
};

export const remove_movie = (requestObject) => {
  const result = ORM.tickets
    .destroy({ where: { id: requestObject.id } })
    .then(() => {
      return `TICKET: ${requestObject.id} WAS REMOVED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};
