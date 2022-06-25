/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  TextField,
  Paper,
  Avatar,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credential, setCredential] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newCredential = { email: email, password: password };

    setCredential([...credential, newCredential]);
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1ab5df", ml: "10px" };
  const fieldStyle = { align: "center", margin: "20px auto " };
  const buttonStyle = { margin: "10px auto", backgroundColor: "green" };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form className="Form" action="" onSubmit={submitForm}>
            <TextField
              style={fieldStyle}
              variant="filled"
              id="email"
              label="email"
              type="text"
              value={email}
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              style={fieldStyle}
              variant="filled"
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="Current-Password"
              fullWidth
            />
            <Link to="/root/home">
              <Button
                style={buttonStyle}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Link>
            <Typography>
              <Link to="#">Forgot password ?</Link>
            </Typography>

            <Typography>
              Do you have an account ?<Link to="/signup">Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default Login;
