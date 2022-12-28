import express from "express";
import { request_post_presentation_add } from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/presentation/:ID", async (req, res) => {
	const requestObject = {
		id: req.params.ID,
	};
	res.send(await get_request_presentaion_by_id(requestObject));
});

router.post("/presentations/addPresentation", async (req, res) => {
	const requestObject = {
		hall: req.body.hall,
		movie: req.body.movie,
		start: new Date().getDate(),
		time: "00:00",
	};
	const result = await request_post_presentation_add(requestObject);
	res.send(result);
});

export default router;
