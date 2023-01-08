import { setup_database } from "./setup/setupDatabase.js";
import { setup_ORM } from "./setup/setupORM.js";
import {
	add_hall,
	get_all_halls,
	get_hall_by_id,
} from "./tables/Halls/Halls_action.js";
import {
	add_movie,
	get_all_movies,
	get_movie_by_id,
} from "./tables/Movies/Movies_actions.js";
import {
	add_presentation,
	get_all_presentations,
	get_all_presentations_by_movieId,
	get_presentation_by_id,
} from "./tables/Presentation/Presentation_action.js";
import {
	add_presentation_seats,
	get_all_presentation_seats,
	get_presentation_seats_by_id,
	get_presentation_seats_by_seat_id,
} from "./tables/Presentation_Seat/Presentation_seat_action.js";
import {
	add_seats,
	get_all_seats,
	get_seats_by_id,
} from "./tables/Seats/Seats_action.js";
import { get_tickets_by_id } from "./tables/Tickets/Ticket_action.js";
import {
	add_user,
	auth_matches,
	get_all_users,
	get_user_by_id,
} from "./tables/Users/User_action.js";

let ORM;

export const createDBConnection = async () => {
	await setup_database();
	ORM = await setup_ORM();
	await addDefaultValues();
	// console.log(await get_all_movies());
};

export { ORM };

export const get_request_movie_by_id = async (requestObject) => {
	const request_result = await get_movie_by_id(requestObject);
	return request_result;
};

export const get_request_hall_by_id = async (requestObject) => {
	const request_result = await get_hall_by_id(requestObject);
	return request_result;
};

export const get_request_presentation_by_id = async (requestObject) => {
	const request_result = await get_presentation_by_id(requestObject);
	return request_result;
};

export const get_request_presentation_seat_by_id = async (requestObject) => {
	const request_result = await get_presentation_seats_by_id(requestObject);
	console.log("request_result", request_result);
	return request_result;
};

export const get_request_seat_by_id = async (requestObject) => {
	const request_result = await get_seats_by_id(requestObject);
	return request_result;
};

export const get_request_ticket_by_id = async (requestObject) => {
	const request_result = await get_tickets_by_id(requestObject);
	return request_result;
};

export const get_request_user_by_id = async (requestObject) => {
	const request_result = await get_user_by_id(requestObject);
	return request_result;
};

export const get_request_all_users = async (requestObject) => {
	const request_result = await get_all_users(requestObject);
	return request_result;
};

//post requests
export const post_request_hall = async (requestObject) => {
	const request_result = await add_hall(requestObject);
	return request_result;
};

export const request_post_user = async (requestObject) => {
	const request_result = await add_user(requestObject);
	return request_result;
};

export const request_post_presentation_add = async (requestObject) => {
	const movie = await get_movie_by_id({ id: requestObject.movie });
	if (movie == null) return 404;
	const hall = await get_hall_by_id({ id: requestObject.hall });
	if (hall == null) return 404;
	const result = await add_presentation(requestObject);
	return result;
	// const request_result = await add_presentation()
};

export const request_get_login = async (requestObject) => {
	const request_result = await auth_matches(requestObject);
	console.log("request_result", request_result);
	return request_result;
};

export const get_request_all_halls = async (requestObject) => {
	const request_result = await get_all_halls(requestObject);
	return request_result;
};

export const post_request_add_movie = async (requestObject) => {
	const request_result = await add_movie(requestObject);
	return request_result;
};

export const get_request_all_movies = async (requestObject) => {
	const request_result = await get_all_movies(requestObject);
	return request_result;
};

export const get_request_all_presentations = async (requestObject) => {
	const request_result = await get_all_presentations(requestObject);
	return request_result;
};

export const get_request_all_presentations_by_movieId = async (
	requestObject
) => {
	const result = await get_all_presentations_by_movieId(requestObject);
	return result;
};

export const post_request_add_seats = async (requestObject) => {
	const result = await add_seats(requestObject);
	return result;
};

export const get_request_all_seats = async (requestObject) => {
	const result = await get_all_seats(requestObject);
	return result;
};

export const get_request_presentation_seat_by_presentation_id = async (
	requestObject
) => {
	// const presentation = await get_presentation_by_id({
	// 	id: requestObject.id,
	// });
	const hallSeats = await get_all_seats({ hallId: requestObject.HallId });
	const result = [];
	for (const seat of hallSeats) {
		const seatObject = seat;
		const presentationSeatsBySeatID = await get_presentation_seats_by_seat_id(
			seat
		);
		console.log("presentationSeatsBySeatID", presentationSeatsBySeatID);
		if ((await get_presentation_seats_by_seat_id(seat)) != null)
			seatObject.occupied = true;
		else seatObject.occupied = false;
		result.push(seatObject);
	}
	return result;
};

export const post_request_add_presentation_seat = async (requestObject) => {
	const result = await add_presentation_seats(requestObject);
	return result;
};

const addDefaultValues = async () => {
	// return;
	// await add_movie({
	// 	name: "Harry potter and the philosopher's stone",
	// 	length: 150,
	// 	ticketPrice: 100,
	// 	posterURL:
	// 		"https://images.moviesanywhere.com/143cdb987186a1c8f94d4f18de211216/fdea56fa-2703-47c1-8da8-70fc5382e1ea.webp?h=375&resize=fit&w=250",
	// });
	// await add_movie({
	// 	name: "Harry Potter and The Chamber Of Secrets",
	// 	length: 150,
	// 	ticketPrice: 100,
	// 	posterURL:
	// 		"https://images.moviesanywhere.com/51d05e3bd56acb23ba41a4db49633d98/743b4280-5ea4-4468-8d63-d565d480bee2.webp?h=375&resize=fit&w=250",
	// });
	// await add_movie({
	// 	name: "Harry Potter and The Prisoner Of Azkaban",
	// 	length: 150,
	// 	ticketPrice: 100,
	// 	posterURL:
	// 		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtr6OXFqx4y766Pao-9IBXEbnJ80dLCXkbgA&usqp=CAU",
	// });
	// await add_movie({
	// 	name: "The Lord Of The Rings The Fellowship Of The Ring",
	// 	length: 150,
	// 	ticketPrice: 100,
	// 	posterURL:
	// 		"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
	// });
	// await add_movie({
	// 	name: "The Lord Of The Rings: The Two Towers",
	// 	length: 150,
	// 	ticketPrice: 100,
	// 	posterURL:
	// 		"https://upload.wikimedia.org/wikipedia/en/d/d0/Lord_of_the_Rings_-_The_Two_Towers_%282002%29.jpg",
	// });
	// await add_movie({
	// 	name: "The Lord Of The Rings: The Return Of The King",
	// 	length: 150,
	// 	ticketPrice: 100,
	// 	posterURL:
	// 		"https://moviesmedia.ign.com/movies/image/object/487/487665/lotr_the-return-of-the-king_poster.jpg",
	// });
	// await add_hall({ name: "Blue" });
	// await add_hall({ name: "Red" });
	// await add_hall({ name: "Green" });
	// await add_hall({ name: "Black" });
	// await add_hall({ name: "Yellow" });
	// await add_user({ username: "admin", password: "admin", permission: 1 });
	// await add_user({ username: "maria", password: "1234", permission: 0 });
	// await add_user({ username: "peter", password: "1234", permission: 0 });
};
