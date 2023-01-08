import express from "express";
import {
	get_request_presentation_seat_by_presentation_id,
	post_request_add_presentation_seat,
} from "../database/DBConnectionModule.js";

export const presentation_seat_route = express.Router();

presentation_seat_route.post("/getByPresentation", async (req, res) => {
	const requestObject = req.body;
	console.log("requestObject", requestObject);
	const result = await get_request_presentation_seat_by_presentation_id(
		requestObject
	);
	res.send(result);
});

presentation_seat_route.post("/add", async (req, res) => {
	const requestObject = req.body;
	const queryResult = await post_request_add_presentation_seat(requestObject);
	if (queryResult === -1)
		res.send({ message: "Seat already taken !", code: -1 });
	else res.send({ message: "Seat Reserved Successfully !", code: 200 });
});
