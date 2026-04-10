import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMapPin,
  FiMail,
  FiSearch,
  FiShoppingCart,
  FiPhoneCall,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Donate", path: "/donate" },
  { name: "Our Work", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Demos");

  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="hidden md:flex bg-[#f4efef] text-[12px] text-gray-600 py-2 px-4 lg:px-8 justify-between items-center">
        <div className="flex gap-3">
          <FiFacebook className="cursor-pointer hover:text-[#d9483b]" />
          <FiTwitter className="cursor-pointer hover:text-[#d9483b]" />
          <FiInstagram className="cursor-pointer hover:text-[#d9483b]" />
        </div>

        <div className="flex gap-6 items-center flex-wrap">
          <div className="flex items-center gap-1">
            <FiMapPin size={12} />
            <span>
              Plot 1 Gadkari Nagar Bhusawal District Jalgaon Maharashtra Pincode
              425201
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FiMail size={12} />
            <span>Dsfoundation8331@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-[#d84a3d]">
        {/* Logo */}
        <div className="bg-white rounded-r-3xl px-4 sm:px-6 lg:px-8 py-3 shadow-sm min-w-fit">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">
              Divyang Seva Foundation
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-between items-center px-8 text-white">
          <ul className="flex gap-6 xl:gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                onClick={() => setActiveLink(link.name)}
                className={`cursor-pointer transition duration-300 relative ${
                  activeLink === link.name
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-yellow-300 rounded-full"></span>
                )}
              </Link>
            ))}
          </ul>
        </div>

        {/* Call Section Desktop */}
        <a
          href="tel:+919370302804"
          className="hidden md:flex bg-[#1d1d24] text-white px-4 lg:px-6 py-4 items-center gap-3 min-w-fit cursor-pointer hover:bg-[#2a2a33] transition duration-300"
        >
          <div className="bg-white text-black p-2 rounded-full">
            <FiPhoneCall />
          </div>

          <div>
            <p className="text-xs text-gray-300">Call for Donation</p>
            <h2 className="text-sm lg:text-lg font-bold">+91 9370302804</h2>
          </div>
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-white text-2xl px-4">
          {menuOpen ? (
            <FiX
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#d84a3d] text-white px-6 py-4 shadow-md">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                onClick={() => {
                  setActiveLink(link.name);
                  setMenuOpen(false);
                }}
                className={`block cursor-pointer text-sm font-medium ${
                  activeLink === link.name
                    ? "text-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </ul>

          <a
            href="tel:+919370302804"
            className="mt-5 flex items-center gap-3 border-t border-white/20 pt-4 hover:opacity-90 transition"
          >
            <div className="bg-white text-black p-2 rounded-full">
              <FiPhoneCall />
            </div>

            <div>
              <p className="text-xs text-gray-200">Call for Donation</p>
              <h2 className="text-sm font-bold text-white">+91 9370302804</h2>
            </div>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
