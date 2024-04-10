import $api from "../http";

export default class TaskService {
  static async getAllTasks() {
    return $api.get("/task/alltasks", { params: { limit: 100 } });
  }
  static async getImportantTasks() {
    return $api.get("/task/important");
  }
  static async getCompletedTasks() {
    return $api.get("/task/completed");
  }
  static async createTask(
    userId,
    title,
    description,
    date,
    isCompleted,
    important
  ) {
    return $api.post("/task/createTask", {
      userId,
      title,
      description,
      date,
      isCompleted,
      important,
    });
  }
  static async toggleTaskComplete(taskId) {
    return $api.put(`/task/toggleComplete/${taskId}`);
  }
  static async taskUpdate(
    taskId,
    title,
    description,
    date,
    isCompleted,
    important
  ) {
    return $api.put(`/task/updateTask/${taskId}`, {
      title,
      description,
      date,
      isCompleted,
      important,
    });
  }
  static async taskRemove(taskId) {
    return $api.delete(`/task/taskRemove/${taskId}`);
  }
}
