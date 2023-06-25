import React from "react";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { PATH_PAGE } from "../router/paths";

// compoinents
import LogIn from '../Forms/LoginForm'

const LogInPage = () => {

  return (
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Link href={PATH_PAGE.homepage}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Login into your account
        </Typography>
        <LogIn />
      </Box>
  );
};
export default LogInPage;
