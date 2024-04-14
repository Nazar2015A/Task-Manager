const taskService = require("../service/task-service");

class TaskController {
  async getAllTasks(req, res, next) {
    try {
      const user = req.user;
      const limit = parseInt(req.query.limit) || 5;
      const allTasks = await taskService.getAllTasks(user, limit);
      return res.json(allTasks);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async createTask(req, res, next) {
    try {
      const { userId, title, description, date, isCompleted, important } =
        req.body;
      const { refreshToken } = req.cookies;

      const createdTask = await taskService.createTask(
        refreshToken,
        userId,
        title,
        description,
        date,
        isCompleted,
        important
      );

      return res.json(createdTask);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async toggleCompetedTask(req, res, next) {
    try {
      const { taskId } = req.params;
      const updatedTask = await taskService.toggleComplete(taskId);

      return res.json(updatedTask);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async updateTask(req, res, next) {
    try {
      const { taskId } = req.params;
      const { title, description, date, isCompleted, important } = req.body;

      const updatedTask = await taskService.updateTask(
        taskId,
        title,
        description,
        date,
        isCompleted,
        important
      );

      return res.json(updatedTask);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }

  async taskRemove(req, res, next) {
    try {
      const { taskId } = req.params;
      const deletedTask = await taskService.taskRemove(taskId);

      return res.json(deletedTask);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
}

module.exports = new TaskController();
