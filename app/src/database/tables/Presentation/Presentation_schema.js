import sequelize from 'sequelize';

export const TABLE_NAME = `Presentation`;
export default {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    onDelete: 'CASCADE',
  },
  start: sequelize.DATEONLY,
  time: sequelize.TIME,
};
