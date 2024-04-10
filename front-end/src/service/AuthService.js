import axios from "axios";
import $api from "../http";

export default class AuthService {
  static async login(email, password) {
    return $api.post("/auth/login", {
      email,
      password,
    });
  }

  static async registration(email, password) {
    return $api.post("/auth/registration", {
      email,
      password,
    });
  }

  static async logout() {
    return $api.post("/auth/logout");
  }

  static async forgotPassword(email) {
    return axios.post(
      `${process.env.REACT_APP_SERVER_URL_MAIL}/forgot-password`,
      { email },
      { withCredentials: true }
    );
  }

  static async checkAuth() {
    return axios.get(`${process.env.REACT_APP_SERVER_URL_AUTH}/refresh`, {
      withCredentials: true,
    });
  }
}
