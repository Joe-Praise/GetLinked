import React from "react";
import Wrapper from "../../UI/Wrapper";
import libertyAssured from "../../images/Liberty company logo white colour.png";
import libertyPay from "../../images/Liberty company logo white.png";
import winWise from "../../images/Winwise logo White colour 1.png";
import whispersms from "../../images/wisper logo white.png";
import payBox from "../../images/Paybox.png";
import vuzualPlus from "../../images/Vizual Plus.png";
import Star from "../../UI/Star";
import whiteStar from "../../images/star.png";
import coloredStar2 from "../../images/sata gra.png";
import coloredStar from "../../images/star pu.png";
import GlowSpot from "../../UI/GlowSpot";
import { GlideInRight } from "../../utils/Reveal";

const row1 = [
  {
    id: 1,
    image: libertyAssured,
  },
  {
    id: 2,
    image: libertyPay,
  },
  {
    id: 3,
    image: winWise,
  },
];

const row2 = [
  {
    id: 1,
    image: whispersms,
  },
  {
    id: 2,
    image: payBox,
  },
  {
    id: 3,
    image: vuzualPlus,
  },
];

const star = [
  {
    id: 1,
    star: coloredStar2,
    position: {
      top: "-5%",
      left: "10%",
    },
    size: "1.2rem",
  },

  {
    id: 2,
    star: coloredStar,
    location: "text",
    position: {
      top: "20%",
      right: "43%",
    },
    size: "1rem",
  },
  {
    id: 3,
    star: whiteStar,
    location: "text",
    position: {
      top: "78%",
      left: "55%",
    },
    size: "1rem",
  },
];
const Sponsors = () => {
  return (
    <Wrapper className={"sectionBorderBottom sponsorWrapper"}>
      <div className="positionRelative">
        <div className="sponsorHeader">
          <h3 className="">Partners and Sponsors</h3>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <GlowSpot className={"glowContainer"} glowOpacity={"glow"} />
        <GlideInRight>
          <div className="sponsorDisplayBorder">
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
            <div className="sponsorsDisplayWrapper">
              {row1.map((el, i) => {
                return i === 1 ? (
                  <SponsorCardTemplate
                    image={el.image}
                    key={el.id}
                    className={"lineInbetweenTop"}
                  />
                ) : (
                  <SponsorCardTemplate
                    image={el.image}
                    key={el.id}
                    className={""}
                  />
                );
              })}
            </div>
            <div className="sponsorsDisplayWrapper">
              {row2.map((el, i) => {
                return i === 1 ? (
                  <SponsorCardTemplate
                    image={el.image}
                    key={el.id}
                    className={"lineInbetweenBottom"}
                    topBorderLine={"topBorderLine"}
                  />
                ) : (
                  <SponsorCardTemplate
                    image={el.image}
                    key={el.id}
                    className={""}
                    topBorderLine={"topBorderLine"}
                  />
                );
              })}
            </div>
          </div>
        </GlideInRight>
      </div>
    </Wrapper>
  );
};

export default Sponsors;

const SponsorCardTemplate = ({ image, className, topBorderLine }) => {
  return (
    <div className={`sponsorItemPicture ${className}`}>
      <div className={`${topBorderLine}`}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
