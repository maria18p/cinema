import express from "express";
import {
	get_request_all_movies,
	get_request_movie_by_id,
	post_request_add_movie,
} from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/getById", async (req, res) => {
	const requestObject = {
		id: req.query.id,
	};
	console.log("Object", Object);
	res.send(await get_request_movie_by_id(requestObject));
});

router.put("/update", async (req, res) => {
	const requestObject = {
		length: req.body.length,
		name: req.body.name,
	};

	res.send(await put_request_update_movie(requestObject));
});

router.post("/add", async (req, res) => {
	const requestObject = req.body;
	if ((await post_request_add_movie(requestObject)) == 1) res.sendStatus(200);
});

router.post("/getAll", async (req, res) => {
	const requestObject = {};
	res.send(await get_request_all_movies(requestObject));
});

export default router;
