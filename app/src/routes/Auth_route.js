import express from "express";
import { request_get_login } from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/login", async (req, res) => {
	console.log("req", req.query);
	const requestObject = {
		username: req.query.username,
		password: req.query.password,
	};
	res.send(await request_get_login(requestObject));
	// res.send(await get_request_user_by_id(requestObject));
});

export default router;
