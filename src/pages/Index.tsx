import React, { useRef, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactSection from "@/components/ContactSection";
import EventGallery from "@/components/EventGallery";
import Newsletter from "@/components/Newsletter";

// Spring configuration for smooth cursor animation
const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

// Styles for the animated cursor
const cursor = {
  width: 50,
  height: 50,
  background: "radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.4))",
  borderRadius: "50%",
  position: "absolute" as const,
  pointerEvents: "none" as const,
  zIndex: 9999,
};

// Reusable hook to follow mouse pointer
const useFollowPointer = (ref: React.RefObject<HTMLDivElement>) => {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      x.set(clientX - element.offsetWidth / 2);
      y.set(clientY - element.offsetHeight / 2 + window.scrollY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, x, y]);

  return { x, y };
};

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(cursorRef);

  return (
    <div className="min-h-screen bg-black relative">
      <motion.div ref={cursorRef} style={{ ...cursor, x, y }} />
      <Hero />
      <Features />
      <ContactSection />
      <EventGallery />
      <Newsletter />
    </div>
  );
};

export default Index;