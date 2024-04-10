import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../service/AuthService";

export const userLogin = createAsyncThunk(
  "users/userLogin",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const userRegistration = createAsyncThunk(
  "users/userRegistration",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const userLogout = createAsyncThunk(
  "users/userLogout",
  async (thunkApi) => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);

export const userCheckAuth = createAsyncThunk(
  "users/userCheckAuth",
  async (thunkApi) => {
    try {
      const response = await AuthService.checkAuth();
      localStorage.setItem("token", response.data.accessToken);
      return response.data.user;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);
