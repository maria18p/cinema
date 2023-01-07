import express from 'express';
import {} from '../database/DBConnectionModule.js';

export const seat_route = express.Router();

seat_route.get('/getById', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_seat_by_id(requestObject));
});

router.post('/add', async (req, res) => {
  const requestObject = {
    name: req.body.name,
    hallId: req.body.hallId,
  };
  if ((await post_request_add_movie(requestObject)) == 1) res.send(200);
});
