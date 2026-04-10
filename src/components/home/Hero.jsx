import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="w-full min-h-screen relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Content */}
        <div className="relative bg-[#171720] text-white flex items-center px-6 sm:px-10 md:px-14 lg:px-16 py-16">
          {/* Main Text */}
          <div className="relative z-10 max-w-xl ml-6 sm:ml-10 lg:ml-14">
            <p className="text-[#ff6b5c] text-xs sm:text-sm font-semibold mb-3 tracking-[3px] uppercase">
              NGO • Helping Humanity
            </p>

            <h3 className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium mb-3">
              Divyang Seva Foundation
            </h3>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Get Involved <br />
              & Lend Helping <br />
              Hand to Poor Man
            </h1>

            <p className="text-gray-300 text-sm sm:text-base leading-7 mb-8 max-w-lg">
              Help humanity and make lives better. Your small contribution
              creates a meaningful impact for children, women and families in
              need.
            </p>

            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-[#d84a3d] hover:bg-[#bf3e33] px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition duration-300"
            >
              Donate Now
              <FiArrowRight />
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative min-h-[350px] sm:min-h-[500px] lg:min-h-screen">
          <img
            src="https://thumbs.dreamstime.com/b/jodhpur-rajasthan-india-may-poor-helpless-handicapped-old-woman-sitting-wheelchair-wearing-mask-roaming-road-jodhpur-183617364.jpg?w=992"
            alt="ngo hero"
            className="w-full h-full object-cover"
          />

          {/* Dark overlay for premium look */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Stylish bottom curve */}
          <div className="absolute bottom-0 left-0 w-full h-10 bg-[#F8F8F8] rounded-tl-[120px] block sm:hidden"></div>

          
        </div>
      </div>
    </section>
  );
};

export default Hero;
