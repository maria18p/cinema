import sequelize from "sequelize";

export const TABLE_NAME = `Movies`;
export default {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
		onDelete: "CASCADE",
	},
	length: sequelize.INTEGER,
	name: sequelize.STRING,
	posterURL: sequelize.STRING,
	ticketPrice: sequelize.INTEGER,
};
