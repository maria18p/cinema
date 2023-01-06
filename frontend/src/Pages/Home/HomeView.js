import React from "react";
import {
	EmptySeat,
	OccupiedSeat,
	SeatContainer,
	Submit,
	VerticalContainer,
} from "./Home.style";
import shortid from "shortid";

export default function HomeView(props) {
	// console.log("props", props);
	const addMovieList = () => {
		return (
			<select>
				{props.movies.map((movie, index) => {
					return (
						<option
							value={movie}
							key={shortid.generate()}
							onClick={() => props.selectMovie(movie)}
						>
							{movie.name}
						</option>
					);
				})}
			</select>
		);
	};

	const generateSelectLine = (presentation) => {
		return presentation.time + " " + presentation.HallId;
	};

	const addPresentations = () => {
		return (
			<select>
				{props.presentations.map((presentation, index) => {
					return (
						<option
							value={presentation}
							key={shortid.generate()}
							onClick={() => props.selectPresentation(presentation)}
						>
							{generateSelectLine(presentation)}
						</option>
					);
				})}
			</select>
		);
	};

	const addSeats = () => {
		return (
			<SeatContainer>
				{props.movieSeats.map((seat, index) => {
					if (seat.occupied)
						return (
							<OccupiedSeat key={index} onClick={() => chooseSeat(seat)}>
								{seat.name}
							</OccupiedSeat>
						);
					else
						return (
							<EmptySeat key={index} onClick={() => chooseSeat(seat)}>
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
