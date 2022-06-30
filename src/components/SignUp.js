import { Grid, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function SignUp() {
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonStyle = { margin: "10px auto", backgroundColor: "green" };
  const BASE_URL = "http://localhost:3000/api";
  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
    };
    axios
      .post(`${BASE_URL}/register`, data)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          window.location = "/home";
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
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
      <form className="Form" method="post" onSubmit={submitForm}>
        <Grid>
          <Paper elivation={10} style={paperStyle}>
            <TextField
              style={fieldStyle}
              variant="filled"
              id="fullname"
              type="text"
              value={fullname}
              label="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              fullWidth
              required
            ></TextField>
            <TextField
              style={fieldStyle}
              variant="filled"
              id="username"
              type="text"
              value={username}
              label="User Name"
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              required
            ></TextField>
            <TextField
              style={fieldStyle}
              variant="filled"
              id="Email"
              type="email"
              value={email}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            ></TextField>

            <TextField
              style={fieldStyle}
              variant="filled"
              id="Password"
              type="password"
              value={password}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              autoComplete="off"
              required
            ></TextField>
            <Button
              style={buttonStyle}
              type="submit"
              variant="contained"
              fullWidth
            >
              SignUp
            </Button>
          </Paper>
        </Grid>
      </form>
    </div>
  );
}

export default SignUp;
