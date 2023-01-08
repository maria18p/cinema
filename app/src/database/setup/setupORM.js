import sequelize from "sequelize";
import Movies_schema from "../tables/Movies/Movies_schema.js";
import Halls_schema from "../tables/Halls/Halls_schema.js";
import Presentation_schema from "../tables/Presentation/Presentation_schema.js";
import Presentation_Seat_schema from "../tables/Presentation_Seat/Presentation_Seat_schema.js";
import Seats_schema from "../tables/Seats/Seats_schema.js";
import Tickets_schema from "../tables/Tickets/Tickets_schema.js";
import Users_schema from "../tables/Users/Users_schema.js";

let DB_NAME = "cinema";

const createDBConnection = async () => {
	// For Maria
	// return await new sequelize(DB_NAME, 'root', 'maria1234', {
	//   dialect: 'mysql',
	//   host: 'localhost',
	//   logging: false,
	// });
	// For Peter
	return await new sequelize(DB_NAME, "root", "", {
		dialect: "mysql",
		host: "localhost",
		logging: false,
	});
};

export const setup_ORM = async () => {
	const dbConnection = await createDBConnection();
	const ORM_OBJ = await define_ORM_tables(dbConnection);
	return ORM_OBJ;
};

const define_ORM_tables = async (dbConnection) => {
	console.log(
		"================================================================"
	);
	console.log("SETTING UP ORM TABLE CONNECTIONS...");
	const movies = await connectTable("movies", Movies_schema, dbConnection);
	const halls = await connectTable("halls", Halls_schema, dbConnection);
	const presentations = await connectTable(
		"presentations",
		Presentation_schema,
		dbConnection
	);
	const seats = await connectTable("seats", Seats_schema, dbConnection);
	const tickets = await connectTable("tickets", Tickets_schema, dbConnection);
	const users = await connectTable("users", Users_schema, dbConnection);
	const presentation_seats = await connectTable(
		"presentation_seats",
		Presentation_Seat_schema,
		dbConnection
	);

	console.log(
		"----------------------------------------------------------------"
	);

	console.log("Validating Tables");

	await validate_table(movies, "movies");
	await validate_table(halls, "halls");
	await validate_table(presentations, "presentations");
	await validate_table(presentation_seats, "presentation_seats");
	await validate_table(seats, "seats");
	await validate_table(tickets, "tickets");
	await validate_table(users, "users");

	console.log(
		"----------------------------------------------------------------"
	);
	console.log(
		"================================================================"
	);

	return {
		movies,
		halls,
		presentations,
		presentation_seats,
		seats,
		tickets,
		users,
	};
};

const connectTable = async (tableName, tableScheme, dbConnection) => {
	let table = await dbConnection.define(tableName, tableScheme);
	let indent = "\t";
	if (tableName.length < 8) indent = "\t\t\t";
	else if (tableName.length == 13) indent = "\t\t";
	console.log(`\t${tableName}${indent}TABLE CONNECTED`);
	return table;
};

const validate_table = async (table, tableName) => {
	await table
		.findAll({})
		.then(async () => {
			let indent = "\t";
			if (tableName.length < 8) indent = "\t\t\t";
			else if (tableName.length == 13) indent = "\t\t";
			console.log(`\t${tableName}${indent}TABLE VALIDATED`);
		})
		.catch((err) => {
			console.log(err);
			console.log(`TABLE '${tableName}' NOT FOUND`);
			console.log(`CREATING '${tableName}' TABLE`);
			table.sync({ alter: true });
			setup_ORM();
		});
};
