import { MenuItem, styled } from "@mui/material";

export const StyledMenuItem = styled(({ active, ...rest }) => <MenuItem {...rest} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    padding: 10px;
    &:not(:last-child) {
        border-bottom: 1px solid #777;
    }
  ${(props) =>
    props.active &&
    `
        background-color: #1976d2;
    `}
`;
