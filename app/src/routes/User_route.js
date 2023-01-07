import express from 'express';
import { get_request_all_users, request_post_user } from '../database/DBConnectionModule.js';

const router = express.Router();

router.get('/getAll', async (req, res) => {
  const requestObject = {};
  res.send(await get_request_all_users(requestObject));
});

router.get('/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_user_by_id(requestObject));
});

router.post('/addUser', async (req, res) => {
  const { username, password } = req.body;
  const requestObject = {
    username: username,
    password: password,
    permission: 0,
  };

  const result = await request_post_user(requestObject);
  res.send(await result);
});

export default router;
