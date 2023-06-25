import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SignUpForm from "../Forms/SignUpForm";
import LockIcon from "../components/LockIcon";

const SignUp = () => {

  return (
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LockIcon />
        <Typography component="h1" variant="h5">
          SignUp
        </Typography>
        <SignUpForm />
      </Box>
  );
};
export default SignUp;
