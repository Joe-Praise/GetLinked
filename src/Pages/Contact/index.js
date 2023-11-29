import React, { useState } from "react";
import api from "../../utils/axiosCreate";
import Wrapper from "../../UI/Wrapper";
import RegisterBtn from "../../UI/RegisterBtn";
import instagram from "../../images/mdi_instagram.png";
import x from "../../images/Vector (1).png";
import facebook from "../../images/Vector (2).png";
import linkedIn from "../../images/Vector (3).png";
import { Link } from "react-router-dom";
import whiteStar from "../../images/star.png";
import fadedStar from "../../images/faded star.png";
import coloredStar from "../../images/star pu.png";
import Star from "../../UI/Star";
import GlowSpot from "../../UI/GlowSpot";
import Validation from "../../utils/validation";
import { GlideInLeft } from "../../utils/Reveal";

const star = [
  {
    id: 1,
    star: coloredStar,
    position: {
      top: "70%",
      left: "49.5%",
    },
    size: "1.2rem",
  },

  {
    id: 2,
    star: fadedStar,
    location: "text",
    position: {
      top: "8%",
      right: "13%",
    },
    size: "1.2rem",
  },
  {
    id: 3,
    star: whiteStar,
    location: "text",
    position: {
      top: "85%",
      right: "5%",
    },
    size: "1rem",
  },
  {
    id: 4,
    star: coloredStar,
    position: {
      top: "10%",
      left: "10%",
    },
    size: "1.2rem",
  },
];

const ContactPage = () => {
  return (
    <Wrapper>
      <GlideInLeft>
        <div className="contactUsContainer">
          <GlowSpot className={"glowContainer"} glowOpacity={"glow"} />
          {star.map((el) => {
            return (
              <Star
                image={el.star}
                {...el.position}
                size={el.size}
                key={el.id}
                className="transformTranslateStar"
              />
            );
          })}
          <GetInTouch />
          <ContactForm />
        </div>
      </GlideInLeft>
    </Wrapper>
  );
};

export default ContactPage;

const GetInTouch = () => {
  return (
    <div className="contactInfoContainer">
      <h1 className="contactHeader">Get in touch</h1>
      <p className="contactP">Contact Information</p>
      <p className="contactP">27,Alara Street Yaba 100012 Lagos State</p>
      <p className="contactP openTime">Call Us : 07067981819</p>
      <p className="contactP openTime">
        we are open from Monday-Friday 08:00am - 05:00pm
      </p>
      <div className="socialMedialWrapper">
        <p className="share">Share on</p>
        <ul className="contactSocialMediaLinks">
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
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // all input change handler
  const inputChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContactInfo({ ...contactInfo, [name]: value.toLowerCase() });
  };

  // form validation handler
  const handleValidation = (e) => {
    e.preventDefault();
    const values = { ...contactInfo };

    const isErrors = Validation(values);
    setErrors(isErrors);

    if (Object.keys(isErrors).length > 0) return;

    submitFormHandler(values);
  };

  // form submittion
  const submitFormHandler = async (values) => {
    try {
      await api.post("/hackathon/contact-form", values);

      // reset state
      setContactInfo({
        email: "",
        phone_number: "",
        first_name: "",
        message: "",
      });
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.header);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="contactFormWrapper">
      <h3>Questions or need assistance? Let us know about it!</h3>
      <p className="hide">
        Email us below to any question related to our event
      </p>
      <form onSubmit={handleValidation} noValidate>
        <div className="inputContainer">
          <input
            type="text"
            name="first_name"
            value={contactInfo.first_name}
            placeholder="First Name"
            onChange={inputChangeHandler}
          />
          {errors.first_name && (
            <p style={{ color: "red", marginTop: "0.3rem" }}>
              {errors.first_name}
            </p>
          )}
        </div>
        <div className="inputContainer">
          <input
            type="text"
            name="phone_number"
            value={contactInfo.phone_number}
            placeholder="Phone Number"
            onChange={inputChangeHandler}
          />
          {errors.phone_number && (
            <p style={{ color: "red", marginTop: "0.3rem" }}>
              {errors.phone_number}
            </p>
          )}
        </div>
        <div className="inputContainer">
          <input
            type="email"
            name="email"
            value={contactInfo.email}
            placeholder="Email"
            onChange={inputChangeHandler}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "0.3rem" }}>{errors.email}</p>
          )}
        </div>
        <div className="inputContainer">
          <textarea
            cols={50}
            rows={5}
            name="message"
            placeholder="Message"
            onChange={inputChangeHandler}
            value={contactInfo.message}
          />
          {errors.message && (
            <p style={{ color: "red", marginTop: "0.3rem" }}>
              {errors.message}
            </p>
          )}
        </div>
        <div className="contactSUbmitBtnContainer">
          <RegisterBtn value={"Submit"} className="Register" size={"9rem"} />
        </div>
      </form>
    </div>
  );
};
