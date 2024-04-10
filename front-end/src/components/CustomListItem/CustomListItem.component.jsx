import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledCustomListItem } from "./CustomListItem.styled";

const CustomListItem = ({ item }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(item.link);
  };
  return (
    <StyledCustomListItem
      active={location.pathname === item.link}
      onClick={handleNavigate}
    >
      {item.icon}
      {item.title}
    </StyledCustomListItem>
  );
};

export default CustomListItem;
