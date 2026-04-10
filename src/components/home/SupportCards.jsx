import React from "react";
import {
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";
import { motion } from "framer-motion";

const SupportCards = () => {
  const cards = [
    {
      title: "Empowering Every Ability",
      image:
        "https://www.mmpc.in/wp-content/uploads/2023/06/diffrently-able-img3.jpg",
      bg: "bg-white",
      animation: { x: -80, y: 80 },
      layout: "top-text",
    },
    {
      title: "Become A Volunteer",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500",
      bg: "bg-[#D8A13B]",
      textColor: "text-white",
      animation: { x: 0, y: 80 },
      layout: "bottom-text",
    },
    {
      title: "Help Build Better Lives",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500",
      bg: "bg-white",
      animation: { x: 80, y: 80 },
      layout: "top-text",
    },
  ];

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Our Mission & Support Programs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Supporting differently-abled individuals with dignity,
            empowerment, and care
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${card.bg}`}
            >
              {card.layout === "top-text" ? (
                <>
                  {/* Top Text */}
                  <div className="relative text-center h-[130px] sm:h-[150px] flex items-center justify-center px-4 bg-white">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 max-w-[220px] leading-snug z-10">
                      {card.title}
                    </h3>

                    {/* Arrow */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-22px] z-20">
                      <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
                        <FiArrowRight size={20} />
                      </button>
                    </div>

                    {/* Wavy Divider */}
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-white rounded-t-[100%]"></div>
                  </div>

                  {/* Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[270px] sm:h-[270px] lg:h-[320px] object-cover"
                  />
                </>
              ) : (
                <>
                  {/* Middle Card Image */}
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[270px] sm:h-[270px] lg:h-[320px] object-cover"
                    />

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[-22px] z-20">
                      <button className="w-12 h-12 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg hover:scale-110 transition">
                        <FiArrowRight size={20} />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="relative h-[120px] sm:h-[120px] flex items-center justify-center px-4 text-center bg-[#D8A13B]">
                    <h3 className="text-lg sm:text-xl font-semibold text-white max-w-[220px] leading-snug z-10">
                      {card.title}
                    </h3>

                    {/* Wavy Top Divider */}
                    <div className="absolute top-0 left-0 w-full h-10 bg-[#D8A13B] rounded-b-[100%]"></div>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-[28px] px-6 sm:px-10 py-10 sm:py-12">
            
            {/* Decorative glow */}
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-red-100 rounded-full blur-3xl opacity-60"></div>
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
                <FiHeart size={18} />
                Support Our Mission
                <FiArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupportCards;