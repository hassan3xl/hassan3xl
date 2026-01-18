"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
}

export const Reveal = ({
  children,
  width = "fit-content",
  className = "",
  delay = 0.25,
  duration = 0.5,
  direction = "up",
  blur = true,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    const variants: any = {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    };

    if (direction === "up") variants.hidden.y = 75;
    if (direction === "down") variants.hidden.y = -75;
    if (direction === "left") variants.hidden.x = 75;
    if (direction === "right") variants.hidden.x = -75;

    if (blur) variants.hidden.filter = "blur(10px)";
    variants.visible.filter = "blur(0px)";

    return variants;
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={className}
    >
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
