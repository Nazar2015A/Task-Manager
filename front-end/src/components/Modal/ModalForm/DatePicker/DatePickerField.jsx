import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";

const DatePickerField = ({ field, form, textField, error, ...other }) => {
  const { setFieldValue, errors, touched } = form;
  const { name, value } = field;

  const onChange = (newValue) => {
    setFieldValue(name, dayjs(newValue).format("YYYY-MM-DD"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...other}
        name={name}
        label="Pick Date"
        value={value ? dayjs(value) : null}
        defaultValue={dayjs(value)}
        slotProps={{
          textField: {
            error: errors.date && touched.date,
            helperText: errors.date && touched.date ? errors.date : "",
          },
        }}
        onChange={onChange}
        textField={textField}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;
