import { ORM } from "../../DBConnectionModule.js";

export const add_seats = async (requestObject) => {
	console.log("requestObjectttt", requestObject);
	const result = await ORM.seats
		.create({
			name: requestObject.name,
			HallId: requestObject.hallId,
		})
		.then(() => {
			console.log(`SEAT ${requestObject.name} ADDED`);
		})
		.catch((err) => {
			throw err;
		});
	return result;
};

export const clear_seats = async (requestObject) => {
	const result = ORM.seats
		.destroy({ where: {} })
		.then(() => {
			return `TABLE CLEARED`;
		})
		.catch((err) => {
			throw err;
		});
	return result;
};

export const get_all_seats = async (requestObject) => {
	return await ORM.seats
		.findAll({
			where: { HallId: requestObject.hallId },
			raw: true,
		})
		.then(async (rows) => {
			return rows;
		})
		.catch((err) => {
			throw err;
		});
};

export const update_seat = async (requestObject) => {
	const update_result = ORM.seats
		.update(
			{
				name: requestObject.name,
			},
			{ where: { id: requestObject.id } }
		)
		.then(async () => {
			return {
				message: `SEAT ${requestObject.name} UPDATED ${requestObject.name}`,
			};
		});
	return update_result;
};

export const get_seats_by_id = async (requestObject) => {
	const result = await ORM.seats
		.findByPk(requestObject.id)
		.then(async (row) => {
			return row;
		})
		.catch((err) => {
			console.log("REQUESTED SEAT NOT FOUND");
			return 404;
		});
	return result;
};

export const remove_seat = (requestObject) => {
	const result = ORM.seats
		.destroy({ where: { id: requestObject.id } })
		.then(() => {
			return `SEAT: ${requestObject.name} WAS REMOVED`;
		})
		.catch((err) => {
			throw err;
		});
	return result;
};
