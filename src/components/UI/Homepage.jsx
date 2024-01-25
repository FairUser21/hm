import React from "react";
import Navbar from "../Nav/Navbar";
import CategoryNav from "../Nav/CategoryNav";
import Products from "../Products/Products";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <CategoryNav />
      <Products />
    </div>
  );
};

export default Homepage;
