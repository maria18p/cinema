import express from 'express';
import { request_post_hall, get_request_hall_by_id } from '../database/DBConnectionModule.js';

const router = express.Router();

router.get('/halls/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_hall_by_id(requestObject));
});

router.post('/halls/addHall', async (req, res) => {
  console.log('GOT POST REQUEST IN HALLS');
  const name = req.body.name;
  const requestObject = {
    name: name,
  };
  res.send(await request_post_hall(requestObject));
});

router.put('/halls/update', async (req, res) => {
  const name = req.body.name;
  const requestObject = {
    name: name,
  };
  res.send(await request_post_hall(requestObject));
});

export default router;
