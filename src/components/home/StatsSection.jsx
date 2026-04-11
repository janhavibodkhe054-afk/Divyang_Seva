import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiHeart,
  FiUsers,
  FiAward,
  FiHome,
} from "react-icons/fi";

const CounterItem = ({ icon, target, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center text-center px-4"
    >
      <div className="text-[#d84a3d] text-2xl md:text-3xl mb-2">
        {icon}
      </div>

      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        {count}+
      </h3>

      <p className="text-white/80 text-xs sm:text-sm mt-1">
        {label}
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <FiHeart />,
      target: 500,
      label: "Donors",
    },
    {
      icon: <FiUsers />,
      target: 1900,
      label: "Lives Helped",
    },
    {
      icon: <FiHome />,
      target: 750,
      label: "Support Cases",
    },
    {
      icon: <FiAward />,
      target: 30,
      label: "Recognition",
    },
  ];

  return (
    <section className="relative py-10 md:py-12 overflow-hidden">
      {/* Background */}
      <img
        src="/stats.jpeg"
        alt="foundation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-8">
          <p className="uppercase tracking-[0.25em] text-yellow-300 text-xs sm:text-sm">
            Our Impact
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            Changing Lives Every Day
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
          {stats.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              target={item.target}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;