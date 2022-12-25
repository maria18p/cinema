import express from "express";
import { get_request_hall_by_id } from "../database/DBConnectionModule";

export const hall_route = express.Router();

hall_route.get("/hall/:ID", async (req, res) => {
	const requestObject = {
		id: req.params.ID,
	};
	res.send(await get_request_hall_by_id(requestObject));
});
