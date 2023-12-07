import React, { useContext, useEffect, useState } from "react";
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
import { TypewriterEffect } from "./TextGenerate";
import { useNavigate } from "react-router-dom";

const BackgroundImageWrapper = () => {
  const ctx = useContext(AppData);
  const navigate = useNavigate();
  const [, setCursorVariant] = ctx.getCursorVariant;
  const { days, hours, minutes, seconds } = Timer("2024-12-31T10:12:50.5000z");

  const time = [
    { hour: hours, abv: "H" },
    { hour: minutes, abv: "M" },
    { hour: seconds, abv: "S" },
  ];

  const navigateRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <section style={{ borderBottom: "1px solid #ffffff23" }}>
      <div className="bannerSection">
        <div className="typeWriterWrapper">
          <div className="typewriter">
            <TypewriterEffect />
          </div>
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
                onClick={navigateRegister}
                value={"Register"}
                className={"Register"}
                size={"9rem"}
              />
            </div>
            <ul className="timer">
              {time.map((el, i) => (
                <li className="timerItem" key={i}>
                  {Number(el.hour)}
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
              <div className="typewriter">
                <TypewriterEffect />
              </div>
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

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function Timer(deadline, interval = SECOND) {
  const [timespan, setTimespan] = useState(new Date(deadline) - Date.now());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimespan(new Date(deadline) - Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline, interval]);

  return {
    days: Math.floor(timespan / DAY),
    hours: Math.floor((timespan / HOUR) % 24),
    minutes: Math.floor((timespan / MINUTE) % 60),
    seconds: Math.floor((timespan / SECOND) % 60),
  };
}
