const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/DB_Connection");

const User =sequelize.define('User', {
  id:{ type:DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true},
  username: DataTypes.STRING,
  password: DataTypes.INTEGER,
  wallpaper: DataTypes.STRING,
  avatar: DataTypes.STRING
});

module.exports = User;