import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  console.log('->\tGOT BASE GET REQUEST');
  res.send(200);
});

router.post('/', async (req, res) => {
  console.log('->\tGOT BASE GET REQUEST');
  console.log(req.body.name);
  res.send(200);
});

export default router;
