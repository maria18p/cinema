import express from "express";
import {
	post_request_hall,
	get_request_hall_by_id,
	get_request_all_halls,
	post_request_add_seats,
	get_request_all_seats,
} from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/getById", async (req, res) => {
	const requestObject = {
		id: req.query.id,
	};
	res.send(await get_request_hall_by_id(requestObject));
});

router.post("/addHall", async (req, res) => {
	console.log("GOT POST REQUEST IN HALLS");
	const requestObject = {
		name: req.body.name,
	};
	res.send(await post_request_hall(requestObject));
});

router.post("/getAll", async (req, res) => {
	const requestObject = {};
	res.send(await get_request_all_halls(requestObject));
});

router.get("/getSeatById", async (req, res) => {
	const requestObject = {
		id: req.query.ID,
	};
	res.send(await get_request_seat_by_id(requestObject));
});

router.post("/addSeat", async (req, res) => {
	const requestObject = req.body;

	if ((await post_request_add_seats(requestObject)) == 1) res.send(200);
});

router.post("/getAllSeats", async (req, res) => {
	console.log("res", req.body);
	const requestObject = {
		hallId: req.body.hallId,
	};

	res.send(await get_request_all_seats(requestObject));
});

export default router;
