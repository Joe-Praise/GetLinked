import React from "react";
import img from "../images/Purple-Lens-Flare-PNG.png";

const GlowSpot = ({ className, glowOpacity }) => {
  return (
    <figure className={`${className}`}>
      <img
        src={img}
        alt="background blur effect"
        className={`glow ${glowOpacity}`}
      />
    </figure>
  );
};

export default GlowSpot;
