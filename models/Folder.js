const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/DB_Connection");


const Folder =sequelize.define('Folder', {
    id:{ type:DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true},
      name: DataTypes.STRING,
      files: DataTypes.STRING,
    
  });
  
  module.exports = Folder;