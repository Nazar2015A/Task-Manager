import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userStore } from "./user/userSlice";
import { taskStore } from "./task/taskSlice";
import { mailStore } from "./mail/mailSlice";

const rootReducer = combineReducers({
  users: userStore.reducer,
  tasks: taskStore.reducer,
  mail: mailStore.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
