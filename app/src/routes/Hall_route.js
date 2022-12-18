import express from 'express';
import {} from '../database/DBConnectionModule.js';

export const hall_route = express.Router();

movie_route.get('/hall/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_hall_by_id(requestObject));
});
