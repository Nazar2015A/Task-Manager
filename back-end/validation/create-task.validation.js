const Joi = require("joi");

const createTaskSchema = Joi.object({
  userId: Joi.alternatives().try(
    Joi.string().required(),
    Joi.number().required()
  ),
  title: Joi.string().min(5).max(50).required(),
  description: Joi.string().min(5).max(100).required(),
  date: Joi.string()
    .pattern(new RegExp(/^\d{4}-\d{2}-\d{2}$/))
    .required(),
  isCompleted: Joi.boolean(),
  important: Joi.boolean(),
}).options({ abortEarly: false });

module.exports = createTaskSchema;
