import sequelize from 'sequelize';

export const TABLE_NAME = `Presentation_Seat`;
export default {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    onDelete: 'CASCADE',
  },
  occupied: sequelize.BOOLEAN,
};
