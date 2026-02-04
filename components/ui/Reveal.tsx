"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
  width = "100%",
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

    // Reduced distances to prevent overflowing on mobile
    if (direction === "up") variants.hidden.y = 50;
    if (direction === "down") variants.hidden.y = -50;

    // On mobile, horizontal animations can cause overflow issues.
    // We'll use smaller values or stick to vertical where possible via CSS classes in usage,
    // but here we reduce the offset significantly.
    if (direction === "left") variants.hidden.x = 20;
    if (direction === "right") variants.hidden.x = -20;

    if (blur) variants.hidden.filter = "blur(10px)";
    variants.visible.filter = "blur(0px)";

    return variants;
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "visible" }}
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
