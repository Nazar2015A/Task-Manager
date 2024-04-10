import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userCheckAuth } from "../../store/user/user.async";
import Navbar from "../Navbar/Navbar.component";

const PrivateRoute = () => {
  const { isAuth } = useSelector((state) => state.users);
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();
  console.log(isAuth)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await dispatch(userCheckAuth());
        setAuthChecked(true);
      } catch (error) {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, [dispatch]);

  if (!authChecked) {
    return <Navbar />;
  }

  if (isAuth) {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }

  return <Navigate replace={true} to="/login" />;
};

export default PrivateRoute;
