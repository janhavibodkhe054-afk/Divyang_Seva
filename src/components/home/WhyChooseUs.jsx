import React from "react";
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Accessibility,
  GraduationCap,
  Users,
  ShieldCheck,
  Baby,
  Sparkles,
} from "lucide-react";

const reasons = [
  {
    title: "Compassionate Care",
    desc: "Providing medical, emotional, and rehabilitation support with dignity.",
    icon: <HeartHandshake size={22} />,
  },
  {
    title: "Accessibility First",
    desc: "Creating equal opportunities through inclusive infrastructure and tools.",
    icon: <Accessibility size={22} />,
  },
  {
    title: "Education & Training",
    desc: "Skill development and educational programs for independent growth.",
    icon: <GraduationCap size={22} />,
  },
  {
    title: "Community Support",
    desc: "A strong volunteer and donor network driving social change.",
    icon: <Users size={22} />,
  },
  {
    title: "Trusted Foundation",
    desc: "Transparent operations with genuine and measurable impact.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Women & Child Welfare",
    desc: "Special focus on families, children, and women empowerment.",
    icon: <Baby size={22} />,
  },
  {
    title: "Sustainable Impact",
    desc: "Long-term initiatives that uplift lives and communities.",
    icon: <Sparkles size={22} />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#fffaf5] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.2em] text-[#d84a3d] text-xs sm:text-sm font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5 sm:mb-6">
            Why People Trust <br />
            <span className="text-[#d84a3d]">
              Divyang Seva Foundation
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 max-w-xl mb-6 sm:mb-8">
            We are committed to building an inclusive society where every
            differently-abled individual receives care, support, dignity,
            and opportunities to thrive confidently.
          </p>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-2xl"
          >
            <img
              src="/chat.png"
              alt="foundation support"
              className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Glow */}
            <div className="absolute -bottom-5 -right-5 w-20 sm:w-24 h-20 sm:h-24 bg-[#d84a3d]/20 rounded-full blur-xl"></div>
          </motion.div>
        </motion.div>

        {/* RIGHT REASONS */}
        <div className="space-y-4 sm:space-y-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                x: 6,
                scale: 1.01,
              }}
              className="flex items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl border border-red-50 transition-all duration-300"
            >
              <div className="min-w-[46px] sm:min-w-[52px] h-[46px] sm:h-[52px] rounded-xl bg-[#fff1ee] text-[#d84a3d] flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 leading-6">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}