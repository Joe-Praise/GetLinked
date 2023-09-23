import React, { useContext } from "react";
import { AppData } from "../Context";
import { textEnter, textLeave } from "../utils/TextHoverController";

const RegisterBtn = ({ value, className, size, onClick, disable }) => {
  const ctx = useContext(AppData);
  const [, setCursorVariant] = ctx.getCursorVariant;
  const style = {
    width: size,
  };
  return (
    <button
      className={className}
      style={style}
      onMouseEnter={() => textEnter(setCursorVariant, "link")}
      onMouseLeave={() => textLeave(setCursorVariant, "default")}
      onClick={onClick}
      disabled={disable}
    >
      {value}
    </button>
  );
};

export default RegisterBtn;
