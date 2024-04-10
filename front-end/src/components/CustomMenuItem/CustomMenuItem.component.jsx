import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { StyledMenuItem } from "./CustomMenuItem.styled";

const CustomMenuItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation()
  const handleNavigate = () => {
    navigate(item.link);
  };
  return <StyledMenuItem active={location.pathname === item.link} onClick={handleNavigate}>{item.title}{item.icon}</StyledMenuItem>;
};

export default CustomMenuItem;
