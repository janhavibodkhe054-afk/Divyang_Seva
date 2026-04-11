import React from "react";
import { motion } from "framer-motion";
import { FiEye, FiTarget } from "react-icons/fi";

const VisionMission = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute -top-16 left-0 w-72 h-72 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-[#d84a3d]/20 rotate-45 rounded-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.25em] text-sm text-[#d84a3d] font-semibold">
            Our Purpose
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Vision & Mission
          </h2>

          <div className="w-20 h-1 bg-[#d84a3d] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-[#fafafa] rounded-[32px] p-8 md:p-10 shadow-xl border border-[#d84a3d]/10"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#d84a3d]/10 rounded-bl-[40px] rounded-tr-[32px]"></div>

            <div className="w-14 h-14 rounded-2xl bg-[#d84a3d]/10 text-[#d84a3d] flex items-center justify-center text-2xl mb-6">
              <FiEye />
            </div>

            <h3 className="text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>

            <p className="text-gray-600 mt-4 leading-8 text-sm md:text-base">
              To build an inclusive society where every differently-abled
              individual is empowered with dignity, respect, equal
              opportunities, and the confidence to lead an independent life.
            </p>

            <p className="text-gray-600 mt-4 leading-8 text-sm md:text-base">
              We envision a future where accessibility, compassion, and
              social acceptance become a natural part of every community,
              enabling every individual to thrive.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-[#2f3640] rounded-[32px] p-8 md:p-10 shadow-xl text-white overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#d84a3d]/20 rounded-tr-[50px]"></div>

            <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#d84a3d] flex items-center justify-center text-2xl mb-6">
              <FiTarget />
            </div>

            <h3 className="text-2xl font-semibold">
              Our Mission
            </h3>

            <p className="text-white/85 mt-4 leading-8 text-sm md:text-base">
              Our mission is to support differently-abled individuals
              through healthcare assistance, rehabilitation, education,
              skill development, emotional care, and community welfare
              initiatives.
            </p>

            <p className="text-white/85 mt-4 leading-8 text-sm md:text-base">
              We are committed to nurturing confidence, independence,
              and social inclusion through sustainable and compassionate
              programs that transform lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;