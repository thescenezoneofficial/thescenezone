import React, { RefObject, useEffect, useRef } from "react";
import { motion, useSpring, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import mic from "@/assets/mic.png";
import hostbanner from "@/assets/hostbanner.png";
import img1 from "@/assets/img1.png";
import img2 from "@/assets/img2.png";
import img3 from "@/assets/img3.png";
import img4 from "@/assets/img4.png";
import img5 from "@/assets/img5.png";
import gallery from "@/assets/gallery.png";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import applestore from "@/assets/icons/applestore.png";
import playstore from "@/assets/icons/playstore.png";
import {
  Wrench,
  Zap,
  DollarSign,
  Search,
  CalendarPlus,
  Handshake,
} from "lucide-react";
import { FaBullseye, FaChartBar, FaChartLine } from "react-icons/fa";

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

const cursor = {
  width: 50,
  height: 50,
  background:
    "radial-gradient(circle, rgba(147, 51, 234, 0.8), rgba(236, 72, 153, 0.4))",
  borderRadius: "50%",
  position: "absolute" as const,
  pointerEvents: "none" as const,
  zIndex: 9999,
};

const useFollowPointer = (ref: RefObject<HTMLDivElement>) => {
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

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
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
const Host = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(cursorRef);

  const features = [
    {
      icon: <FaBullseye className="w-6 h-6 text-white" />,
      title: "Tools Tailored for Event Creators",
      description:
        "Comprehensive event management tools designed specifically for event creators and hosts.",
    },
    {
      icon: <FaChartBar className="w-6 h-6 text-white" />,
      title: "All-In-One Dashboard",
      description:
        "Control every aspect of your event from one central, intuitive dashboard interface.",
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-white" />,
      title: "Advanced Reporting & Analytics in One Place",
      description:
        "Get detailed insights and analytics to optimize your events and maximize success.",
    },
  ];

  const events = [
    {
      date: "14 DEC 2024",
      title: "Neon Jazz Night",
      venue: "Blue Moon",
      image: gallery,
    },
    {
      date: "18 DEC 2024",
      title: "Electric Rock Fest",
      venue: "Thunder Hall",
      image: gallery1,
    },
    {
      date: "22 DEC 2024",
      title: "Underground Hip Hop",
      venue: "Urban Beat",
      image: gallery2,
    },
    {
      date: "28 DEC 2024",
      title: "Synth Pop Showcase",
      venue: "Retro Club",
      image: gallery3,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <motion.div ref={cursorRef} style={{ ...cursor, x, y }} />

      <motion.section
        className="py-20 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        {/* Hero content here */}

        <section className="py-20 bg-black relative overflow-hidden">
          <div className="container mx-auto px-4 z-10 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <p className="text-sm text-gray-400 tracking-widest uppercase">
                  DISRUPTING LIVE ENTERTAINMENT
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  YOUR STAGE AWAITS – START <br />
                  <span className="text-white">HOSTING TODAY</span>
                </h1>
                <p className="text-gray-300 text-base max-w-md">
                  Bring your vision to life – start hosting events in minutes.
                </p>
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
              </div>
              <div className="relative flex justify-center items-center animate-scale-in">
                <div className="w-83 h-83 relative">
                  <img
                    src={mic}
                    alt="Musical Note Design"
                    className="w-full h-full object-contain animate-pulse"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 w-full">
            <img
              src={hostbanner}
              alt="Audience Silhouette"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </motion.section>

      <motion.section
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            variants={fadeInVariant}
            custom={0.2}
          >
            Why Host With Us?
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg mb-12 max-w-4xl mx-auto"
            variants={fadeInVariant}
            custom={0.4}
          >
            Create and share your existing live content with the world. Add them
            to existing events, or build your own dream lineup. All with
            advanced filters and smart recommendation systems.
          </motion.p>

          <motion.div className="space-y-6 mb-12">
            {[Wrench, Zap, DollarSign].map((Icon, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-4"
                variants={fadeInVariant}
                custom={0.6 + index * 0.2}
              >
                <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <p className="text-white text-lg">
                  {index === 0 &&
                    "Access Powerful Tools And A Passionate Community."}
                  {index === 1 &&
                    "Flexible Options, Quick Setup, And Full Control Over Your Events."}
                  {index === 2 &&
                    "Earn Revenue, Grow Your Brand, And Connect With Your Audience."}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInVariant} custom={1.2}>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
              Sign up as a host →
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-10"
            variants={fadeInVariant}
            custom={0.2}
          >
            Meet the Artists
          </motion.h2>

          <motion.div
            className="relative overflow-hidden w-full max-w-4xl mx-auto"
            variants={fadeInVariant}
            custom={0.4}
          >
            <div className="flex animate-infinite-scroll">
              {[
                { name: "Johney Deo", img: img1 },
                { name: "Liam Carter", img: img2 },
                { name: "Emma Thompson", img: img3 },
                { name: "Noah Johnson", img: img4 },
                { name: "Olivia Brown", img: img5 },
                { name: "Johney Deo", img: img1 },
                { name: "Liam Carter", img: img2 },
                { name: "Emma Thompson", img: img3 },
                { name: "Noah Johnson", img: img4 },
                { name: "Olivia Brown", img: img5 },
              ].map((artist, index) => (
                <motion.div
                  key={index}
                  className="w-[200px] text-center flex-shrink-0 px-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative w-[160px] h-[160px] rounded-full overflow-hidden mx-auto shadow-lg">
                    <img
                      src={artist.img}
                      alt={artist.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-4 text-white font-bold text-lg">
                    {artist.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <style>{`
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-infinite-scroll {
            width: max-content;
            animation: infinite-scroll 30s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            variants={fadeInVariant}
            custom={0.2}
          >
            How It Works?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-white" />,
                title: "Search Event",
                description:
                  "Browse events tailored to your interests using powerful filters and tags.",
                delay: 0.3,
              },
              {
                icon: <CalendarPlus className="w-8 h-8 text-white" />,
                title: "Create Events",
                description:
                  "Set up your event quickly with tools that offer full flexibility and control.",
                delay: 0.5,
              },
              {
                icon: <Handshake className="w-8 h-8 text-white" />,
                title: "Book and Connect",
                description:
                  "Connect with artists and manage every aspect of your booking seamlessly.",
                delay: 0.7,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                custom={step.delay}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-200">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInVariant}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            variants={fadeInVariant}
            custom={0.2}
          >
            Features For Hosts
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group transition-transform duration-300 transform"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                custom={index * 0.2}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="p-[2px] h-full rounded-xl bg-gradient-to-b from-[#CC5500] via-[#663300] to-[#331A00] group-hover:bg-gradient-to-b group-hover:from-purple-600 group-hover:via-purple-500 group-hover:to-pink-600">
                  <div className="bg-[#0A060F] rounded-xl p-8 h-[340px] flex flex-col justify-between text-left">
                    <div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                        {feature.icon}
                      </div>
                      <h3 className="text-white text-lg font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInVariant}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            custom={0.2}
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                className="cursor-pointer"
                custom={index * 0.1}
                variants={fadeInVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-semibold">
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-black/90">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-purple-400">{event.venue}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Host;
