import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledRegisterContainer = styled("div")`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin: 2rem;
`;

export const StyledTop = styled("div")`
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 800px) {
    margin-bottom: 3rem;
  }
  @media (max-width: 600px) {
    margin-bottom: 2rem;
  }
`;

export const StyledGrid = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const StyledButton = styled(Button)`
  padding: 0;
  border-radius: 15px;
  background-color: #545b69;
  text-transform: capitalize;
  font-size: 14px;

  a {
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 10px 15px;
  }
  &:hover {
    background-color: #545b69;
  }
`;

export const StyledSignUp = styled(Button)`
  padding: 0;
  border-radius: 15px;
  background-color: #90CAF9;
  text-transform: capitalize;
  font-size: 14px;

  a {
    color: #000;
    width: 100%;
    height: 100%;
    padding: 10px 15px;
  }
  &:hover {
    background-color: #90CAF9;
  }
`;
export const StyledText = styled("h3")`
    text-align: center;
    color: #999;
`
