import React, { useContext } from "react";
import { AppData } from "../Context";
import { textEnter, textLeave } from "../utils/TextHoverController";

const BrightStar = ({ top, left, right, bottom, image, size, className }) => {
  const ctx = useContext(AppData);
  const [, setCursorVariant] = ctx.getCursorVariant;
  const style = {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    width: size,
    height: size,
    // transform: "translate(-50%, -50%)",
    position: "absolute",
  };
  return (
    <img
      src={image}
      alt="star"
      style={style}
      onMouseEnter={() => textEnter(setCursorVariant, "star")}
      onMouseLeave={() => textLeave(setCursorVariant, "default")}
      className={`${className}`}
    />
  );
};

export default BrightStar;
