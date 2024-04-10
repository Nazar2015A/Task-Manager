import { styled, Button } from "@mui/material";

export const StyledModalWrapper = styled("div")`
  max-width: 600px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #212022;
  border-radius: 15px;
  padding: 3rem;
  color: #fff;
`;

export const StyledModalTop = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const ModalCloseIcon = styled(Button)`
  background-color: transparent;
  color: #bdbcc8;
  cursor: pointer;
  width: 30px;
  height: 30px;
  transition: all 0.3s;
  &:hover {
    color: #fff;
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;
