import express from 'express';
import {} from '../database/DBConnectionModule.js';

export const seat_route = express.Router();

seat_route.get('seat/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_seat_by_id(requestObject));
});
