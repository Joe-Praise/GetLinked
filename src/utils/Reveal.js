import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.5,
          delay: 1.2,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#fe34bb8a",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export const GlideInLeft = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  // const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // fire the animation
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -75,
            y: 75,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.3,
          delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const GlideInRight = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -75,
            x: 75,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1.3,
          delay: 0.3,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
