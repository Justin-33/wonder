import React from "react";
import Blogfield from "../Forms/CreateBlogForm";
import { Box, Avatar, Link, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { PATH_PAGE } from "../router/paths";

const CreateblogPage = () => {
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
        Create your blog
      </Typography>
      <Blogfield />
    </Box>
  );
};

export default CreateblogPage;
