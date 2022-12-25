import express from "express";
import { get_request_movie_by_id } from "../database/DBConnectionModule.js";

const router = express.Router();

router.get("/:ID", async (req, res) => {
	const requestObject = {
		id: req.params.ID,
	};
	res.send(await get_request_movie_by_id(requestObject));
});

router.put("/update", async (req, res) => {
	const requestObject = {
		length: req.body.length,
		name: req.body.name,
	};

	res.send(await put_request_update_movie(requestObject));
});

export default router;

/*
      [route] -> [DB]


      [DB] -> tables
              actions
              schema

      [route] -> points of input/output

*/
