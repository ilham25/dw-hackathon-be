const Joi = require('joi');

const Register=Joi.object({
   username: Joi.string().required(),
    password: Joi.number().required(),
    avatar: Joi.string().required(),
    wallpaper: Joi.string().required(),
});

module.exports= Register;