import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBtnBack } from "./BtnBack.styled";

const BtnBack = ({url}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(url || -1);
  };
  return <StyledBtnBack onClick={handleNavigate}>Back</StyledBtnBack>;
};

export default BtnBack;
