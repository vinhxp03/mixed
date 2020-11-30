const Joi = require('joi');

/**
 * Get validate Joi
 * 
 * @param {object} params 
 */
module.exports.validate = (params) => {
  // Create schema object params
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
    re_password: Joi.ref('password'),
    email: Joi.string().email()
  });
  
  try {
    const validate = schema.validate(params);

    if (validate.error) {
      console.log('validate.error', validate.error.message);
    }
  
    return validate;
  } catch (error) {
    return error;
  }
}