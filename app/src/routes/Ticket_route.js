import express from 'express';
import {} from '../database/DBConnectionModule.js';

export const ticket_route = express.Router();

ticket_route.get('/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_tickett_by_id(requestObject));
});
