import express from "express";
import bp from "body-parser";
import cors from "cors";
import { createDBConnection } from "./database/DBConnectionModule.js";
import Movie_route from "./routes/Movie_route.js";
import Index_route from "./routes/Index_route.js";
import Hall_route from "./routes/Hall_route.js";
import Presentation_route from "./routes/Presentation_route.js";
import User_route from "./routes/User_route.js";
import Auth_route from "./routes/Auth_route.js";
import { presentation_seat_route } from "./routes/Presentation_seat_route.js";

const PORT = 5000;

const main = async () => {
	await startServer();
	await createDBConnection();
};

const startServer = async () => {
	const app = express();
	config_app(app);
	config_routes(app);
	listen_port(app);
};

const config_app = (app) => {
	app.use(cors({}));
	app.use(bp.json());
	app.use(bp.urlencoded({ extended: false }));
};

const config_routes = (app) => {
	app.use("/", Index_route);
	app.use("/Movies", Movie_route);
	app.use("/Halls", Hall_route);
	app.use("/Presentations", Presentation_route);
	app.use("/Users", User_route);
	app.use("/Auth", Auth_route);
	app.use("/PresentationSeats", presentation_seat_route);
};

const listen_port = (app) => {
	app.listen(PORT, () => {
		console.log(`SERVER STARTED, LISTENING ON PORT: ${PORT}`);
	});
};

main();
