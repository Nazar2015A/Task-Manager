import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AllTasksPage from "../pages/alltasks/AllTasksPage";
import ImportantPage from "../pages/important/ImportantPage";
import CompletedPage from "../pages/completed/CompletedPage";

import ResetPassword from "../pages/ResetPasswordPage/ResetPassword";
import LoginPage from "../pages/loginPage/LoginPage.component";
import RegisterPage from "../pages/registerPage/RegisterPage.component";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.component";
import ForgotPasswordPage from "../pages/ForgotPassword/ForgotPasswordPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/alltasks" element={<AllTasksPage />} />
        <Route path="/important" element={<ImportantPage />} />
        <Route path="/completed" element={<CompletedPage />} />
      </Route>

      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:email/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default AnimatedRoutes;
