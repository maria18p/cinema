import express from "express";
import {} from "../database/DBConnectionModule.js";

export const ticket_route = express.Router();

movie_route.get("/presentation_seat/:ID", async (req, res) => {
	const requestObject = {
		id: req.params.ID,
	};
	res.send(await get_request_ticket_by_id(requestObject));
});
