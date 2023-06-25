import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PATH_PAGE } from "../router/paths";
import InputAdornments from "./PasswordForm";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            fullWidth
            required
            inputProps={{
              pattern: "^\\+?[1-9]\\d{1,14}$",
              title: "Please enter a valid phone number",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="email address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <InputAdornments />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="primary"
        >
          Sign up
        </Button>
        <Grid container>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href={PATH_PAGE.login}
                variant="body2"
                underline="none"
                component={Button}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SignUpForm;
