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
      toast.error(action.payload);
    });

    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
      toast.success("Task was successfull created");
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    });

    builder.addCase(taskUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(taskUpdate.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
      toast.success("Task was successfull updated");
    });
    builder.addCase(taskUpdate.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
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
      toast.error(action.payload);
    });

    builder.addCase(taskRemove.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(taskRemove.fulfilled, (state, { payload }) => {
      state.tasks = payload;
      state.isLoading = false;
      toast.success("Task was successfull removed");
    });
    builder.addCase(taskRemove.rejected, (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
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
      toast.error(action.payload);
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
      toast.error(action.payload);
    });
  },
});
