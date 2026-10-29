"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Reveal component — slowly reveals content when scrolled into view.
 * Uses GSAP ScrollTrigger with a slight delay so the page feels smooth.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  yOffset = 40,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: yOffset,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
        },
      }
    );
  }, [delay, duration, yOffset]);

  return (
    <div
      ref={ref}
      className={`will-change-auto ${className}`}
    >
      {children}
    </div>
  );
}
