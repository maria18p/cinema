import express from 'express';
import { get_request_movie_by_id } from '../database/DBConnectionModule.js';
import { update_movie } from '../database/tables/Movies/Movies_actions.js';
export const movie_route = express.Router();

movie_route.get('/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_movie_by_id(requestObject));
});

movie_route.put('/update', async (req, res) => {
  const { name, length } = req.body;
  const requestObject = { name: name, length: length };
  res.send(await update_movie(requestObject));
});

/*
      [route] -> [DB]


      [DB] -> tables
              actions
              schema

      [route] -> points of input/output

*/
