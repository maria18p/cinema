import { ORM } from "../../DBConnectionModule.js";

export const add_user = async (requestObject) => {
	const result = await ORM.users
		.create({
			username: requestObject.username,
			password: requestObject.password,
			permission: requestObject.permission,
		})
		.then(() => {
			console.log(`USER ${requestObject.username} ADDED`);
		})
		.catch((err) => {
			throw err;
		});
	return result;
};

export const clear_user = async (requestObject) => {
	const result = ORM.users
		.destroy({ where: {} })
		.then(() => {
			return `TABLE CLEARED`;
		})
		.catch((err) => {
			throw err;
		});
	return result;
};

export const get_all_users = async (requestObject) => {
	return await ORM.users
		.findAll({})
		.then(async (rows) => {
			return rows;
		})
		.catch((err) => {
			throw err;
		});
};

export const update_user = async (requestObject) => {
	const update_result = ORM.users
		.update(
			{
				password: requestObject.password,
			},
			{ where: { id: requestObject.id } }
		)
		.then(async () => {
			return {
				message: `PASSWORD UPDATED`,
			};
		});
	return update_result;
};

export const get_user_by_id = async (requestObject) => {
	const result = await ORM.users
		.findByPk(requestObject.id)
		.then(async (row) => {
			return row;
		})
		.catch((err) => {
			console.log("REQUESTED USER NOT FOUND");
			return 404;
		});
	return result;
};

export const remove_user = (requestObject) => {
	const result = ORM.users
		.destroy({ where: { id: requestObject.id } })
		.then(() => {
			return `USER BY ID :${requestObject.id} WAS REMOVED`;
		})
		.catch((err) => {
			throw err;
		});
	return result;
};

export const auth_matches = (requestObject) => {
	let result = 404;
	result = ORM.users
		.findOne({
			where: {
				username: requestObject.username,
				password: requestObject.password,
			},
			raw: true,
		})
		.then((result) => {
			console.log(`USER: ${result} now logged in`);
			return result != null;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});
	return result;
};
