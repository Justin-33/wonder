import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { AppBar, Link } from "@mui/material";
import { PATH_PAGE } from "../router/paths";
import ProfileIcon from "./ProfileIcon";

function LoggedinHeader(props) {
  const { title } = props;
  const name = "Favour Dabit"

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "transparent", color: "black" }}
    >
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "space-between",
        }}
        component="nav"
        variant="dense"
      >
        <Link href={PATH_PAGE.homepage} underline="none">
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title} 
          </Typography>
        </Link>
        <Typography
            component="h6"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            Welcome Back - {name}
          </Typography>
        
        <Stack direction="row" spacing={2}>
          <ProfileIcon />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default LoggedinHeader;
