import React from "react";
import Homepage from "../components/UI/Homepage";
import { Route, Routes } from "react-router-dom";

import Women from "../pages/Women";
import Men from "../pages/Men";
import Kids from "../pages/Kids";
import Sport from "../pages/Sport";
import Sale from "../pages/Sale";
import HmHome from "../pages/HmHome";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/hm-home" element={<HmHome />}></Route>
        <Route path="/sport" element={<Sport />}></Route>
        <Route path="/sales" element={<Sale />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
