import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  userRegistration,
  userLogout,
  userCheckAuth,
} from "./user.async";
import { toast } from "react-hot-toast";

const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
};

export const userStore = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isAuth = true;
      state.isLoading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(userRegistration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isAuth = true;
      state.isLoading = false;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(userLogout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogout.fulfilled, (state) => {
      state.user = null;
      state.isAuth = false;
      state.isLoading = false;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.isLoading = false;
    });

    builder.addCase(userCheckAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userCheckAuth.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
      state.isLoading = false;
    });
    builder.addCase(userCheckAuth.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
