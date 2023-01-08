import sequelize from "sequelize";

export const TABLE_NAME = `Presentation`;
export default {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
		onDelete: "CASCADE",
	},
	start: sequelize.DATE,
	time: sequelize.TIME,
	MovieId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "movies",
			},
			key: "id",
		},
		allowNull: false,
	},
	HallId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "halls",
			},
			key: "id",
		},
		allowNull: false,
	},
};
