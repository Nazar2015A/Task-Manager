const Joi = require("joi");

const forgotPasswordSchema = Joi.object({
  email: Joi.string().required().email(),
}).options({ abortEarly: false });

module.exports = forgotPasswordSchema;
