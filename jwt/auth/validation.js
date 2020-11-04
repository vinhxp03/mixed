const Joi = require('joi');

// Register validate
const registerValidation = data => {
    const schema = Joi.object ({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;

const loginValidation = data => {
    const schema = Joi.object ({
        email: Joi.string().email().min(6).required(),
        password: Joi.string().min(6).required()
    })
    
   return schema.validate(data);
}

module.exports.loginValidation = loginValidation;