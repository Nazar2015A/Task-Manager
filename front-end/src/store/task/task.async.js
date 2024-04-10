import { createAsyncThunk } from "@reduxjs/toolkit";
import TaskService from "../../service/TaskService";

export const getAllTasks = createAsyncThunk(
  "task/getAllTasks",
  async ({ userId }, thunkApi) => {
    try {
      const response = await TaskService.getAllTasks(userId);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);
export const getImportantTasks = createAsyncThunk(
  "task/getImportantTasks",
  async ({ userId }, thunkApi) => {
    try {
      const response = await TaskService.getImportantTasks(userId);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);
export const getCompletedTasks = createAsyncThunk(
  "task/getCompletedTasks",
  async ({ userId }, thunkApi) => {
    try {
      const response = await TaskService.getCompletedTasks(userId);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const createTask = createAsyncThunk(
  "task/createTask",
  async (
    {
      userId,
      title,
      description,
      date,
      isCompleted = false,
      important = false,
    },
    thunkApi
  ) => {
    try {
      await TaskService.createTask(
        userId,
        title,
        description,
        date,
        isCompleted,
        important
      );
      const response = await TaskService.getAllTasks();
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const toggleTaskComplete = createAsyncThunk(
  "task/toggleTaskComplete",
  async (taskId, thunkApi) => {
    try {
      await TaskService.toggleTaskComplete(taskId);
      const response = await TaskService.getAllTasks();
      return response.data;
    } catch (e) {
      console.log(e);
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const taskUpdate = createAsyncThunk(
  "task/taskUpdate",
  async (
    { taskId, title, description, date, isCompleted, important },
    thunkApi
  ) => {
    try {
      await TaskService.taskUpdate(
        taskId,
        title,
        description,
        date,
        isCompleted,
        important
      );
      const response = await TaskService.getAllTasks();
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const taskRemove = createAsyncThunk(
  "task/taskRemove",
  async (taskId, thunkApi) => {
    try {
      await TaskService.taskRemove(taskId);
      const response = await TaskService.getAllTasks();
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);
