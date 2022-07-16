const Joi = require('joi');

const file=Joi.object({
    name: Joi.string().required(),
    content: Joi.string().required(),
    FolderId:Joi.number().required()
});

module.exports= file;