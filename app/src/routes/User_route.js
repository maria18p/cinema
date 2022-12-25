import express from 'express';
import { request_post_user } from '../database/DBConnectionModule.js';

export const user_route = express.Router();

user_route.get('/user/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_user_by_id(requestObject));
});

user_route.post('/user/addUser', async (req, res) => {
  const { username, password, permission } = req.body;
  const requestObject = {
    username: username,
    password: password,
    permission: permission,
  };

  const result = await request_post_user(requestObject);
  res.send(await result);
});
