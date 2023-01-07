import sequelize from "sequelize";

export const TABLE_NAME = `Seats`;
export default {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
		onDelete: "CASCADE",
	},
	name: sequelize.STRING,
	HallId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "Halls",
			},
			key: "id",
		},
		allowNull: false,
	},
};
