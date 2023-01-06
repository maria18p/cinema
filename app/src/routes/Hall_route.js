import express from "express";
import {
	post_request_hall,
	get_request_hall_by_id,
	get_request_all_halls,
	post_request_add_seat,
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
	console.log("requestObject", requestObject);
	res.send(await get_request_all_halls(requestObject));
});

export default router;

router.get("/getSeatById", async (req, res) => {
	const requestObject = {
		id: req.query.ID,
	};
	res.send(await get_request_seat_by_id(requestObject));
});

router.post("/addSeat", async (req, res) => {
	const requestObject = {
		name: req.body.name,
		hallId: req.body.hallId,
	};

	if ((await post_request_add_seat(requestObject)) == 1) res.sendStatus(200);
});

router.post("/getAllSeats", async (req, res) => {
	const requestObject = req.body;
	// 	id: req.body.hallId,
	// };
	console.log("requestObject", requestObject);
	res.send(await get_request_all_seats(requestObject));
});
