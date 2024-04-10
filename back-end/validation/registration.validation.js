const Joi = require("joi");

const registrationSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(5).max(32).required(),
}).options({ abortEarly: false });

module.exports = registrationSchema;
