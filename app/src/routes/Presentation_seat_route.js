import express from 'express';
import {} from '../database/DBConnectionModule.js';

export const presentation_seat_route = express.Router();

movie_route.get('/presentaton_seat/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_presentaion_seat_by_id(requestObject));
});
