import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  StyledContainer,
  StyledH1,
  StyledH3,
  StyledSpan,
} from "./ResetPasswordPage.styled";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm.component";
import { INITIAL_VALUES_RESET } from "./InitialValues";
import { ResetPasswordSchema } from "./reset-schema";
import { mailResetPassword } from "../../store/mail/mail.async";

function ResetPassword() {
  const { email, token } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(mailResetPassword({ email, token, password: values.password }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="animated-container"
    >
      <StyledContainer component="main" maxWidth="xs">
        <div>
          <StyledH1>Reset account password</StyledH1>
          <StyledH3>
            Enter a new password for <StyledSpan>{email}</StyledSpan>
          </StyledH3>
          <ResetPasswordForm
            onSubmit={handleSubmit}
            title="Reset Password"
            INITIAL_VALUES={INITIAL_VALUES_RESET}
            Schema={ResetPasswordSchema}
          />
        </div>
      </StyledContainer>
    </motion.div>
  );
}

export default ResetPassword;
