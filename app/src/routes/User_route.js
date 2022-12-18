import express from 'express';
import {} from '../database/DBConnectionModule.js';

export const user_route = express.Router();

movie_route.get('/user/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_user_by_id(requestObject));
});
