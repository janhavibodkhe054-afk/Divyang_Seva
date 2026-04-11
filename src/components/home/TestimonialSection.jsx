import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Volunteer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
    review:
      "Divyang Seva Foundation has truly transformed lives. Their commitment towards care, rehabilitation, and education is deeply inspiring.",
  },
  {
    name: "Rahul Patil",
    role: "Donor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
    review:
      "I am proud to support this foundation. Their transparency, dedication, and social impact make them truly trustworthy.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Beneficiary Family",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
    review:
      "The support we received gave us hope and confidence. They treat every family with dignity and compassion.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#fffaf5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-14"
        >
          <p className="uppercase tracking-[0.2em] text-[#d84a3d] text-xs sm:text-sm font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What People Say About Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Hear from our volunteers, donors, and families whose lives
            have been touched by Divyang Seva Foundation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 lg:p-7 shadow-lg hover:shadow-2xl border border-red-50 relative transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#d84a3d]/15">
                <Quote size={34} className="sm:w-10 sm:h-10" />
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-7 mb-6 text-sm sm:text-base pr-6">
                "{item.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
                />

                <div>
                  <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#d84a3d]">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}