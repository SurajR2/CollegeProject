import ReactDOM from "react-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
