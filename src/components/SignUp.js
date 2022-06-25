import { Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

function SignUp() {
  const [validation, setValidation] = useState({
    firstName: " ",
    lastName: " ",
    dateOfBirth: " ",
    email: " ",
    userName: " ",
    password: " ",
  });
  const onValidation = (e) => {
    e.preventDefault();
    setValidation(e.target.value);
  };
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px  auto",
  };
  const fieldStyle = { align: "center", margin: "20px auto " };

  return (
    <div>
      <Grid>
        <Paper elivation={10} style={paperStyle}>
          <TextField
            style={fieldStyle}
            variant="filled"
            id="firstName"
            type="text"
            value={validation.firstName}
            label="First Name"
            onChange={onValidation}
            fullWidth
            required
          ></TextField>
          <TextField
            style={fieldStyle}
            variant="filled"
            id="firstName"
            type="text"
            value={validation.lastName}
            label="Last Name"
            onChange={onValidation}
            fullWidth
            required
          ></TextField>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;
