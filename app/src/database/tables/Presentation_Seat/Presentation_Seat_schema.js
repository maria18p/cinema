import sequelize from "sequelize";

export const TABLE_NAME = `Presentation_Seat`;
export default {
	id: {
		type: sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
		onDelete: "CASCADE",
	},
	SeatId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "seats",
			},
			key: "id",
		},
		allowNull: false,
	},

	PresentationId: {
		type: sequelize.INTEGER,
		references: {
			model: {
				tableName: "presentations",
			},
			key: "id",
		},
		allowNull: false,
	},

	occupied: sequelize.BOOLEAN,
};
