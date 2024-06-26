const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().min(5).required(),
}).options({ abortEarly: false });

module.exports = loginSchema;
