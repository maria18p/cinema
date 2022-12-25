import React from "react";
import {
	EmptySeat,
	OccupiedSeat,
	SeatContainer,
	Submit,
	VerticalContainer,
} from "./Home.style";

export default function HomeView(props) {
	const addMovieList = () => {
		return (
			<select>
				{props.movieList.map((movie, index) => {
					console.log(movie);
					return (
						<option value={movie} key={index}>
							{movie}
						</option>
					);
				})}
			</select>
		);
	};

	const addPresentations = () => {
		return (
			<select>
				{props.presentations.map((movie, index) => {
					console.log(movie);
					return (
						<option value={movie} key={index}>
							{movie}
						</option>
					);
				})}
			</select>
		);
	};

	const addPresentationSeats = () => {
		return (
			<select>
				{props.presentations.map((movie, index) => {
					console.log(movie);
					return (
						<option value={movie} key={index}>
							{movie}
						</option>
					);
				})}
			</select>
		);
	};

	const addSeats = () => {
		return (
			<SeatContainer>
				{props.seats.map((seat, index) => {
					if (seat.occupied)
						return (
							<OccupiedSeat key={index} onClick={() => OccupiedSeatHandler()}>
								{seat.name}
							</OccupiedSeat>
						);
					else
						return (
							<EmptySeat key={index} onClick={() => EmptySeatHandler(seat)}>
								{seat.name}
							</EmptySeat>
						);
				})}
			</SeatContainer>
		);
	};

	const EmptySeatHandler = (seat) => {
		console.log(seat.name);
	};

	const OccupiedSeatHandler = () => {
		alert("Occupied!");
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
