const File = require("./File");
const Folder = require("./Folder");
const User = require("./User");

User.hasMany(File,{foreignKey: 'createdBy'});
User.hasMany(Folder,{foreignKey: 'createdBy'});
Folder.belongsTo(User);
File.belongsTo(User,{foreignKey: 'createdBy'});
Folder.hasMany(File);
File.belongsTo(Folder);

module.exports= {File, Folder, User};