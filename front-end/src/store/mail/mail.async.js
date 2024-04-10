import { createAsyncThunk } from "@reduxjs/toolkit";
import MailService from "../../service/MailService";

export const mailForgotPassword = createAsyncThunk(
  "mail/forgotPassword",
  async ({ email }, thunkApi) => {
    try {
      const response = await MailService.forgotPassword(email);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);
export const mailResetPassword = createAsyncThunk(
  "mail/resetPassword",
  async ({ email, token, password }, thunkApi) => {
    try {
      const response = await MailService.resetPassword(email, token, password);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.response.data.error);
    }
  }
);
