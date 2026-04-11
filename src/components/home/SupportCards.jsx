import React from "react";
import { FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

const SupportCards = () => {
  const cards = [
    {
      title: "Empowering Every Ability",
      image:
        "https://www.mmpc.in/wp-content/uploads/2023/06/diffrently-able-img3.jpg",
      bg: "bg-white",
      animation: { x: -60, y: 40 },
      layout: "top-text",
    },
    {
      title: "Become A Volunteer",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500",
      bg: "bg-[#D8A13B]",
      textColor: "text-white",
      animation: { x: 0, y: 40 },
      layout: "bottom-text",
    },
    {
      title: "Help Build Better Lives",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500",
      bg: "bg-white",
      animation: { x: 60, y: 40 },
      layout: "top-text",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: card.animation.x,
                y: card.animation.y,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`rounded-3xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 ${card.bg}`}
            >
              {card.layout === "top-text" ? (
                <>
                  {/* Top Text */}
                  <div className="relative text-center h-[120px] sm:h-[140px] flex items-center justify-center px-4 bg-white">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 max-w-[220px] leading-snug z-10">
                      {card.title}
                    </h3>

                    {/* FIXED ICON */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] sm:bottom-[-22px] z-30"
                    >
                      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#d84a3d] text-white flex items-center justify-center shadow-xl border-4 border-white">
                        <FiHeart size={18} />
                      </button>
                    </motion.div>

                    <div className="absolute bottom-0 left-0 w-full h-8 bg-white rounded-t-[100%]"></div>
                  </div>

                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[240px] sm:h-[260px] lg:h-[300px] object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image */}
                  <div className="relative overflow-visible">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[240px] sm:h-[260px] lg:h-[300px] object-cover transition duration-500 hover:scale-110"
                    />

                    {/* FIXED ICON */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] sm:bottom-[-22px] z-30"
                    >
                      <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-xl border-4 border-white">
                        <FiHeart size={18} />
                      </button>
                    </motion.div>
                  </div>

                  {/* Bottom Text */}
                  <div className="relative h-[110px] sm:h-[120px] flex items-center justify-center px-4 text-center bg-[#D8A13B]">
                    <h3 className="text-lg sm:text-xl font-semibold text-white max-w-[220px] leading-snug z-10">
                      {card.title}
                    </h3>

                    <div className="absolute top-0 left-0 w-full h-8 bg-[#D8A13B] rounded-b-[100%]"></div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className=""
        >
          <div className="relative overflow-hidden rounded-[28px] px-6 sm:px-10 py-10 sm:py-12">
            {/* Decorative glow */}
            <div className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 text-center">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg italic max-w-3xl mx-auto leading-relaxed">
                Together, we empower differently-abled lives through support,
                education, healthcare, and opportunities for independent living.
              </p>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="mt-7 inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-[#d84a3d] px-8 sm:px-10 py-3.5 text-white font-semibold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300"
              >
                <FiHeart size={18} /> Support Our Mission
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportCards;
