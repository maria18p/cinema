import express from "express";
import bp from "body-parser";
import { createDBConnection } from "./database/DBConnectionModule.js";
import { index_route } from "./routes/Index_route.js";
import Movie_router from "./routes/Movie_route.js";

const PORT = 3000;

const app = express();

const main = async () => {
	await startServer();
	await createDBConnection();
};

const startServer = async () => {
	app.use(bp.json());
	app.use(bp.urlencoded({ extended: false }));
	app.use("/movies", Movie_router);
	app.use("/", index_route);
	listen_port(app);
};

const listen_port = (app) => {
	app.listen(PORT, () => {
		console.log(`SERVER STARTED, LISTENING ON PORT: ${PORT}`);
	});
};

main();
