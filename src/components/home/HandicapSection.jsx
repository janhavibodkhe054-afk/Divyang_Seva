import React from "react";
import { HeartHandshake, Accessibility } from "lucide-react";
import { motion } from "framer-motion";

const HandicapSection = () => {
  const supportCards = [
    {
      title: "Rehabilitation & Wellness",
      desc: "We provide physical rehabilitation and healthcare assistance to help differently-abled individuals lead independent and confident lives.",
      icon: <HeartHandshake size={24} />,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    },
    {
      title: "Accessibility & Inclusion",
      desc: "Our mission is to create inclusive spaces through assistive devices and equal opportunities in education and employment.",
      icon: <Accessibility size={24} />,
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800",
    },
  ];

  return (
    <section className="bg-[#faf6f0] pt-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#8b5e3c] mb-3 font-medium">
              About Divyang Seva Foundation
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Building a More{" "}
              <span className="text-[#9b1c31]">
                Inclusive & Empowered Society
              </span>
            </h2>

            <p className="text-gray-600 mt-5 mb-6 leading-relaxed text-base md:text-lg max-w-xl">
              At Divyang Seva Foundation, we are deeply committed to transforming
              the lives of differently-abled individuals by providing support,
              dignity, and opportunities they truly deserve.
            </p>

            {/* CARDS */}
            <div className="space-y-5">
              {supportCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                  }}
                  className="relative h-[145px] rounded-2xl overflow-hidden shadow-xl"
                >
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

                  {/* Left Icon Panel */}
                  <div className="absolute left-0 top-0 h-full w-20 bg-[#d84a3d] flex items-center justify-center text-white z-20 shadow-lg">
                    {card.icon}
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center pl-24 pr-5 z-10">
                    <div className="text-white">
                      <h4 className="font-semibold text-lg md:text-xl mb-2">
                        {card.title}
                      </h4>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 bg-[#d84a3d] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#7e1628] transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: 1,
                y: -6,
              }}
              transition={{ duration: 0.4 }}
              className="relative rounded-[30px] p-2 bg-white border border-[#f0d8d2] shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200"
                alt="support"
                className="rounded-[26px] object-cover w-full max-w-md h-[560px]"
              />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-[30px] border-2 border-[#d84a3d]/20 pointer-events-none"></div>
            </motion.div>

            {/* Floating Circle Image */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              className="absolute -bottom-6 left-6 w-32 h-32 rounded-full border-[6px] border-white overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"
                alt="beneficiary"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Circle */}
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full border-2 border-[#d84a3d]/30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HandicapSection;