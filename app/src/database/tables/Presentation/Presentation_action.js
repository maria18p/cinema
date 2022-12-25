import { ORM } from '../../DBConnectionModule.js';

export const add_presentation = async (requestObject) => {
  const result = await ORM.presentations
    .create({
      HallId: requestObject.hall,
      MovieId: requestObject.movie,
      name: requestObject.name,
      start: requestObject.start,
      time: requestObject.time,
    })
    .then(() => {
      console.log(
        `ADDED PRESENTATION ${requestObject.name} START AT ${requestObject.start} O'CLOCK`,
      );
      return 200;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const clear_presentations = async (requestObject) => {
  const result = ORM.presentations
    .destroy({ where: {} })
    .then(() => {
      return `TABLE CLEARED`;
    })
    .catch((err) => {
      throw err;
    });
  return result;
};

export const get_all_presentations = async () => {
  return await ORM.presentations
    .findAll({})
    .then(async (rows) => {
      return rows;
    })
    .catch((err) => {
      throw err;
    });
};

export const update_presentation = async (requestObject) => {
  const update_result = ORM.presentations
    .update(
      {
        start: requestObject.start,
      },
      { where: { id: requestObject.id } },
    )
    .then(async () => {
      return {
        message: `PRESENTATION ${requestObject.name} TIME START UPDATED TO: ${requestObject.start}`,
      };
    });
  return update_result;
};

export const get_presentation_by_id = async (requestObject) => {
  const result = await ORM.presentations
    .findByPk(requestObject.id)
    .then(async (row) => {
      return row;
    })
    .catch((err) => {
      console.log('REQUESTED PRESENTATION NOT FOUND');
      return 404;
    });
  return result;
};

export const remove_presentation = (requestObject) => {
  const result = ORM.presentations
    .destroy({ where: { id: requestObject.id } })
    .then(() => {
      console.log(`PRESENTATION BY ID :${requestObject.id} was removed`);
      return 200;
    })
    .catch((err) => {
      return 404;
    });
  return result;
};
