import React from "react";
import BackgroundImageWrapper from "../../utils/BackgroundImageWrapper";
import Overview from "./Overview";
import Timeline from "./Timeline";
import Prizes from "./Prizes";
import Sponsors from "./Sponsors";
import Privacy from "./Privacy";
import Footer from "../../Design/Footer";

const LandingPage = () => {
  return (
    <div>
      <BackgroundImageWrapper />
      <Overview />
      <Timeline />
      <Prizes />
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  );
};

export default LandingPage;
