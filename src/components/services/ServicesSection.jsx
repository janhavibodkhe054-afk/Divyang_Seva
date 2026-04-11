import React from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiBookOpen,
  FiActivity,
  FiUsers,
  FiMessageCircle,
  FiTruck,
  FiHome,
} from "react-icons/fi";

const services = [
  {
    title: "Rehabilitation Support",
    image:
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7",
    desc: "Therapy, counseling and mobility rehabilitation support.",
  },
  {
    title: "Education Assistance",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    desc: "Inclusive learning resources and skill development programs.",
  },
  {
    title: "Medical Camps",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    desc: "Health checkups, doctor consultations and medical guidance.",
  },
  {
    title: "Wheelchair Support",
    image:
      "https://images.unsplash.com/photo-1576765607924-8b1a5c6d55d1",
    desc: "Providing wheelchairs and mobility aids to the needy.",
  },
  {
    title: "Home Care Assistance",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    desc: "Support services for families and home-based care.",
  },
  {
    title: "Community Awareness",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desc: "Social awareness drives and inclusion initiatives.",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-14 sm:py-16 md:py-20 bg-[#faf8f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-[#d84a3d] font-semibold">
            Our Services
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Support That Changes Lives
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-7 text-sm sm:text-base">
            We provide compassionate services designed to support differently-abled
            individuals with dignity, mobility, health and independence.
          </p>
        </div>

        {/* Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-white rounded-[24px] overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="h-[160px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm leading-6">
                  {service.desc}
                </p>

                <a
                  href={`https://wa.me/919370302804?text=${encodeURIComponent(
                    `Hello, I need support for ${service.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm bg-[#d84a3d] text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition"
                >
                  <FiMessageCircle />
                  Contact Support
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;