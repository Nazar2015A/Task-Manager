import React from "react";

import { Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledDesktopMenu,
  StyledList,
  StyledMenuBtn,
  StyledMenuDropDown,
  StyledMobileMenu,
  StyledNavbar,
} from "./Navbar.styled";
import { menu } from "./menu.data";
import CustomListItem from "../CustomListItem/CustomListItem.component";
import Logout from "../Logout/Logout.component";
import CustomMenuItem from "../CustomMenuItem/CustomMenuItem.component";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledNavbar>
      <StyledDesktopMenu>
        <Box>
          <Typography variant="h5">Task Manager</Typography>
        </Box>
        <StyledList>
          {menu.map((item) => (
            <CustomListItem key={item.id} item={item} />
          ))}
        </StyledList>
        <Box>
          <Logout />
        </Box>
      </StyledDesktopMenu>
      <StyledMobileMenu>
        <StyledMenuBtn
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </StyledMenuBtn>
        <StyledMenuDropDown
          open={!!anchorEl}
          onClose={handleClose}
          aria-controls="simple-menu"
          aria-haspopup="true"
          anchorEl={anchorEl}
        >
          {menu.map((item) => (
            <CustomMenuItem key={item.id} item={item} />
          ))}
        </StyledMenuDropDown>
      </StyledMobileMenu>
    </StyledNavbar>
  );
};

export default Navbar;
