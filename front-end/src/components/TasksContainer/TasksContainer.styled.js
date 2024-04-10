import { styled, Typography, Button } from "@mui/material";

export const StyledTasksPage = styled("div")`
  padding: 50px;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  background-color: #212022;
  margin-top: 100px;

  @media (max-width: 900px) {
    margin-top: 0;
  }
`;
export const StyledTasksTop = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const StyledTitle = styled(Typography)`
  font-weight: 800;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    top: 110%;
    left: 0;
    width: 40px;
    height: 4px;
    background-color: #9bcc99;
  }
`;

export const StyledTasksContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledOpenModalBtn = styled("button")`
  background: transparent;
  color: #bdbcc8;
  svg {
    height: 50px;
    width: 50px;
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid #262626;
    padding: 5px;
    transition: all 0.3s;
    animation: colorChange 3s infinite;
    &:hover {
      background: #333233;
    }
    &:active {
      background: #474747;
    }
  }
`;

export const StyledAddNewTaskBtn = styled(Button)`
  border: 2px dashed #474747;
  text-transform: capitalize;
  color: #727078;
  font-weight: 600;
  font-size: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  height: 16rem;
  color: #fff;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
  }
`;
