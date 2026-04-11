import React from "react";
import { HeartHandshake, Accessibility } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HandicapSection = () => {
  const navigate = useNavigate();

  const supportCards = [
    {
      title: "Rehabilitation & Wellness",
      desc: "We provide physical rehabilitation and healthcare assistance to help differently-abled individuals lead independent and confident lives.",
      icon: <HeartHandshake size={24} />,
      image:
        "/gallery1.jpg",
    },
    {
      title: "Accessibility & Inclusion",
      desc: "Our mission is to create inclusive spaces through assistive devices and equal opportunities in education and employment.",
      icon: <Accessibility size={24} />,
      image:
        "/bg.jpg",
    },
  ];

  return (
    <section className="bg-[#faf6f0] py-16 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8b5e3c] mb-3 font-medium">
              About Divyang Seva Foundation
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Building a More{" "}
              <span className="text-[#d84a3d]">
                Inclusive & Empowered Society
              </span>
            </h2>

            <p className="text-gray-600 mt-5 mb-6 leading-relaxed text-sm sm:text-base md:text-lg max-w-xl">
              At Divyang Seva Foundation, we are deeply committed to transforming
              the lives of differently-abled individuals by providing support,
              dignity, and opportunities they truly deserve.
            </p>

            {/* CARDS */}
            <div className="space-y-5">
              {supportCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{
                    scale: 1.01,
                    y: -3,
                  }}
                  className="relative min-h-[150px] sm:h-[150px] rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/60" />

                  {/* ICON PANEL */}
                  <div className="absolute left-0 top-0 h-full w-16 sm:w-20 bg-[#d84a3d] flex items-center justify-center text-white z-20 shadow-lg">
                    {card.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex items-center pl-20 sm:pl-24 pr-4 sm:pr-5 z-10">
                    <div className="text-white">
                      <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-2">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BUTTON */}
            <motion.button
              onClick={() => navigate("/about")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-[#d84a3d] text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-[#bf3e33] transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex justify-center mt-8 lg:mt-0"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[28px] p-2 bg-white border border-[#f0d8d2] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <img
                src="/gallery1.jpg"
                alt="support"
                className="rounded-[24px] object-cover w-full max-w-sm sm:max-w-md lg:max-w-lg h-[420px] sm:h-[500px] lg:h-[560px]"
              />

              <div className="absolute inset-0 rounded-[28px] border-2 border-[#d84a3d]/20 pointer-events-none"></div>
            </motion.div>

            {/* FLOATING IMAGE */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.4 }}
              className="absolute -bottom-4 left-4 sm:left-6 w-20 h-20 sm:w-28 sm:h-28 md:w-42 md:h-42 rounded-full border-[5px] border-white overflow-hidden shadow-2xl"
            >
              <img
                src="logo.jpeg"
                alt="beneficiary"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* DECORATIVE CIRCLE */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-[#d84a3d]/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HandicapSection;