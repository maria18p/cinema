import express from "express";
import {
	get_request_all_presentations,
	get_request_all_presentations_by_movieId,
	get_request_presentation_by_id,
	get_request_presentation_seat_by_id,
	request_post_presentation_add,
} from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/:ID", async (req, res) => {
	const requestObject = {
		id: req.params.ID,
	};
	res.send(await get_request_presentation_seat_by_id(requestObject));
});

router.post("/add", async (req, res) => {
	const requestObject = {
		hall: parseInt(req.body.hall),
		movie: parseInt(req.body.movie),
		date: Date.parse(req.body.date),
		time: req.body.time,
	};
	// console.log("requestObject", requestObject);
	return await request_post_presentation_add(requestObject);
});

router.post("/getAll", async (req, res) => {
	const requestObject = req.body;
	res.send(await get_request_all_presentations(requestObject));
});

router.post("/getAllByMovie", async (req, res) => {
	const requestObject = req.body;
	res.send(await get_request_all_presentations_by_movieId(requestObject));
});

export default router;
