import React, { useCallback, useEffect, useState } from "react";
import PresentationsView from "./PresentationsView";
import {
	addPresentation,
	getAllPresentations,
} from "../../../API/presentationCalls";
import { getAllMovies, getMovieById } from "../../../API/moviesCalls";
import { getAllHalls, getHallById } from "../../../API/hallsCalls";

const emptyDataObject = { attributes: [], values: [] };
const Presentations = () => {
	const [displayContent, setDisplayContent] = useState(false);
	const [data, setData] = useState(emptyDataObject);
	const [movies, setMovies] = useState([]);
	const [halls, setHalls] = useState([]);

	// const { movies, status } = useQuery("movies", refreshMovies);

	const refreshMovies = async () => {
		setMovies(await getAllMovies({}));
	};

	const refreshHalls = async () => setHalls(await getAllHalls({}));

	const refreshData = async () => {
		const newData = await getAllPresentations({});
		const tableData = [];
		await newData.forEach(async (obj) => {
			const date = new Date(obj.start).toLocaleDateString("he-IL");

			const dataRow = [];
			dataRow.push(obj.id);
			dataRow.push(date);
			dataRow.push(obj.time.split(":")[0] + ":" + obj.time.split(":")[1]);

			const movie = await getMovieById({ id: obj.MovieId });
			dataRow.push(movie.name);
			const hall = await getHallById({ id: obj.HallId });
			dataRow.push(hall.name);
			tableData.push(dataRow);
		});
		const attributes = ["id", "date", "starts", "movie", "hall"];
		setData({ attributes: attributes, values: tableData });
	};

	useEffect(() => {
		const start = async () => {
			await refreshData();
		};
		start();
		// return () => cleanup();
	}, []);

	useEffect(() => {
		refreshMovies();
		refreshHalls();
	}, [data]);

	useEffect(() => {
		setDisplayContent(true);
	}, [movies]);

	const submitForm = async (requestObject) => {
		if (await addPresentation(requestObject)) refreshData();
	};

	const showContent = () => {
		if (!displayContent) return <></>;
		return (
			<PresentationsView
				data={data}
				submitForm={submitForm}
				movies={movies}
				halls={halls}
			/>
		);
	};

	return <>{showContent()}</>;
};

export default Presentations;
