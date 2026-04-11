import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Volunteer",
    review:
      "Divyang Seva Foundation has truly transformed lives through rehabilitation and inclusive support.",
  },
  {
    name: "Rahul Patil",
    role: "Donor",
    review:
      "Their dedication and transparency make them one of the most trustworthy NGOs I have supported.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Beneficiary Family",
    review:
      "The support we received gave our family hope, confidence, and dignity.",
  },
  {
    name: "Amit Deshmukh",
    role: "Volunteer",
    review:
      "Working with the foundation has been inspiring. Their service towards Divyang individuals is exceptional.",
  },
  {
    name: "Pooja Joshi",
    role: "Supporter",
    review:
      "They genuinely care for every life they touch and provide real help where it matters.",
  },
  {
    name: "Neha Patil",
    role: "Community Member",
    review:
      "Their wheelchair and rehabilitation support has changed many lives in our area.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 sm:py-20 bg-[#fffaf5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="uppercase tracking-[0.2em] text-[#d84a3d] text-sm font-semibold mb-3">
            Testimonials
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What People Say About Us
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
            Hear from volunteers, donors, and families whose lives
            have been touched by Divyang Seva Foundation.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex gap-6 w-max"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[320px] sm:w-[350px] bg-white rounded-[24px] p-6 shadow-lg border border-red-50 flex flex-col justify-between min-h-[240px]"
              >
                {/* Quote */}
                <div className="text-[#d84a3d]/15 mb-4">
                  <Quote size={34} />
                </div>

                {/* Review */}
                <p className="text-gray-600 leading-7 text-sm sm:text-base flex-grow">
                  "{item.review}"
                </p>

                {/* Fixed Bottom Name */}
                <div className="pt-6 border-t border-gray-100 mt-6">
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm text-[#d84a3d]">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}