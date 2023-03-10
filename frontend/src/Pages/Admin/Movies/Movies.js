import React, { useEffect, useState } from "react";
import MoviesView from "./MoviesView";
import { addMovie, getAllMovies } from "../../../API/moviesCalls";

const emptyObject = { attributes: [], values: [] };

const Movies = () => {
	const [data, setData] = useState(emptyObject);

	const refreshData = async () => {
		const newData = await getAllMovies();
		const tableData = [];
		newData.forEach((obj) => {
			const dataRow = [];
			dataRow.push(obj.id);
			dataRow.push(obj.name);
			dataRow.push(obj.length);
			dataRow.push(obj.ticketPrice);
			tableData.push(dataRow);
		});
		const attributes = ["ID", "Name", "Length", "Price"];
		setData({ attributes: attributes, values: tableData });
	};

	useEffect(() => {
		refreshData();
	}, []);

	const submitForm = async (requestOBject) => {
		if (await addMovie(requestOBject)) refreshData();
	};

	return <MoviesView data={data} submitForm={submitForm} />;
};

export default Movies;
