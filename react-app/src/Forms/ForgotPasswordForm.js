import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";


const ForgotPasswordForm = () => {
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
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="primary"
      >
        Send Email
      </Button>
    </Grid>
  </Box>
  );
};
export default ForgotPasswordForm;
