import React from "react";
import Homepage from "../../UI/Homepage";
import { Route, Routes } from "react-router-dom";

import Women from "../Pages/Women";
import Men from "../Pages/Men";
import Kids from "../Pages/Kids";
import Sport from "../Pages/Sport";
import Sale from "../Pages/Sale";
import HmHome from "../Pages/HmHome";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/kids' element={<Kids />}></Route>
        <Route path='/hm-home' element={<HmHome />}></Route>
        <Route path='/sport' element={<Sport />}></Route>
        <Route path='/sales' element={<Sale />}></Route>
        <Route path='/sign-up' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
