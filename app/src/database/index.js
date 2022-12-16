import express from 'express';
import bp from 'body-parser';

const PORT = 3000;

const app = express();

startServer();

const startServer = async () => {
  app.use(bp.json());
  app.use(bp.urlencoded({ extended: false }));
  listen_port(app);
};

const listen_port = (app) => {
  app.listen(PORT, () => {
    console.log(`SERVER STARTED, LISTENING ON PORT: ${PORT}`);
  });
  // database
  // .sync()
  // .then((conn) => app.listen(PORT))
  // .catch(err => {console.log(err)})
};

// startServer();
