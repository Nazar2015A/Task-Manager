import React from "react";
import { useDispatch } from "react-redux";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { mailForgotPassword } from "../../store/mail/mail.async";
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm.component";
import {
  StyledAvatar,
  StyledTop,
  StyledWraper,
} from "./ForgotPasswordPage.styled";
import { INITIAL_VALUES_FORGOT } from "../../components/ForgotPasswordForm/InitialValues";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(mailForgotPassword(values));
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
        <StyledWraper>
          <StyledTop>
            <StyledAvatar>
              <LockOutlinedIcon />
            </StyledAvatar>
            <Typography variant="h5">Forgot Password</Typography>
          </StyledTop>
          <ForgotPasswordForm
            onSubmit={handleSubmit}
            title="Send"
            INITIAL_VALUES={INITIAL_VALUES_FORGOT}
          />
        </StyledWraper>
      </Container>
    </motion.div>
  );
};

export default ForgotPasswordPage;
