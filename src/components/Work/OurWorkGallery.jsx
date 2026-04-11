import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiUsers, FiAward, FiActivity, FiSmile } from "react-icons/fi";

const titles = [
  "Medical Assistance Camp",
  "Wheelchair Distribution",
  "Skill Training",
  "Awareness Drive",
  "Education Support",
  "Rehabilitation Program",
  "Community Outreach",
  "Mobility Aid Support",
  "Counselling Sessions",
  "Child Care Program",
  "Volunteer Activities",
  "Healthcare Checkup",
  "Employment Guidance",
  "Inclusive Events",
  "Support Distribution",
];

const descriptions = [
  "Providing healthcare and mobility support.",
  "Helping individuals regain independence.",
  "Empowering through vocational education.",
  "Creating inclusive social awareness.",
  "Scholarships and study material support.",
  "Therapy and emotional care sessions.",
  "Connecting families with support systems.",
  "Providing crutches and wheelchairs.",
  "Mental and emotional wellbeing support.",
  "Support for differently-abled children.",
  "Community volunteering and field support.",
  "Regular health camps and screenings.",
  "Helping individuals build careers.",
  "Celebrating ability and inclusion.",
  "Distributing essentials and resources.",
];

const icons = [
  <FiHeart size={20} />,
  <FiUsers size={20} />,
  <FiAward size={20} />,
  <FiActivity size={20} />,
  <FiSmile size={20} />,
];

const workPhotos = Array.from({ length: 72 }, (_, index) => ({
  image: `/img${index + 1}.jpeg`,
  title: titles[index % titles.length],
  desc: descriptions[index % descriptions.length],
  icon: icons[index % icons.length],
}));

const OurWorkGallery = () => {
  return (
    <div>
      <section className="w-full bg-[#fafafa] py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-[#d84a3d] font-semibold">
              Our Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Stories of Support & Empowerment
            </h2>

            <p className="max-w-3xl mx-auto mt-4 text-gray-600 leading-8">
              Every image reflects our commitment towards differently-abled
              individuals and inclusive community support.
            </p>
          </motion.div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workPhotos.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: (index % 3) * 0.08,
                }}
                className="group relative rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="h-[360px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-6 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#d84a3d] flex items-center justify-center mb-4 shadow-lg">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="text-sm text-white/80 mt-2 leading-6">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[200px] md:min-h-[200px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/imgbg.jpg"
          alt="support"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 md:py-16 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Left Content */}
          <div className="text-white flex-1 text-center md:text-left">
            <p className="uppercase tracking-[0.25em] text-[11px] sm:text-xs text-yellow-300 font-medium mb-1">
              Need Support?
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
              Contact Us For Help & Volunteering
            </h2>

            <p className="text-white/85 mt-1 text-xs sm:text-sm md:text-base leading-5 max-w-xl mx-auto md:mx-0">
              Reach out for donation support, volunteering, or urgent help.
            </p>
          </div>

          {/* Buttons */}
          {/* Buttons */}
          <div className="w-full md:w-auto">
            <div className="flex flex-wrap justify-center items-center gap-3">
              <a
                href="tel:+919370302804"
                className="px-4 sm:px-5 py-2 rounded-full min-w-[110px] text-center bg-white text-black text-sm font-semibold hover:scale-105 transition"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919370302804"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-2 rounded-full min-w-[110px] text-center bg-[#d84a3d] text-white text-sm font-semibold hover:scale-105 transition"
              >
                WhatsApp
              </a>

              <a
                href="/contact"
                className="px-4 sm:px-5 py-2 rounded-full min-w-[110px] text-center border border-white text-white text-sm font-semibold hover:bg-white hover:text-[#d84a3d] transition"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkGallery;
