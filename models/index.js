const File = require("./File");
const Folder = require("./Folder");
const User = require("./User");

User.hasMany(File);
User.hasMany(Folder);
Folder.belongsTo(User );
File.belongsTo(User );

module.exports= {File, Folder, User};