import { styled } from "@mui/system";
import { Button } from "@mui/material";

export const StyledFormLogin = styled("form")`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StyledInput = styled("form")`
  width: 100%;
`;

export const StyledContainerInput = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledButtonSubmit = styled(Button)`
  margin: 1rem 0;
  font-size: 16px;
  text-transform: capitalize;
  background-color: #1D90F4;
  color: #fff;
`;
