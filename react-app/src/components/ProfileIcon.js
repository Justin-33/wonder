import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ProfileIcon = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
   console.log('logged out user')
  };




  return (
    <Stack>
      <IconButton onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Stack>
            <MenuItem onClick={handleLogOut}>Create Blog</MenuItem>
            <MenuItem onClick={handleLogOut}>View My Blogs</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        </Stack>
      </Menu>
    </Stack>
  );
};

export default ProfileIcon;
