import React from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiHeart,
  FiAward,
  FiActivity,
} from "react-icons/fi";

const workStats = [
  {
    icon: <FiUsers size={28} />,
    count: "500+",
    label: "Lives Supported",
  },
  {
    icon: <FiHeart size={28} />,
    count: "120+",
    label: "Medical Camps",
  },
  {
    icon: <FiAward size={28} />,
    count: "80+",
    label: "Skill Programs",
  },
  {
    icon: <FiActivity size={28} />,
    count: "50+",
    label: "Awareness Drives",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

const OurWorkHero = () => {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[700px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8 }}
        src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
        alt="our work"
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#d84a3d]/30 to-yellow-500/20"></div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-20 sm:pt-24 md:pt-28 text-center text-white">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="uppercase tracking-[0.3em] text-xs sm:text-sm text-yellow-300"
        >
          Our Work
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight"
        >
          Transforming Lives <br />
          Through Compassion & Care
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="mt-5 max-w-3xl mx-auto text-white/85 text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-2"
        >
          Empowering differently-abled individuals through healthcare,
          rehabilitation, education, and community support initiatives.
        </motion.p>
      </div>

      {/* FLOATING COUNTER BOXES */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mt-10 sm:mt-14 lg:mt-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {workStats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className={`rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md border border-white/10 transition-all ${
                index === 1
                  ? "bg-[#d84a3d] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-4 ${
                  index === 1
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {item.icon}
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold">
                {item.count}
              </h2>

              <p
                className={`mt-2 text-xs sm:text-sm leading-5 ${
                  index === 1 ? "text-white/90" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkHero;