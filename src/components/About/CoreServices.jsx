import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiBookOpen,
  FiActivity,
  FiUsers,
  FiUserPlus,
} from "react-icons/fi";

const services = [
  {
    icon: <FiHeart />,
    title: "Rehabilitation Support",
    desc: "Providing therapy, emotional care, and rehabilitation programs to help individuals regain confidence and independence.",
  },
  {
    icon: <FiBookOpen />,
    title: "Education Assistance",
    desc: "Supporting inclusive learning, educational resources, and skill development.",
  },
  {
    icon: <FiActivity />,
    title: "Medical Support",
    desc: "Healthcare guidance, medical camps, and essential assistance.",
  },
  {
    icon: <FiUsers />,
    title: "Community Awareness",
    desc: "Awareness drives and inclusion campaigns for society.",
  },
  {
    icon: <FiUserPlus />,
    title: "Volunteer Programs",
    desc: "Connecting volunteers with meaningful service opportunities.",
  },
];

const CoreServices = () => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-[#faf8f7] overflow-hidden">
      {/* background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d84a3d]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d84a3d]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.25em] text-sm text-[#d84a3d] font-semibold">
            What We Do
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            How We Support Every Ability
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
            Our services are designed to create dignity, confidence and equal
            opportunities for every individual.
          </p>
        </motion.div>

        {/* Service Flow */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* connector line desktop */}
              {index !== services.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-6 h-[2px] bg-[#d84a3d]/20"></div>
              )}

              <div className="bg-white rounded-[28px] p-6 shadow-lg border border-[#d84a3d]/10 hover:shadow-xl hover:-translate-y-2 transition duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#d84a3d]/10 text-[#d84a3d] flex items-center justify-center text-2xl mx-auto">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 text-center mt-5">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 text-center leading-7 mt-3">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;