import * as Yup from "yup";

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Required").min(5).max(25),
  confirmPassword: Yup.string()
    .required("Required")
    .min(5)
    .max(25)
    .oneOf([Yup.ref("password")], "Your password should match"),
});
