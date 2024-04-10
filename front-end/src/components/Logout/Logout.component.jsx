import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { userLogout } from "../../store/user/user.async";
import { StyledLogoutBtn } from "./Logout.styled";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/login");
  };

  return (
    <StyledLogoutBtn onClick={handleLogout}>
      <LogoutIcon />
      Sign Out
    </StyledLogoutBtn>
  );
};

export default Logout;
