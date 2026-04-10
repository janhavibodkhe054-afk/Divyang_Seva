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
    <section className="pb-24 px-6 md:px-16 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.2em] text-[#d84a3d] text-sm font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What People Say About Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our volunteers, donors, and families whose lives
            have been touched by Divyang Seva Foundation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[28px] p-7 shadow-lg hover:shadow-2xl border border-red-50 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-5 right-5 text-[#d84a3d]/20">
                <Quote size={40} />
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                "{item.review}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#d84a3d]">
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