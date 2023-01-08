import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import { getAllMovies, getMovieById } from "../../API/moviesCalls";
import {
	getAllPresentations,
	getAllPresentations_by_movieId,
	getPresentationById,
} from "../../API/presentationCalls";
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
		setPresentations(
			await getAllPresentations_by_movieId({ id: selectedMovie })
		);
	};

	const selectMovie = (movie) => setSelectedMovie(movie);
	const selectPresentation = async (presentation) => {
		const presentationObj = await getPresentationById({ id: presentation });
		setSelectedPresentation(presentationObj);
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

	const refreshMovieSeats = async () => {
		setMoviesSeats(
			await getPresentationSeatsByPresentation(selectedPresentation)
		);
	};
	const selectSeat = async (seat) => {
		const requestObject = {
			seatId: seat.id,
			presentationId: selectedPresentation.id,
		};
		await addPresentationSeats(requestObject);
		refreshMovieSeats();
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
