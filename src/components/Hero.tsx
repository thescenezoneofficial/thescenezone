import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import applestore from "@/assets/icons/applestore.png";
import playstore from "@/assets/icons/playstore.png";
import homehero from "@/assets/HomeHero.png";

// Variants for staggered animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, x: -100 }, // Start 100px to the left
  visible: {
    opacity: 1,
    y: 0,
    x: 0, // Slide to original position
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="relative bg-[#0A060F] py-20 overflow-hidden" ref={ref}>
     
     
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-3xl top-10 left-10 z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 items-center relative">
          {/* Right Side Image with Right-to-Left Slide */}
          <motion.div
            className="hidden md:block absolute right-0 top-0 w-[500px] h-[600px] z-10 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={homehero}
              alt="Main singer performance"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Left Content with Left-to-Right Slide */}
          <motion.div
            className="z-20 relative space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.p
              className="text-white text-sm tracking-widest uppercase"
              variants={itemVariants}
            >
              DISRUPTING LIVE ENTERTAINMENT
            </motion.p>

            <motion.h1
              className="text-white font-bold text-5xl md:text-6xl leading-tight"
              variants={itemVariants}
            >
              GET GIGS,
              <br />
              BOOK ARTISTS,
              <br />
              ENTER TICKET GUESTLISTS
            </motion.h1>

            <motion.div
              className="text-gray-300 text-base md:text-lg space-y-2 max-w-lg"
              variants={itemVariants}
            >
              <p>
                Imagine being able to book the best live band or DJ for your
                next party or event.
              </p>
              <p>
                Imagine being able to find the best live music happening near
                you–anytime, anywhere.
              </p>
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <p className="text-white font-semibold text-sm md:text-base mb-2">
                DOWNLOAD APP NOW
              </p>
              <div className="flex items-center space-x-4">
                <motion.a
                  href="https://www.apple.com/app-store/" // Replace with actual App Store URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={applestore}
                    alt="App Store"
                    className="h-12 w-auto object-contain cursor-pointer"
                  />
                </motion.a>
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.gigvala.scenezone&pcampaignid=web_share" // Replace with actual Google Play URL
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={playstore}
                    alt="Google Play"
                    className="h-12 w-auto object-contain cursor-pointer"
                  />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
