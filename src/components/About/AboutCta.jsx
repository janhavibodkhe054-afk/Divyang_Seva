import React from "react";

const AboutCta = () => {
  return (
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
  );
};

export default AboutCta;