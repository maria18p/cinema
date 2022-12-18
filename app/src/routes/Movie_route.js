import express from 'express';
import { get_request_movie_by_id } from '../database/DBConnectionModule.js';

export const movie_route = express.Router();

movie_route.get('/movies/:ID', async (req, res) => {
  const requestObject = {
    id: req.params.ID,
  };
  res.send(await get_request_movie_by_id(requestObject));
});

movie_route.put('/update_length_movie', async (req, res) => {});

/*
      [route] -> [DB]


      [DB] -> tables
              actions
              schema

      [route] -> points of input/output

*/
