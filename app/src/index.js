import express from 'express';
import bp from 'body-parser';
import { createDBConnection } from './database/DBConnectionModule.js';

const PORT = 3000;

const app = express();

const main = async () => {
  await startServer();
  await createDBConnection();
};

const startServer = async () => {
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: false }));
  listen_port(app);
};

const listen_port = (app) => {
  app.listen(PORT, () => {
    console.log(`SERVER STARTED, LISTENING ON PORT: ${PORT}`);
  });
};

main();
