import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const FounderMessage = () => {
  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-gray-100 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,420px)_1fr] gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* LEFT IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            {/* Accent border */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-full h-full border border-[#d84a3d]/20 rounded-[30px] sm:rounded-[40px]"></div>

            <img
              src="/img37.jpeg"
              alt="Founder"
              className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            
            
          </motion.div>

          {/* RIGHT MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative text-center lg:text-left mt-8 lg:mt-0"
          >
            {/* Quote icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-[#d84a3d]/10 text-[#d84a3d] text-2xl sm:text-3xl flex items-center justify-center mb-5 sm:mb-6 shadow-sm mx-auto lg:mx-0">
              <FaQuoteLeft />
            </div>

            <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm font-semibold text-[#d84a3d]">
              Founder’s Message
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight">
              A Vision Built On Care, Dignity & Hope
            </h2>

            <p className="text-gray-600 mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
              At Divyang Seva Foundation, our journey began with a simple
              yet powerful belief — every individual deserves dignity,
              respect, and equal opportunities regardless of their abilities.
            </p>

            <p className="text-gray-600 mt-4 leading-7 sm:leading-8 text-sm sm:text-base">
              Our mission is not only to provide support but to empower lives,
              nurture confidence, and create a society where inclusion becomes
              a way of life.
            </p>

            <p className="text-gray-600 mt-4 leading-7 sm:leading-8 text-sm sm:text-base italic border-l-2 border-[#d84a3d] pl-4 sm:pl-5 text-left">
              “We do not just serve people, we stand beside them in their
              journey toward confidence, independence, and hope.”
            </p>

            {/* Signature */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-gray-900 font-semibold">
                Shaikh Ahmad Shaikh Ahmad
              </h4>
              <p className="text-gray-500 text-sm">
                Divyang Seva Foundation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;