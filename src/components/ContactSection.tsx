import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import calling from '@/assets/icons/calling.png';
import instagram from '@/assets/icons/instagram.png';
import whatsapp from '@/assets/icons/whatsapp.png';

const ContactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
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
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-6 md:px-20">
        <motion.div
          className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl px-8 py-20"
          variants={fadeUpVariant}
          initial="hidden"
          animate={controls}
          custom={0}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left Side - Text and Contact Info */}
            <motion.div
              className="text-left w-full md:w-2/3"
              variants={fadeUpVariant}
              custom={1}
              initial="hidden"
              animate={controls}
            >
              <p className="text-sm text-pink-500 font-medium mb-2 uppercase">
                Our Event Direction
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Book An Event Now, Thrive
                <br />
                On The Zest Of Life
              </h2>

              <div className="flex items-center gap-6 mt-6 flex-wrap">
                <img src={calling} alt="Call Icon" className="w-10 h-10" />
                <div className="text-white text-sm space-y-1">
                  <p><span className="font-semibold">Apurv Anand</span></p>
                  <p><span className="font-semibold">9654551209</span></p>
                </div>
                <div className="text-white text-sm space-y-1">
                  <p><span className="font-semibold">Kanika Tanwar</span></p>
                  <p><span className="font-semibold">8130092813</span></p>
                </div>
                <div className="text-white text-sm space-y-1">
                  <p><span className="font-semibold">Raj Kumar</span></p>
                  <p><span className="font-semibold">8826078408</span></p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Social Icons */}
            <motion.div
              className="flex flex-col gap-6 w-full md:w-auto items-center"
              variants={fadeUpVariant}
              custom={2}
              initial="hidden"
              animate={controls}
            >
              <a
                href="#"
                className="w-40 h-20 border border-[#2c2c2c] rounded-lg flex items-center justify-center flex-col hover:scale-105 transition-transform duration-300"
              >
                <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mb-1" />
                <span className="text-green-400 text-sm font-medium">Whatsapp</span>
              </a>
              <a
                href="#"
                className="w-40 h-20 border border-[#2c2c2c] rounded-lg flex items-center justify-center flex-col hover:scale-105 transition-transform duration-300"
              >
                <img src={instagram} alt="Instagram" className="w-6 h-6 mb-1" />
                <span className="text-pink-500 text-sm font-medium">Instagram</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
