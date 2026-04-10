import React from "react";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const services = [
  {
    title: "Education Support",
    desc: "We provide educational resources, learning support, and inclusive opportunities to help differently-abled children and underprivileged students build a brighter future.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600",
  },
  {
    title: "Medical Aid",
    desc: "Our foundation offers medical assistance, rehabilitation services, health camps, and essential support to improve the well-being of individuals in need.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
  },
  {
    title: "Food & Shelter",
    desc: "We ensure access to nutritious meals, safe shelter, and daily essentials for vulnerable families and differently-abled individuals facing hardships.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600",
  },
  {
    title: "Women Empowerment",
    desc: "Through skill development, financial support, and employment opportunities, we empower women to become independent and confident members of society.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600",
  },
];

  return (
    <section className="relative pt-20 pb-20 bg-[#f8f5f0]">
      {/* Black Top Section */}
      <div className="w-full bg-[#111111] px-8 md:px-12 pt-12 pb-78">
        <div className="max-w-7xl mx-auto">
          
          {/* TOP HEADER */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-[#d84a3d] text-sm uppercase tracking-[0.2em] mb-2">
                Our Services
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
                We Help Poor This Life’s <br />
                Service Now
              </h2>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <div className="w-20 h-[2px] bg-gray-500"></div>
              <div className="w-20 h-[2px] bg-gray-500"></div>
              <div className="flex gap-2 ml-4">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERLAP CARDS */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 -mt-70 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white overflow-hidden shadow-2xl"
            >
              {/* Top white content */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {service.desc}
                </p>
              </div>

              {/* Circle Hook */}
              <div className="flex justify-center -mb-4 relative z-10">
                <div className="w-10 h-10 bg-[#111111] rounded-full border-4 border-white"></div>
              </div>

              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;