import express from 'express';
import bp from 'body-parser';
import cors from 'cors';
import { createDBConnection } from './database/DBConnectionModule.js';
import { movie_route } from './routes/Movie_route.js';
import { index_route } from './routes/Index_route.js';
import { hall_route } from './routes/Hall_route.js';
import { presentation_route } from './routes/Presentation_route.js';

const PORT = 3000;

const app = express();

const main = async () => {
  await startServer();
  await createDBConnection();
};

const startServer = async () => {
  app.use(cors());
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: false }));
  app.use('/movies', movie_route);
  app.use('/', index_route);
  app.use('/', hall_route);
  app.use('/', presentation_route);

  listen_port(app);
};

const listen_port = (app) => {
  app.listen(PORT, () => {
    console.log(`SERVER STARTED, LISTENING ON PORT: ${PORT}`);
  });
};

main();
