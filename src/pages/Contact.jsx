import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
} from "react-icons/fi";

const Donate = () => {
  const [amount, setAmount] = useState("1000");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    purpose: "",
    type: "General Donation",
  });

  const presetAmounts = ["500", "1000", "2500", "5000", "10000"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const message = `
*Donation Inquiry - Divyang Seva Foundation*

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Donation Type: ${formData.type}
Amount: ₹${amount}
Address: ${formData.address}
Message: ${formData.purpose}
    `;

    const whatsappURL = `https://wa.me/919370302804?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
      {/* Full Name */}
      <div className="relative">
        <FiUser className="absolute left-4 top-4 text-gray-400" />
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <FiMail className="absolute left-4 top-4 text-gray-400" />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <FiPhone className="absolute left-4 top-4 text-gray-400" />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
        />
      </div>

      {/* Donation Type */}
      <select
        name="type"
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
      >
        <option>General Donation</option>
        <option>Wheelchair Support</option>
        <option>Medical Aid</option>
        <option>Education Support</option>
        <option>Food Support</option>
      </select>

      {/* Address */}
      <div className="relative">
        <FiMapPin className="absolute left-4 top-4 text-gray-400" />
        <textarea
          rows="4"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
        ></textarea>
      </div>

      {/* Message */}
      <div className="relative">
        <FiCreditCard className="absolute left-4 top-4 text-gray-400" />
        <input
          type="text"
          name="purpose"
          placeholder="Purpose / Message"
          onChange={handleChange}
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#d84a3d] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg"
      >
        Donate ₹{amount} on WhatsApp
      </button>
    </form>
  );
};

export default Donate;