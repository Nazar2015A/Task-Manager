import React from "react";
import { Form, Formik } from "formik";
import BtnBack from "../BtnBack/BtnBack.component";
import { StyledBtnSubmit, StyledTextField } from "./ResetPasswordForm.styled";

const ResetPasswordForm = ({ onSubmit, title, INITIAL_VALUES, Schema }) => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <StyledTextField
            id="password"
            name="password"
            type="password"
            label="Password"
            autoComplete="new-password"
            fullWidth
            value={values.password}
            onChange={handleChange}
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
          />
          <StyledTextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm password"
            autoComplete="new-password"
            fullWidth
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword && touched.confirmPassword}
            helperText={
              errors.confirmPassword && touched.confirmPassword
                ? errors.confirmPassword
                : ""
            }
          />

          <StyledBtnSubmit type="submit" fullWidth variant="contained">
            {title}
          </StyledBtnSubmit>
          <BtnBack url="/login" />
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
