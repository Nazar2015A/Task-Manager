import React from "react";
import { SignupSchema } from "../ModalSchema";
import { Formik, Field } from "formik";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import DatePickerField from "./DatePicker/DatePickerField";
import {
  StyledBtnContainer,
  StyledBtnSubmit,
  StyledIcon,
  StyledModalForm,
} from "./ModalForm.styled";

const ModalForm = ({ INTIAL_VALUES, onSubmit, title }) => {
  return (
    <Formik
      initialValues={INTIAL_VALUES}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange }) => (
        <StyledModalForm>
          <label htmlFor="title">Title</label>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={values.title}
            onChange={handleChange}
            error={errors.title && touched.title}
            helperText={errors.title && touched.title ? errors.title : ""}
          />

          <label htmlFor="description">Description</label>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            value={values.description}
            onChange={handleChange}
            error={errors.description && touched.description}
            helperText={
              errors.description && touched.description
                ? errors.description
                : ""
            }
          />
          <label htmlFor="date">Date</label>

          <Field
            name="date"
            component={DatePickerField}
            textField={<TextField fullWidth label="Date" />}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Toggle Completed"
            name="isCompleted"
            checked={values.isCompleted}
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Toggle Important"
            name="important"
            checked={values.important}
            onChange={handleChange}
          />
          <StyledBtnContainer>
            <StyledBtnSubmit type="submit">
              <StyledIcon /> {title}
            </StyledBtnSubmit>
          </StyledBtnContainer>
        </StyledModalForm>
      )}
    </Formik>
  );
};

export default ModalForm;
