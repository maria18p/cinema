import express from 'express';

export const index_route = express.Router();

index_route.get('/', async (req, res) => {
  console.log('->\tGOT BASE GET REQUEST');
  res.send(200);
});

index_route.post('/', async (req, res) => {
  console.log('->\tGOT BASE GET REQUEST');
  console.log(req.body.name);
  res.send(200);
});

/*
      [route] -> [DB]


      [DB] -> tables
              actions
              schema

      [route] -> points of input/output

*/
