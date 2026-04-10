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
    <section className="py-24 px-6 md:px-16 bg-[#fffaf5] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SECTION */}
        <div>
          <p className="uppercase tracking-[0.2em] text-[#d84a3d] text-sm font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Why People Trust <br />
            <span className="text-[#d84a3d]">
              Divyang Seva Foundation
            </span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
            We are committed to building an inclusive society where every
            differently-abled individual receives care, support, dignity,
            and opportunities to thrive confidently.
          </p>

          {/* IMAGE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-[30px] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1000"
              alt="foundation support"
              className="w-full h-[420px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Floating shape */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-[#d84a3d]/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>

        {/* RIGHT REASONS */}
        <div className="space-y-5">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                x: 8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl border border-red-50"
            >
              <div className="min-w-[52px] h-[52px] rounded-xl bg-[#fff1ee] text-[#d84a3d] flex items-center justify-center shadow-sm">
                {item.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
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