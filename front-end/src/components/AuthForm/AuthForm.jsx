import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField } from "@mui/material";
import {
  StyledButtonSubmit,
  StyledContainerInput,
  StyledFormLogin,
} from "./auth-form.styled";
import { loginSchema } from "./auth-schema";

const AuthForm = ({ onSubmit, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
      <StyledContainerInput>
        <TextField
          {...register("email")}
          type="text"
          label="Email"
          fullWidth
          autoComplete="login-email"
          error={!!errors.email && !!errors.email.message}
          helperText={errors.email ? errors.email.message : ""}
        />
      </StyledContainerInput>
      <StyledContainerInput>
        <TextField
          {...register("password")}
          type="password"
          fullWidth
          label="Password"
          autoComplete="login-password"
          error={!!errors.password && !!errors.password.message}
          helperText={errors.password ? errors.password.message : ""}
        />
      </StyledContainerInput>
      <StyledButtonSubmit type="submit" fullWidth variant="contained">
        {title}
      </StyledButtonSubmit>
    </StyledFormLogin>
  );
};

export default AuthForm;
