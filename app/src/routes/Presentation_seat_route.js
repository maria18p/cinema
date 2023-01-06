import express from "express";
import {
	get_request_presentation_seat_by_presentation_id,
	post_request_add_presentation_seat,
} from "../database/DBConnectionModule.js";

export const presentation_seat_route = express.Router();

presentation_seat_route.post("/getByPresentation", async (req, res) => {
	const requestObject = {
		presentationId: req.body.id,
	};
	const result = await get_request_presentation_seat_by_presentation_id(
		requestObject
	);
	res.send(
		await get_request_presentation_seat_by_presentation_id(requestObject)
	);
});

presentation_seat_route.post("/add", async (req, res) => {
	const requestObject = req.body;

	res.send(await post_request_add_presentation_seat(requestObject));
});
