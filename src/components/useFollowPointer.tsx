"use client"; // For Next.js client-side component

import { motion, useSpring } from "framer-motion"; // Correct import
import { RefObject, useEffect, useRef } from "react";

// Define the spring configuration
const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

// Styles for the ball
const ball = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: "50%",
  position: "absolute" as const, // Added for proper positioning
};

export function useFollowPointer(ref: RefObject<HTMLDivElement>) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      // Directly update spring values without frame.read
      x.set(clientX - element.offsetWidth / 2);
      y.set(clientY - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]); // Added dependencies

  return { x, y };
}

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return <motion.div ref={ref} style={{ ...ball, x, y }} />;
}