import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import {
  createTask,
  getAllTasks,
  getCompletedTasks,
  getImportantTasks,
  taskRemove,
  taskUpdate,
  toggleTaskComplete,
} from "./task.async";

const initialState = {
  tasks: [],
  isLoading: false,
};

export const taskStore = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(getAllTasks.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(taskUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(taskUpdate.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(taskUpdate.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(toggleTaskComplete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleTaskComplete.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(toggleTaskComplete.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(taskRemove.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(taskRemove.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(taskRemove.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getImportantTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getImportantTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(getImportantTasks.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(getCompletedTasks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCompletedTasks.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
    });
    builder.addCase(getCompletedTasks.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
