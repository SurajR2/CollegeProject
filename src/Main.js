import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
const Main = () => {
  return (
    <>
      <Routes>
        {/* The Switch decides which component to show based on the current URL.*/}
        <Route path="/root/home" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};

export default Main;
