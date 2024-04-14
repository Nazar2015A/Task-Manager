const ApiError = require("../exeptions/api.error");
const taskModel = require("../models/task-model");
const tokenModel = require("../models/token-model");
const userModel = require("../models/user-model");

class TaskService {
  async getAllTasks(user, limit) {
    if (!user) {
      throw ApiError.UnauthorizedError("User Unauthorized or not found!");
    }

    const userData = await userModel
      .findOne({ _id: user.id })
      .populate({
        path: "tasks",
        options: { limit },
      })
      .exec();

    return userData.tasks;
  }

  async createTask(
    refreshToken,
    userId,
    title,
    description,
    date,
    isCompleted,
    important
  ) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError("User is not authorized!");
    }

    if (!userId || !title || !description || !date) {
      throw ApiError.BadRequest("Validation error");
    }

    const task = await taskModel.create({
      title,
      description,
      date,
      isCompleted,
      important,
    });

    await userModel.findOneAndUpdate(
      { _id: userId },
      { $push: { tasks: task._id } },
      { new: true }
    );

    return task;
  }

  async toggleComplete(taskId) {
    const task = await taskModel.findById(taskId);

    if (!taskId || !task) {
      throw ApiError.BadRequest("Validation error");
    }

    const updatedTask = await taskModel.findByIdAndUpdate(
      { _id: taskId },
      {
        $set: { isCompleted: !task.isCompleted },
      },
      { new: true }
    );

    return updatedTask;
  }

  async updateTask(taskId, title, description, date, isCompleted, important) {
    const task = await taskModel.findById(taskId);

    if (!taskId || !task) {
      throw ApiError.BadRequest("Validation error");
    }

    const updatedTask = await taskModel.findByIdAndUpdate(
      { _id: taskId },
      {
        $set: {
          title: title,
          description: description,
          date: date,
          isCompleted: isCompleted,
          important: important,
        },
      },
      { new: true }
    );

    return updatedTask;
  }

  async taskRemove(taskId) {
    const task = await taskModel.findById(taskId);
    if (!taskId || !task) {
      throw ApiError.BadRequest("Validation error");
    }

    const user = await userModel.findOne({ tasks: taskId });

    if (user) {
      user.tasks.pull(taskId);
      await user.save();
    }

    const deletedTask = await taskModel.deleteOne({ _id: taskId });

    return deletedTask;
  }
}

module.exports = new TaskService();
