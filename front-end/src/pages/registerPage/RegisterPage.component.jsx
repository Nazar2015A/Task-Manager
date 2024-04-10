import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import { userRegistration } from "../../store/user/user.async";
import {
  StyledGrid,
  StyledRegisterContainer,
  StyledSignUp,
  StyledText,
  StyledTop,
} from "./RegisterPage.styled";
import { StyledAvatar } from "../ForgotPassword/ForgotPasswordPage.styled";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await dispatch(userRegistration(data));
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
        <StyledRegisterContainer>
          <StyledTop>
            <StyledAvatar>
              <LockOutlinedIcon />
            </StyledAvatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </StyledTop>

          <AuthForm onSubmit={onSubmit} title="Sign Up" />

          <StyledGrid container justifyContent="space-between">
            <StyledText>Or</StyledText>
            <StyledSignUp>
              <Link to="/login" className="sign-login">
                I have an account
              </Link>
            </StyledSignUp>
          </StyledGrid>
        </StyledRegisterContainer>
      </Container>
    </motion.div>
  );
};

export default RegisterPage;
