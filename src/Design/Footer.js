import React from "react";
import { Link } from "react-router-dom";
import instagram from "../../src/images/mdi_instagram.png";
import x from "../../src/images/Vector (1).png";
import facebook from "../../src/images/Vector (2).png";
import linkedIn from "../../src/images/Vector (3).png";
import phone from "../../src/images/Group.png";
import location from "../../src/images/Vector (4).png";
import logo from "../../src/images/getlinked.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper">
        <FirstDiv />
        <FooterLinks />
        <ContactUs />
      </div>
      <div className="rightReserved">
        <span>All rights reserved. © getlinked Ltd.</span>
      </div>
    </footer>
  );
};

export default Footer;

const FirstDiv = () => {
  return (
    <div className="footerdiv1">
      <div className="">
        <img src={logo} alt="" />
        <p>
          Getlinked Tech Hackathon is a technology innovation program
          established by a group of organizations with the aim of showcasing
          young and talented individuals in the field of technology
        </p>
      </div>
      <div className="termsAndPrivacy">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="footerdiv2">
      <ul className="footerLinks">
        <li>Useful Links</li>
        <li>
          <Link to={""}>Overview</Link>
        </li>
        <li>
          <Link to={""}>Timeline</Link>
        </li>
        <li>
          <Link to={""}>FAQs</Link>
        </li>
        <li>
          <Link to={""}>Register</Link>
        </li>
        <li>
          follow us
          <ul className="socialMediaLinks">
            <li>
              <Link to={""}>
                <img src={instagram} alt="instagram icon" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <img src={x} alt="X (formally known as twitter) icon" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <img src={facebook} alt="Facebook icon" />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <img src={linkedIn} alt="LinkedIn icon" />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="footerdiv3">
      <h3 className="footer3Header">Contact Us</h3>
      <div className=" footerContact">
        <div>
          <img src={phone} alt="Done icon" />
        </div>
        <p>+234 6707653444</p>
      </div>
      <div className=" footerContact">
        <div>
          <img src={location} alt="Done icon" />
        </div>
        <p>27,Alara Street Yaba 100012 Lagos State</p>
      </div>
    </div>
  );
};
