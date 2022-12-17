import sequelize from 'sequelize';

export const TABLE_NAME = `Halls`;
export default {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    onDelete: 'CASCADE',
  },
  name: sequelize.STRING,
};
