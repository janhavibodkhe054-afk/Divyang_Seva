import React from "react";
import { motion } from "framer-motion";

const AboutInfo = () => {
  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 bg-[#fafafa] overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>

      <div className="absolute top-1/3 right-4 sm:right-10 md:right-16 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 border-2 border-[#d84a3d]/20 rotate-45 rounded-2xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[11px] sm:text-sm font-semibold text-[#d84a3d]">
            Our Journey
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mt-3 leading-snug">
            Experience About <br className="sm:hidden" />
            Divyang Seva Foundation
          </h2>

          <div className="w-16 sm:w-20 h-1 bg-[#d84a3d] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 max-w-5xl mx-auto space-y-5 sm:space-y-6 text-center text-gray-600 text-sm sm:text-base md:text-lg leading-7 sm:leading-8"
        >
          <p>
            Divyang Seva Foundation has been continuously working towards
            building an inclusive and supportive environment for
            differently-abled individuals. Our commitment is rooted in
            compassion, dignity, and equal opportunity for every person
            we serve.
          </p>

          <p>
            Through dedicated efforts in healthcare assistance,
            rehabilitation, education, skill development, and community
            welfare, we aim to empower individuals to lead independent
            and confident lives.
          </p>

          <p>
            Our foundation believes that every individual carries unique
            strengths and abilities. By providing emotional support,
            training, resources, and opportunities, we help them unlock
            their true potential and become active contributors to society.
          </p>

          <p>
            Over the years, our experience has been shaped by countless
            stories of resilience, courage, and transformation. Every
            initiative we undertake is guided by the vision of creating a
            more accessible, respectful, and empowered future for all.
          </p>
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="h-[2px] bg-gradient-to-r from-[#d84a3d]/20 via-[#d84a3d] to-[#d84a3d]/20 mt-8 sm:mt-10 rounded-full"
        />
      </div>
    </section>
  );
};

export default AboutInfo;