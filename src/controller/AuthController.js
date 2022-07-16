const { response } = require("express");
const {User,Folder,File} = require("../../models");
const jwt = require("jsonwebtoken");

async function Register(req,res,next){
try {
    const insert = await User.create(req.body);
    const user = await User.findOne({
        where:{id:insert.id},
        include:[{model:File},{model:Folder}],
        attributes:{exclude:["updatedAt","createdAt"]}
    }); 
    return res.json({
    token: generateToken({id:insert.id,name:insert.username}),
    user
    });
} catch (error) {
    console.log(error);
    res.status(500);
    res.send('internal server error');
}
}

function generateToken(data) {
    return jwt.sign(
      data,process.env.JWT_TOKEN,
      { expiresIn: "86400s" }
    );
  }

module.exports={Register}