import sequelize from 'sequelize';

export const TABLE_NAME = `Users`;
export default {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    onDelete: 'CASCADE',
  },
  username: sequelize.STRING,
  password: sequelize.STRING,
  permission: sequelize.INTEGER,
};
