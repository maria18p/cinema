import express from "express";
import {} from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/getSeatById", async (req, res) => {
	const requestObject = {
		id: req.query.ID,
	};
	res.send(await get_request_seat_by_id(requestObject));
});

router.post("/addSeat", async (req, res) => {
	const requestObject = req.body;
	if ((await post_request_add_seat(requestObject)) == 1) res.send(200);
});

router.get("/getAllSeats", async (req, res) => {
	const requestObject = {
		id: req.body.hallId,
	};
	console.log("requestObject", requestObject);
	res.sendStatus(await get_request_all_seats(requestObject));
});

export default router;
