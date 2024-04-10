import { styled, Button } from "@mui/material";
import { Form } from "formik";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const StyledModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledBtnContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const StyledBtnSubmit = styled(Button)`
  padding: 10px 20px;
  background: #537bc8;
  color: #bfbdbf;
  border-radius: 15px;
  text-transform: capitalize;
  font-size: 16px;
  gap: 0.5rem;
  &:hover {
    background: #5d88d7;
    color: #fff;
  }
`;

export const StyledIcon = styled(AddOutlinedIcon)`
  width: 30px;
  height: 30px;
`;
