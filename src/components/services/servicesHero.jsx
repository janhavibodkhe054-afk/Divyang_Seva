import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/heroS.webp"
        alt="services"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-[#d84a3d]/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.25em] text-xs sm:text-sm text-white font-semibold"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mt-3"
        >
          How We Support Every Ability
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-white/80 text-sm sm:text-base mt-3 max-w-2xl"
        >
          Empowering lives through care, education, rehabilitation and
          community support.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;