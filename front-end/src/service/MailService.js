import $api from "../http";

export default class MailService {
  static forgotPassword(email) {
    return $api.post("/mail/forgot-password", { email });
  }
  static resetPassword(email, token, password) {
    console.log(email, token, password)
    return $api.post(`/mail/reset-password/${email}/${token}`, { password });
  }
}
