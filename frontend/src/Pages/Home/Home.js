import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import { getAllMovies } from "../../API/moviesCalls";
import { getAllPresentations } from "../../API/presentationCalls";
import {
	addPresentationSeats,
	getPresentationSeatsByPresentation,
} from "../../API/presentationSeatCalls";

export default function Home() {
	const [movies, setMovies] = useState([]);
	const [presentations, setPresentations] = useState([]);
	const [movieSeats, setMoviesSeats] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const [selectedPresentation, setSelectedPresentation] = useState(null);
	const [selectedMovieSeat, setSelectedMovieSeat] = useState(null);

	const refreshMovies = async () => {
		const result = await getAllMovies();
		setMovies(result);
	};

	const refreshPresentations = async () => {
		setPresentations(await getAllPresentations(selectedMovie));
	};

	const selectMovie = (movie) => setSelectedMovie(movie);
	const selectPresentation = (presentation) => {
		console.log("presentation", presentation);
		setSelectedPresentation(presentation);
	};
	const refreshMovieSeats = async () => {
		setMoviesSeats(
			await getPresentationSeatsByPresentation(selectedPresentation)
		);
	};

	useEffect(() => {
		refreshMovies();
	}, []);

	useEffect(() => {
		if (selectedMovie !== null) refreshPresentations();
	}, [selectedMovie]);

	useEffect(() => {
		if (selectedPresentation !== null) refreshMovieSeats();
	}, [selectedPresentation]);

	const selectSeat = async (seat) => {
		const requestObject = {
			seatId: seat.id,
			presentationId: selectedPresentation.id,
		};
		await addPresentationSeats(requestObject);
	};

	return (
		<HomeView
			movies={movies}
			presentations={presentations}
			movieSeats={movieSeats}
			selectMovie={selectMovie}
			selectPresentation={selectPresentation}
			selectSeat={selectSeat}
		/>
	);
}
