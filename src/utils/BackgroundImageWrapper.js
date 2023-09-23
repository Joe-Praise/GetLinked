import React, { useContext } from "react";
import RegisterBtn from "../UI/RegisterBtn";
import banner from "../images/Title.png";
import banner2 from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import underline from "../images/Vector 4.png";
import banner2b from "../images/Image 1.png";
import GlowSpot from "../UI/GlowSpot";
import { AppData } from "../Context";
import { textEnter, textLeave } from "./TextHoverController";
import Star from "../UI/Star";
import star from "../images/star.png";
import fadedstar from "../images/faded star.png";
import { GlideInLeft, GlideInRight } from "./Reveal";

const BackgroundImageWrapper = () => {
  const ctx = useContext(AppData);
  const [, setCursorVariant] = ctx.getCursorVariant;
  const time = [
    { hour: "00", abv: "H" },
    { hour: "00", abv: "M" },
    { hour: "00", abv: "S" },
  ];

  return (
    <section style={{ borderBottom: "1px solid #ffffff23" }}>
      <div className="bannerSection">
        <div className="typeWriterWrapper">
          <p className="typewriter">Igniting a Revolution in HR Innovation</p>
          <img src={underline} alt="" className="underline" />
        </div>
        <GlideInLeft>
          <div className="left">
            <div>
              <Star top={"15%"} left={"20%"} image={star} />
              <Star left={"85%"} image={fadedstar} />
              <Star bottom={"15%"} left={"40%"} image={fadedstar} />
            </div>
            <figure
              onMouseEnter={() => textEnter(setCursorVariant, "text")}
              onMouseLeave={() => textLeave(setCursorVariant, "default")}
            >
              <img src={banner} alt="mission statement" />
            </figure>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <div className="bgRegisterBtn">
              <RegisterBtn
                value={"Register"}
                className={"Register"}
                size={"9rem"}
              />
            </div>
            <ul className="timer">
              {time.map((el, i) => (
                <li className="timerItem" key={i}>
                  {el.hour}
                  <span>{el.abv}</span>
                </li>
              ))}
            </ul>
          </div>
        </GlideInLeft>
        <GlideInRight>
          <div className="right">
            <GlowSpot className={"glowContainer glowBannerImg"} />
            <div className="bgTypeWriterWrapper">
              <p className="typewriter">
                Igniting a Revolution in HR Innovation
              </p>
              <img src={underline} alt="" className="underline" />
            </div>
            <figure>
              <img src={banner2} alt="a man wearing a 3D controller" />
              <img
                src={banner2b}
                alt="an oval item behind the man"
                className="bannerunderlappingImage"
              />
            </figure>
          </div>
        </GlideInRight>
      </div>
    </section>
  );
};

export default BackgroundImageWrapper;
