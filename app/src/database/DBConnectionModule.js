import { setup_database } from "./setup/setupDatabase.js";
import { setup_ORM } from "./setup/setupORM.js";
import { add_hall, get_hall_by_id } from "./tables/Halls/Halls_action.js";
import { add_movie, get_movie_by_id } from "./tables/Movies/Movies_actions.js";
import {
	add_presentation,
	get_presentation_by_id,
} from "./tables/Presentation/Presentation_action.js";
import { get_presentation_seats_by_id } from "./tables/Presentation_Seat/Presentation_seat_action.js";
import { get_seats_by_id } from "./tables/Seats/Seats_action.js";
import { get_tickets_by_id } from "./tables/Tickets/Ticket_action.js";
import {
	add_user,
	auth_matches,
	get_user_by_id,
} from "./tables/Users/User_action.js";

let ORM;

export const createDBConnection = async () => {
	await setup_database();
	ORM = await setup_ORM();
	// await addDefaultValues();
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

const addDefaultValues = async () => {
	await add_movie({ name: "Avatar" });
	// await add_movie({ name: 'Titanic' });
	// await add_movie({ name: 'Back to the Future' });
	// await add_movie({ name: 'Indiana Jones' });
	// await add_movie({ name: 'Intersteller' });
};
