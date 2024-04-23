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
      toast.loading("User login");
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isAuth = true;
      state.isLoading = false;
      toast.dismiss();
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      toast.dismiss();
      toast.error(action.payload);
    });

    builder.addCase(userRegistration.pending, (state) => {
      state.isLoading = true;
      toast.loading("Registration user");
    });
    builder.addCase(userRegistration.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.isAuth = true;
      state.isLoading = false;
      toast.dismiss();
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isLoading = false;
      toast.dismiss();
      toast.error(action.payload);
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
      toast.dismiss();
      toast.error(action.payload);
    });

    builder.addCase(userCheckAuth.pending, (state) => {
      state.isLoading = true;
      toast.loading("loading user data");
    });
    builder.addCase(userCheckAuth.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.isAuth = true;
      state.isLoading = false;
      toast.dismiss();
    });
    builder.addCase(userCheckAuth.rejected, (state) => {
      state.isLoading = false;
      toast.dismiss();
    });
  },
});
