import React from "react";
import { FiHeart, FiUsers, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="w-full bg-[#f8f8f8] relative pb-12 md:pb-20">
      {/* FULL WIDTH DARK SECTION */}
      <div className="w-full bg-[#2f3640] relative min-h-auto md:min-h-[450px]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-10 md:py-20 relative">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-white text-center md:text-left">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#d84a3d] mb-3">
              About Foundation
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              About Us
            </h2>

            <p className="mt-4 text-white/80 leading-6 md:leading-7 text-sm md:text-base">
              We are dedicated to empowering differently-abled individuals
              through care, education, rehabilitation, and community support.
              Our mission is to create dignity, confidence, and equal
              opportunities for every life we touch.
            </p>
          </div>

          {/* MOBILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mt-8 mx-auto w-[240px] sm:w-[280px] h-[300px] sm:h-[360px] 
                       rounded-t-[140px] rounded-b-[20px] overflow-hidden border-[5px] 
                       border-white shadow-2xl md:hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7"
              alt="about us"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* DESKTOP IMAGE (UNCHANGED) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:block absolute right-4 md:right-10 top-20 md:top-20 
                       w-[280px] sm:w-[320px] md:w-[380px] 
                       h-[400px] sm:h-[460px] md:h-[700px] 
                       rounded-t-[180px] rounded-b-[20px] 
                       overflow-hidden border-[6px] border-white shadow-2xl z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7"
              alt="about us"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* WHITE INFO CARD */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-30 mt-6 md:-mt-16 md:mr-40">
        <div className="bg-[#f8f8f8] rounded-[30px] px-5 sm:px-6 md:px-14 py-8 md:py-14 md:mr-[380px] shadow-sm">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
            Our Mission
          </h3>

          <p className="text-gray-600 mt-4 leading-7 text-sm md:text-base text-center md:text-left">
            We work towards building an inclusive society where differently
            abled individuals receive the support, skills, and respect they
            deserve to live independently and confidently.
          </p>

          {/* ICON BLOCKS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#d84a3d]/10 text-[#d84a3d] flex items-center justify-center text-2xl">
                <FiHeart />
              </div>
              <h4 className="font-semibold mt-3">Care & Support</h4>
              <p className="text-sm text-gray-500 mt-1">
                Compassionate assistance
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#d84a3d]/10 text-[#d84a3d] flex items-center justify-center text-2xl">
                <FiUsers />
              </div>
              <h4 className="font-semibold mt-3">Community Help</h4>
              <p className="text-sm text-gray-500 mt-1">
                Together we grow stronger
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#d84a3d]/10 text-[#d84a3d] flex items-center justify-center text-2xl">
                <FiAward />
              </div>
              <h4 className="font-semibold mt-3">Empowerment</h4>
              <p className="text-sm text-gray-500 mt-1">
                Skills & confidence building
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;