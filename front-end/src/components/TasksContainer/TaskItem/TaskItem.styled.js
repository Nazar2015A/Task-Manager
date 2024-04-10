import { styled, Button, Typography } from "@mui/material";

export const StyledItemContainer = styled("div")`
  position: relative;
  background-color: #333233;
  border-radius: 15px;
  border: 2px solid #424142;
  padding: 20px;
  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const StyledItemTitle = styled(Typography)`
  overflow-wrap: break-word;
  word-break: break-word;
`;
export const StyledItemDesc = styled(Typography)`
  overflow-wrap: break-word;
  word-break: break-word;
  flex-grow: 1;
`;

export const StyledTaskItemBtnContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBtnCompleted = styled(Button)`
  text-transform: capitalize;
  background-color: #43bc3f;
  width: 110px;
  color: #fff;

  &:hover {
    background-color: #79c976;
  }
`;
export const StyledBtnInCompleted = styled(Button)`
  text-transform: capitalize;
  background-color: #c54f42;
  width: 110px;
  color: #fff;

  &:hover {
    background-color: #db7367;
  }
`;

export const StyledBtnsEditContainer = styled("div")`
  display: flex;
`;

export const StyledBtnEdit = styled(Button)`
  color: #bdbcc8;
  &:hover {
    background-color: #474747;
    transition: all 0.5s;
  }
`;
