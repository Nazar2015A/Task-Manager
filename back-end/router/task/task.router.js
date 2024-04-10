const Router = require("express");
const bodyValidationMiddleware = require("../../middleware/body-validation.middleware");
const createTaskSchema = require("../../validation/create-task.validation");
const taskController = require("../../controllers/task-controller");

const taskRouter = new Router();

taskRouter.get("/alltasks", taskController.getAllTasks);

taskRouter.post("/createTask", [
  bodyValidationMiddleware(createTaskSchema),
  taskController.createTask,
]);

taskRouter.put("/toggleComplete/:taskId", taskController.toggleCompetedTask);

taskRouter.put("/updateTask/:taskId", taskController.updateTask);

taskRouter.delete("/taskRemove/:taskId", taskController.taskRemove);

module.exports = taskRouter;
