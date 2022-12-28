import express from "express";
import {
	post_request_hall,
	get_request_hall_by_id,
} from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/halls/:ID", async (req, res) => {
	const requestObject = {
		id: req.params.ID,
	};
	res.send(await get_request_hall_by_id(requestObject));
});

router.post("/halls/addHall", async (req, res) => {
	console.log("GOT POST REQUEST IN HALLS");
	const name = req.body.name;
	const requestObject = {
		name: name,
	};
	res.send(await post_request_hall(requestObject));
});

export default router;
