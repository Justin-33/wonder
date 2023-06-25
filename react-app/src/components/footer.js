import React from "react";
import Link from "@mui/material/Link";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary">
          <Link color="inherit" href="https://github.com/favydabs">
            <GitHubIcon />
          </Link>{" "}
          <Link color="inherit" href="https://twitter.com/favydabs">
            <TwitterIcon />
          </Link>{" "}
          <Link color="inherit" href="https://facebook.com/favydabs">
            <FacebookIcon />
          </Link>{" "}
          <br />
          {"Copyright © "}
           this blog page is created by Favour Dabit { "  "}  
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
