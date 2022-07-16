const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/DB_Connection");

const File =sequelize.define('File', {
    id:{ type:DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true},
      name: DataTypes.STRING,
      content: DataTypes.TEXT,
  });
  
  module.exports = File;