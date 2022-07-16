const Joi = require('joi');

const login=Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required(),
});

module.exports= login;