import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { mailForgotPassword, mailResetPassword } from "./mail.async";

const initialState = {};

export const mailStore = createSlice({
  name: "mail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(mailForgotPassword.pending, () => {
      toast.loading("Sending email")
    });
    builder.addCase(mailForgotPassword.fulfilled, () => {
      toast.success("Success. Please check your email");
    });
    builder.addCase(mailForgotPassword.rejected, (state, action) => {
      toast.error(action.payload);
    });
    
    builder.addCase(mailResetPassword.pending, () => {
      toast.loading("Sending email")
    });
    builder.addCase(mailResetPassword.fulfilled, () => {
      toast.success("Your password was successfully reseted");
    });
    builder.addCase(mailResetPassword.rejected, (state, action) => {
      toast.error(action.payload);
    });
  },
});
