import React from "react";
import {
	EmptySeat,
	OccupiedSeat,
	SeatContainer,
	Submit,
	VerticalContainer,
} from "./Home.style";
import shortid from "shortid";
import { FormSelect, SelectOption } from "../../Style/general";

export default function HomeView(props) {
	// console.log("props", props);
	const addMovieList = () => {
		return (
			<FormSelect
				onChange={(event) => {
					selectMovie(event);
				}}
			>
				<SelectOption>select</SelectOption>
				{props.movies.map((movie, index) => {
					return (
						<SelectOption value={movie.id} key={shortid.generate()}>
							{movie.name}
						</SelectOption>
					);
				})}
			</FormSelect>
		);
	};

	const selectMovie = (event) => {
		props.selectMovie(event.target.value);
	};

	const generateSelectLine = (presentation) => {
		return presentation.time + " " + presentation.HallId;
	};

	const addPresentations = () => {
		return (
			<FormSelect
				onChange={(event) => {
					selectPresentation(event);
				}}
			>
				<SelectOption>select</SelectOption>
				{props.presentations.map((presentation, index) => {
					return (
						<SelectOption value={presentation.id} key={shortid.generate()}>
							{generateSelectLine(presentation)}
						</SelectOption>
					);
				})}
			</FormSelect>
		);
	};

	const selectPresentation = (event) => {
		props.selectPresentation(event.target.value);
	};

	const addSeats = () => {
		return (
			<SeatContainer>
				{props.movieSeats.map((seat, index) => {
					if (seat.occupied)
						return (
							<OccupiedSeat
								key={shortid.generate()}
								onClick={() => chooseSeat(seat)}
							>
								{seat.name}
							</OccupiedSeat>
						);
					else
						return (
							<EmptySeat
								key={shortid.generate()}
								onClick={() => chooseSeat(seat)}
							>
								{seat.name}
							</EmptySeat>
						);
				})}
			</SeatContainer>
		);
	};

	const chooseSeat = (seat) => {
		props.selectSeat(seat);
	};

	return (
		<>
			<VerticalContainer>
				{addMovieList()}
				{addPresentations()}
				{addSeats()}
				<Submit>Submit</Submit>
			</VerticalContainer>
		</>
	);
}
