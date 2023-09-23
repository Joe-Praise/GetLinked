import React from "react";
import Wrapper from "../../UI/Wrapper";
import RegisterBtn from "../../UI/RegisterBtn";
import vector from "../../images/Vector.png";
import padlock from "../../images/padlock.png";
import done from "../../images/list terms.png";
import fadedstar from "../../images/faded star.png";
import whiteStar from "../../images/star.png";
import coloredStar2 from "../../images/sata gra.png";
import Star from "../../UI/Star";
import { GlideInLeft } from "../../utils/Reveal";

const stars = [
  {
    id: 1,
    star: coloredStar2,
    position: {
      top: "75%",
      left: "5%",
    },
    size: "1.5rem",
  },

  {
    id: 2,
    star: coloredStar2,
    location: "text",
    position: {
      top: "20%",
      left: "50%",
    },
    size: "1.5rem",
  },
  {
    id: 3,
    star: coloredStar2,
    location: "text",
    position: {
      top: "65%",
      right: "34%",
    },
    size: "1rem",
  },
  {
    id: 4,
    star: whiteStar,
    location: "text",
    position: {
      top: "25%",
      right: "17%",
    },
    size: "1rem",
  },
  {
    id: 5,
    star: whiteStar,
    location: "text",
    position: {
      top: "75%",
      right: "38%",
    },
    size: "1rem",
  },
  {
    id: 6,
    star: fadedstar,
    location: "text",
    position: {
      top: "80%",
      right: "10%",
    },
    size: "1rem",
  },
  {
    id: 7,
    star: fadedstar,
    location: "text",
    position: {
      top: "10%",
      left: "30%",
    },
    size: "1.5rem",
  },
];

const privacyBoxDetails = [
  {
    id: 1,
    description:
      " At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in ourevent, you consent to the practices described in this policy.",
    h3: "Licensing Policy",
    plainH3: "Here are terms of our Standard License:",

    bullet: [
      {
        id: 1,
        icon: done,
        text: "The Standard License grants you a non-exclusive right to navigate and register for our event",
      },
      {
        id: 2,
        icon: done,
        text: "You are licensed to use the item available at any free source sites, for your project developement.",
      },
    ],
  },
];

const Privacy = () => {
  return (
    <Wrapper id={"privacy"} className={"sectionBorderBottom positionRelative"}>
      {stars.map((el) => {
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
      <GlideInLeft>
        <div className="privacyContainer">
          <div className="privacyInfoContainer">
            <div className=" privacyHeader">
              <h3 className="privacyH3Header">
                Privacy Policy and Terms
                <span className="privacySpanHeader">Terms</span>
              </h3>
              <p className="fadedText">Last updated on September 12, 2023</p>
              <p>
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </p>
            </div>
            {privacyBoxDetails.map((el) => {
              return (
                <PrivacyBoxTemplate key={el.id} {...el} bullet={el.bullet} />
              );
            })}
          </div>

          <div className="privacyImageContainer">
            <img
              src={vector}
              alt="png of a vector"
              className="privacyImgVector"
            />

            <img
              src={padlock}
              alt="png of a catoon character on an open lock"
              className="privacyImgPadlock"
            />
          </div>
        </div>
      </GlideInLeft>
    </Wrapper>
  );
};

export default Privacy;

const PrivacyBoxTemplate = ({ description, h3, plainH3, bullet }) => {
  return (
    <>
      <div className="privacyBox">
        <p>{description}</p>
        <div className="privacyHeader">
          <h3 className="privacyH3Header prizeSmallH3">
            <span className="privacySpanHeader">{h3}</span>
            {plainH3}
          </h3>
          {bullet.map((el, i) => {
            return (
              <div className="licensingPolicyContainer" key={i}>
                <div>
                  <img src={el.icon} alt="Done icon" />
                </div>
                <p>{el.text}</p>
              </div>
            );
          })}
        </div>
        <div className="privacyBtn">
          <RegisterBtn
            value={"Read More"}
            className={"Register"}
            size={"9rem"}
          />
        </div>
      </div>
    </>
  );
};
