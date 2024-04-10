const Joi = require("joi");

const resetPasswordSchema = Joi.object({
  password: Joi.string().min(5).max(32).required(),
}).options({ abortEarly: false });

module.exports = resetPasswordSchema;
