import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AppBar, Link } from "@mui/material";
import { PATH_PAGE } from "../router/paths";

function Header(props) {
  const { title } = props;

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
        <Button size="small" variant="outlined">
          <Link href={PATH_PAGE.signup} variant="body1" underline="none">
            Create Account
          </Link>
        </Button>
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
        <Button size="small" variant="outlined">
          <Link href={PATH_PAGE.login} variant="body1" underline="none">
            Sign In
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string,
    })
  ),
  title: PropTypes.string.isRequired,
};

export default Header;
