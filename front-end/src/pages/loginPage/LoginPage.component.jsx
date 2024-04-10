import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  StyledButton,
  StyledGrid,
  StyledLoginContainer,
  StyledSignIn,
  StyledText,
  StyledTop,
} from "./LoginPage.styled";
import { userLogin } from "../../store/user/user.async";
import AuthForm from "../../components/AuthForm/AuthForm";
import { StyledAvatar } from "../ForgotPassword/ForgotPasswordPage.styled";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await dispatch(userLogin(data));
    if (!response.error) {
      navigate("/alltasks");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="animated-container"
    >
      <Container component="main" maxWidth="xs">
        <StyledLoginContainer>
          <StyledTop>
            <StyledAvatar>
              <LockOutlinedIcon />
            </StyledAvatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
          </StyledTop>

          <AuthForm onSubmit={onSubmit} title="Sign In" />

          <StyledGrid container justifyContent="space-between">
            <StyledText>Or</StyledText>
            <StyledButton>
              <Link to="/forgot-password" className="sign-login">
                Forgot Password?
              </Link>
            </StyledButton>
            <StyledSignIn>
              <Link to="/register" className="sign-login">
                Create a new account
              </Link>
            </StyledSignIn>
          </StyledGrid>
        </StyledLoginContainer>
      </Container>
    </motion.div>
  );
};

export default LoginPage;
