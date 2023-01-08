import sequelize from "sequelize";

export const TABLE_NAME = `Tickets`;
export default {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
		onDelete: "CASCADE",
	},
	UserId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "users",
			},
			key: "id",
		},
		allowNull: false,
	},
	PresentationSeatId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "presentation_seats",
			},
			key: "id",
		},
		allowNull: false,
	},
};
