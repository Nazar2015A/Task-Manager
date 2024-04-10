import { styled, List, Button, Menu } from "@mui/material";

export const StyledDesktopMenu = styled("div")`
width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledNavbar = styled("div")`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  border: 1px solid #333233;
  border-radius: 15px;
  background-color: #212022;
  transition: transform 0.3s;
  @media (max-width: 900px) {
    background: transparent;
    border: none;
    outline: none;
    left: -50px;
    top: 20px;
  }
`;

export const StyledMenuBtn = styled(Button)`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`

export const StyledList = styled(List)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledMobileMenu = styled("div")`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledMenuDropDown = styled(Menu)`
  ul {
    padding: 0;
  }
`
