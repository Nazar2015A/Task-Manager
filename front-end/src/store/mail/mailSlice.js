import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { mailForgotPassword, mailResetPassword } from "./mail.async";

const initialState = {};

export const mailStore = createSlice({
  name: "mail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(mailForgotPassword.pending, () => {});
    builder.addCase(mailForgotPassword.fulfilled, () => {});
    builder.addCase(mailForgotPassword.rejected, (state, action) => {
      toast.error(action.payload);
    });

    builder.addCase(mailResetPassword.pending, () => {});
    builder.addCase(mailResetPassword.fulfilled, () => {});
    builder.addCase(mailResetPassword.rejected, (state, action) => {
      toast.error(action.payload);
    });
  },
});
