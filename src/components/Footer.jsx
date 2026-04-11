import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-red-900 text-white pt-16 pb-6 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Divyang Seva Foundation
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed">
            We are dedicated to empowering divyang individuals by providing
            support, opportunities, and creating an inclusive society for all.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 bg-white/10 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Donate", path: "/donate" },
              { name: "Our Work", path: "/our-work" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition hover:text-yellow-400 ${
                      isActive ? "text-yellow-400 font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            {[
              "Healthcare Support",
              "Education Programs",
              "Skill Development",
              "Community Support",
              "Awareness Campaigns",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-yellow-400" />
              <span>Plot 1 Gadkari Nagar, Bhusawal, District-Jalgaon, Maharashtra, Pincode 425201</span>
            </div>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <Phone size={18} className="text-yellow-400" />
              <span>+91 9370302804</span>
            </a>

            <a
              href="mailto:support@divyangseva.org"
              className="flex items-center gap-3 hover:text-yellow-400 transition"
            >
              <Mail size={18} className="text-yellow-400" />
              <span>dsfoundation8331@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* DONATE NOW CTA */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <div>
          <h4 className="text-lg font-semibold">
            Support our mission and transform lives
          </h4>

          <p className="text-gray-300 text-sm mt-1">
            Every contribution helps us serve the community better.
          </p>
        </div>

        <NavLink
          to="/donate"
          className="bg-[#d84a3d] px-6 py-3 rounded-full hover:scale-105 transition font-semibold"
        >
          Donate Now
        </NavLink>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm space-y-2">
        <p>
          © {new Date().getFullYear()} Divyang Seva Foundation. All rights
          reserved.
        </p>

        <p className="text-gray-500">
          Designed & Developed by{" "}
          <a
            href="https://www.hashgridtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Hashgrid Technologies Pvt. Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
}