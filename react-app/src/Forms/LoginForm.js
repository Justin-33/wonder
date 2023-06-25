import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputAdornments from "./PasswordForm";
import { PATH_PAGE } from "../router/paths";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [rememberMe, setRememberMe] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>  
          <InputAdornments
             value={formData.password}
             onChange={handleChange}
          />
        </Grid>
        <Grid>
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                name="rememberMe"
              />
            }
            label="Remember Me"
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="primary"
        >
          LogIn
        </Button>
        <Grid container>
          <Grid item xs>
            <Link
              href={PATH_PAGE.forgotPassword}
              variant="body2"
              underline="none"
              component={Button}
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              href={PATH_PAGE.signup}
              variant="body2"
              underline="none"
              component={Button}
            >
              "Don't have an account? Sign Up"
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default LogIn;
