import React, { useContext, useEffect } from "react";
import { AppData } from "../Context";
import { motion } from "framer-motion";

const CustomCursor = ({ children }) => {
  const ctx = useContext(AppData);
  const [mousePosition, setMousePosition] = ctx.getMousePosition;
  const [cursorVariant] = ctx.getCursorVariant;

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [setMousePosition]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      height: 150,
      width: 150,
      backgroundColor: "#903aff",
      mixBlendMode: "screen",
    },
    link: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      backgroundColor: "#603aff",
      mixBlendMode: "screen",
    },
    star: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: "#903aff",
      mixBlendMode: "screen",
    },
  };
  return (
    <div>
      {children}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default CustomCursor;
