import { ORM } from '../../DBConnectionModule.js';

export const add_presentation_seats = async (requestObject) => {
  const result = await ORM.presentation_seats
    .create({
      occupied: requestObject.occupied,
    })
    .then(() => {
      console.log(`PRESENTATION SEAT ${requestObject.occupied} ADDED`);
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const clear_presentation_seats = async (requestObject) => {
  const result = ORM.presentation_seats
    .destroy({ where: {} })
    .then(() => {
      return `TABLE CLEARED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const get_all_presentation_seats = async () => {
  return await ORM.presentation_seats
    .findAll({})
    .then(async (rows) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

export const update_seat = async (requestObject) => {
  const update_result = ORM.presentation_seats
    .update(
      {
        ocuppied: requestObject.ocuppied,
      },
      { where: { id: requestObject.id } },
    )
    .then(async () => {
      return {
        message: `PRESENTATION SEAT ${requestObject.id} UPDATED ${requestObject.id}`,
      };
    });
  return update_result;
};

export const get_presentation_seats_by_id = async (requestObject) => {
  const result = await ORM.presentation_seats
    .findByPk(requestObject.id)
    .then(async (row) => {
      return row;
    })
    .catch((err) => {
      console.log('REQUESTED PRESENTATION SEAT NOT FOUND');
      return 404;
    });
  return result;
};

export const remove_movie = (requestObject) => {
  const result = ORM.presentation_seats
    .destroy({ where: { id: requestObject.id } })
    .then(() => {
      return `PRESENTATION SEAT BY ID :${requestObject.id} WAS REMOVED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};
