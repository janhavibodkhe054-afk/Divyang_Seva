import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiAward } from "react-icons/fi";

const FoundationJourney = () => {
  return (
    <section className="relative w-full py-16 md:py-10 bg-[#111111] overflow-hidden">
      {/* Decorative glow shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/2 w-40 h-40 border border-white/10 rotate-45 rounded-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.25em] text-sm font-semibold text-[#d84a3d]">
              Why We Exist
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
              Building Hope, Dignity & Independence
            </h2>

            <p className="text-white/75 mt-6 leading-8 text-sm md:text-base">
              Divyang Seva Foundation is dedicated to creating a more inclusive
              and supportive society for differently-abled individuals. Our
              purpose is to empower every life with respect, compassion, and
              meaningful opportunities.
            </p>

            <p className="text-white/75 mt-4 leading-8 text-sm md:text-base">
              Through rehabilitation, education, healthcare support, and
              community-driven initiatives, we help individuals and their
              families build stronger, independent, and hopeful futures.
            </p>

            {/* Points */}
            <div className="space-y-5 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#d84a3d]/15 text-[#d84a3d] flex items-center justify-center text-xl">
                  <FiHeart />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Compassionate Care
                  </h4>
                  <p className="text-sm text-white/65 mt-1">
                    Dedicated medical, emotional, and rehabilitation support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#d84a3d]/15 text-[#d84a3d] flex items-center justify-center text-xl">
                  <FiUsers />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Inclusive Community
                  </h4>
                  <p className="text-sm text-white/65 mt-1">
                    Building equality, dignity, and belonging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#d84a3d]/15 text-[#d84a3d] flex items-center justify-center text-xl">
                  <FiAward />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Empowerment Programs
                  </h4>
                  <p className="text-sm text-white/65 mt-1">
                    Skill-building and self-reliance initiatives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow background */}
            <div className="absolute -inset-4 bg-[#d84a3d]/10 rounded-[40px] blur-xl"></div>

            <img
              src="/1.png"
              alt="ngo support"
              className="relative w-full h-[420px] object-cover rounded-[40px] shadow-2xl border border-white/10"
            />

            {/* Floating stat */}
            <div className="absolute -bottom-6 right-6 bg-[#1c1c1c] border border-white/10 shadow-xl rounded-3xl px-6 py-4">
              <p className="text-sm text-white/60">Lives Impacted</p>
              <h3 className="text-2xl font-bold text-[#d84a3d]">
                1000+
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundationJourney;