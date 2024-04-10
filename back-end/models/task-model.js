const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true },
  date: { type: String, required: true },
  isCompleted: {type: Boolean, default: false},
  important: {type: Boolean, default: false}
});

module.exports = model("Task", TaskSchema);
