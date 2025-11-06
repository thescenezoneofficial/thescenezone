import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import gallery from "@/assets/gallery.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";

const EventGallery: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const eventImages = [
    { img: gallery3, colSpan: "", rowSpan: "row-span-2" },
    { img: gallery, colSpan: "", rowSpan: "row-span-1" },
    { img: gallery2, colSpan: "", rowSpan: "row-span-2" },
    { img: gallery5, colSpan: "", rowSpan: "row-span-1" },
    { img: gallery4, colSpan: "", rowSpan: "row-span-2" },
    { img: gallery6, colSpan: "", rowSpan: "row-span-1" },
    { img: gallery7, colSpan: "", rowSpan: "row-span-2" },
    { img: gallery8, colSpan: "", rowSpan: "row-span-1" },
  ];

  return (
    <section className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase text-purple-400 tracking-widest">
            Latest Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Take A Glance At Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
        </div>

        {/* Responsive Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-4 max-w-7xl mx-auto">
          {eventImages.map((item, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${item.colSpan} ${item.rowSpan}`}
              variants={imageVariants}
              initial="hidden"
              animate={controls}
              custom={index}
            >
              <img
                src={item.img}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-sm">Live Event</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
