import React, { useEffect, useState } from "react";
import MoviesPageView from "./MoviesPageView";
import { getAllMovies } from "../../API/moviesCalls";

export default function MoviesPage() {
	const [movies, setMovies] = useState([]);

	const refreshMovies = async () => {
		setMovies(await getAllMovies());
	};

	useEffect(() => {
		refreshMovies();
	}, []);

	return <MoviesPageView movies={movies} />;
}
