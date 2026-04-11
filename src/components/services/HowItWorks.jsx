import React from "react";
import { motion } from "framer-motion";
import {
  FiMessageCircle,
  FiFileText,
  FiSearch,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiMessageCircle />,
    title: "Contact Us",
    desc: "Reach out through WhatsApp, call, or contact form and tell us about the support required.",
  },
  {
    number: "02",
    icon: <FiFileText />,
    title: "Share Details",
    desc: "Provide beneficiary details, disability information, and location for better assistance.",
  },
  {
    number: "03",
    icon: <FiSearch />,
    title: "Review Process",
    desc: "Our team carefully reviews the request and understands the exact support needed.",
  },
  {
    number: "04",
    icon: <FiHeart />,
    title: "Support Provided",
    desc: "After verification, required support like wheelchairs, medical help, or rehabilitation is provided.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-16 md:py-10 bg-[#f9f7f6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.25em] text-sm text-[#d84a3d] font-semibold">
            How It Works
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            How To Get Help
          </h2>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-7">
            Our process is simple, transparent, and designed to ensure
            support reaches the right people quickly and efficiently.
          </p>
        </motion.div>

        {/* Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-[30px] p-6 shadow-lg border border-[#d84a3d]/10 h-full hover:shadow-xl hover:-translate-y-2 transition duration-300">
                
                {/* Number */}
                <div className="text-5xl font-bold text-[#d84a3d]/10 absolute top-4 right-5">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-[#d84a3d]/10 text-[#d84a3d] text-2xl flex items-center justify-center mb-5">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-7">
                  {step.desc}
                </p>
              </div>

              {/* Arrow connector */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-5 z-10">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md border border-[#d84a3d]/10 flex items-center justify-center text-[#d84a3d]">
                    <FiArrowRight />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/919370302804"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d84a3d] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Request Help Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;