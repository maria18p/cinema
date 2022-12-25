import React from "react";
import HomeView from "./HomeView";

export default function Home() {
	const movies = [
		"Avatar",
		"Harry Potter",
		"Star Wars",
		"The Lord of the Rings",
		"The Hulk",
	];
	const presentations = ["10:00", "12:00", "13:00", "14:00", "15:00"];

	const getPresentationSeats = () => {
		const alphabet = "abcdefghijklmnopqrstuvwxyz";
		const seats = [];
		const seatCount = 15;
		for (let i = 1; i <= seatCount; i++) {
			let seatName1 = "" + i + "a";
			let seatName2 = "" + i + "b";
			let seatName3 = "" + i + "c";

			seats.push({ name: seatName1, occupied: true });
			seats.push({ name: seatName2, occupied: false });
			seats.push({ name: seatName3, occupied: true });
		}

		return seats;
	};
	const seats = getPresentationSeats();

	return (
		<HomeView movieList={movies} presentations={presentations} seats={seats} />
	);
}
