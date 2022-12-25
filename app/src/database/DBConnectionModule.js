import { setup_database } from "./setup/setupDatabase.js";
import { setup_ORM } from "./setup/setupORM.js";
import { add_movie, get_movie_by_id } from "./tables/Movies/Movies_actions.js";
import { get_presentation_by_id } from "./tables/Presentation/Presentation_action.js";
import { get_presentation_seats_by_id } from "./tables/Presentation_Seat/Presentation_seat_action.js";
import { get_seats_by_id } from "./tables/Seats/Seats_action.js";
import { get_tickets_by_id } from "./tables/Tickets/Ticket_action.js";
import { get_user_by_id } from "./tables/Users/User_action.js";

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

export const put_request_update_movie = async (requestObject) => {
	const request_result = await update_movie(requestObject);
	return request_result;
};




// export const post_occupy_presentation_seat = (requestObject) => {
// 	const seat = get_presentation_seats_by_id(requestObject.seat_id);
// 	if(seat.occupied == true) return 404
// }












const addDefaultValues = async () => {
	await add_movie({ name: "Avatar" });
	// await add_movie({ name: 'Titanic' });
	// await add_movie({ name: 'Back to the Future' });
	// await add_movie({ name: 'Indiana Jones' });
	// await add_movie({ name: 'Intersteller' });
};

