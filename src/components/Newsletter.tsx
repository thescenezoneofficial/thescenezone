import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import send from "@/assets/icons/send.png";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section
      className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900"
      ref={ref}
    >
      <motion.div
        className="container mx-auto px-4 text-center"
        variants={fadeUpVariant}
        initial="hidden"
        animate={controls}
        custom={0}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          variants={fadeUpVariant}
          custom={1}
          initial="hidden"
          animate={controls}
        >
          Get Latest Updates Subscribe
          <br />
          To Our Newsletter
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto w-full bg-gradient-to-r from-purple-700 to-pink-600 p-1 rounded-full"
          variants={fadeUpVariant}
          custom={2}
          initial="hidden"
          animate={controls}
        >
          <div className="flex items-center bg-transparent rounded-full pl-6 pr-2 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-white/80 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md"
            >
              <img src={send} alt="Send" className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Newsletter;
