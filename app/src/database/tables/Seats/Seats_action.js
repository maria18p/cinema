import { ORM } from "../../DBConnectionModule.js";

export const generateSeatNames = async (requestObject) => {
	const result = [];
	const lastSeat = await ORM.seats
		.findOne({
			where: { HallId: requestObject.hallId },
			order: [["createdAt", "DESC"]],
		})
		.then(async (row) => {
			return row;
		})
		.catch((err) => {
			throw err;
		});
	let lastSeatId = 1;
	if (lastSeat != null) {
		lastSeatId = parseInt(lastSeat.name);
	}

	for (let i = lastSeatId + 1; i <= lastSeatId + requestObject.number; i++) {
		result.push({ name: i });
	}
	return result;
};

export const add_seats = async (requestObject) => {
	let result = -1;
	const seatToAdd = await generateSeatNames(requestObject);
	for (let seat of seatToAdd) {
		result = await ORM.seats
			.create({
				name: seat.name,
				HallId: requestObject.hallId,
			})
			.then(() => {
				console.log(`SEAT ${requestObject.name} ADDED`);
			})
			.catch((err) => {
				throw err;
			});
	}
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
