import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";


// compoinents
import ForgotPasswordForm from '../Forms/ForgotPasswordForm'
import LockIcon from '../components/LockIcon'

const LogInPage = () => {

  return (
      <Stack spacing={2}>
        <Box
          sx={
            {
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }
          }>
            <LockIcon />
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
        </Box>
        <ForgotPasswordForm />
      </Stack>
  );
};
export default LogInPage;
