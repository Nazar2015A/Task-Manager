import React from "react";
import { TextField } from "@mui/material";

import { Form, Formik } from "formik";
import { ForgotPasswordSchema } from "./forgot-schema";
import BtnBack from "../BtnBack/BtnBack.component";
import { StyledBtnSubmit } from "./ForgotPasswordForm.styled";

const ForgotPasswordForm = ({ onSubmit, title, INITIAL_VALUES }) => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={ForgotPasswordSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <Form>
          <TextField
            id="email"
            name="email"
            type="text"
            label="Email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email ? errors.email : ""}
          />

          <StyledBtnSubmit type="submit" fullWidth variant="contained">
            {title}
          </StyledBtnSubmit>
          <BtnBack />
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
