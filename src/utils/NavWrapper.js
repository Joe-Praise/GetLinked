import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Design/Navigation";
// import Footer from "../Design/Footer";

const NavWrapper = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default NavWrapper;
