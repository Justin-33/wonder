import React from "react";
import Editblog from "../Forms/EditBlog";
import { Box, Avatar, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { PATH_PAGE } from "../router/paths";

const Editpage = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Link href={PATH_PAGE.EditPage}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
      </Link>
      <Typography component="h1" variant="h5">
        Edit
      </Typography>
      <Editblog />
    </Box>
  );
};

export default Editpage;
