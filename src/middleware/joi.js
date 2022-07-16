const file = require("../schema/file");
const login = require("../schema/login");
const Register = require("../schema/register");

const joiShema={
                 register:Register,
                 login:login,
                 file:file
               };


function joi(schema){
// console.log(joi);
    return async(req, res, next)=>{
        if(schema in joiShema === false)  return res.json({status: 'error', message: ` schema "${schema}" not found` });
         try {
             const value = joiShema[schema].validate(req.body);
             if(!value.error){
                 next()
             }else{ 
                 return res.json({
                     status: 'error',
                     message: value.error.details[0].message
                 });
             }
         }catch(err){
             console.log(err);
         }
     }
 }

module.exports = joi;