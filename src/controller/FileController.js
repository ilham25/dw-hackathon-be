const { File, User, Folder } = require("../../models");
const file = require("../schema/file");

async function insert(req,res,next) {
    try {
      req.body.createdBy= req.user.id; 
      const file  = await File.create(req.body);
      const data = await File.findOne({where:{id:file.id}, include:[{model:User},{model:Folder}],  attributes:{exclude:["FolderId","createdBy"]} });

      return res.json({
        status: 200,
        message:"success",
        data: data
      });

    } catch (error) {
        console.log(error);
        res.status(500);
        res.send('internal server error');
    }
}

async function getAll(req,res,next) {
    try {
    //   console.log(req.user);
      const data = await File.findAll({where:{createdBy:req.user.id}, 
        include:[{model:User},{model:Folder}], attributes:{exclude:["FolderId","createdBy"]} });
      return res.json({
        status: 200,
        message:"success",
        data: data
      });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send('internal server error');
    }
}


async function get(req,res,next) {
    try {
      const data = await File.findOne({where:{id:req.params.id}, include:[{model:User},{model:Folder}], attributes:{exclude:["FolderId","createdBy"]} });
      return res.json({
        status: 200,
        message:"success",
        data: data
      });
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send('internal server error');
    }
}

async function update(req,res,next) {
    try {
        const data = await File.findOne({where:{id:req.params.id}});
        if(data === null){
            return res.json({
                status: 200,
                message:"error file not found"
            });
        }
        
        if(data.UserId === req.user.id){
          return res.json({
           status: 200,
           message:"error dont have access"
          });
         }
       
       File.update(req.body,{ where: { id: req.params.id } });
       const file = await File.findOne({where:{id:data.id}, include:[{model:User},{model:Folder}], attributes:{exclude:["FolderId","createdBy"]}});

       return res.json({
         status: 200,
         message:"success",
         data: file
       });
       
     
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send('internal server error');
    }
}

async function destroy(req,res,next) {
    try {
        const data = await File.findOne({where:{id:req.params.id}});
        if(data === null){
            return res.json({
                status: 200,
                message:"error file not found"
            });
        }
        
        if(data.UserId === req.user.id){
          return res.json({
           status: 200,
           message:"error dont have access"
          });
         }

         File.destroy({where:{id:data.id}});
         return res.json({
            status: 200,
            message:"success",
            data: data.id
          });

      
    } catch (error) {
        console.log(error);
        res.status(500);
        res.send('internal server error');
    }
}


module.exports={insert,get,update,destroy,getAll}