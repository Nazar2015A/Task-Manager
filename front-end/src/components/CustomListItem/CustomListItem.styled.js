import { styled, ListItem } from "@mui/material";

export const StyledCustomListItem = styled(({ active, ...rest }) => <ListItem {...rest} />)`
  color: #9b9b9a;
  display: flex;
  gap: 20px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
  padding: 10px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #262626;
  }

  ${(props) =>
    props.active &&
    `
    position: relative;
    background-color: #333233;
    color: #e9e6e6;
      &::before {
        position: absolute;
        content: '';
        top: 100%;
        left: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: #9BCC99;
      }
      svg {
        color: #e9e6e6;
      }
    `}
`;
