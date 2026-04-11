import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
} from "react-icons/fi";

const Donate = () => {

  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form[0].value;
  const email = form[1].value;
  const phone = form[2].value;
  const address = form[3].value;
  const message = form[4].value;

  const text = `Donation Details:%0A
Name: ${name}%0A
Email: ${email}%0A
Phone: ${phone}%0A
Address: ${address}%0A
Message: ${message}%0A
Amount: ₹${amount}`;

  const whatsappNumber = "919370302804";

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;

  window.open(url, "_blank");
};
  const [amount, setAmount] = useState("1000");

  const presetAmounts = ["500", "1000", "2500", "5000", "10000"];

  return (
    <div className="w-full bg-[#fafafa] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[580px] overflow-hidden">
        <img
          src="/img44.jpeg"
          alt="donate"
          className="w-full h-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-[#5e0b18]/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center -mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-wide"
          >
            DONATE NOW
          </motion.h1>

          <p className="mt-4 text-lg md:text-xl max-w-2xl text-white/90">
            Your support helps us create a better future for those in need.
          </p>
        </div>
      </section>

      {/* DONATION CARD */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 -mt-40 relative z-10 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="p-8 md:p-10 border-b lg:border-b-0">
              <h2 className="text-3xl font-bold mb-6">
                Choose Donation Amount
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {presetAmounts.map((item) => (
                  <button
                    key={item}
                    onClick={() => setAmount(item)}
                    className={`py-3 rounded-lg font-semibold transition ${
                      amount === item
                        ? "bg-[#d84a3d] text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    ₹{item}
                  </button>
                ))}
              </div>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter custom amount"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
              />

              {/* WHY DONATE */}

              {/* QR DONATION BLOCK */}
              <div className="mt-8 p-5 rounded-xl bg-white shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">
                  Donate via QR Code
                </h3>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  {/* QR IMAGE */}
                  <div className="w-40 h-40 rounded-xl overflow-hidden shadow">
                    <img
                      src="/qr.jpeg"
                      alt="Donate QR"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* DETAILS */}
                  <div className="flex-1">
                    <p className="text-gray-600 leading-7">
                      Scan this QR code using
                      <span className="font-semibold">
                        {" "}
                        Google Pay, PhonePe, Paytm
                      </span>{" "}
                      or any banking app.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-8 md:p-10">
              <h2 className="text-3xl font-bold mb-6">Donor Details</h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative">
                  <FiUser className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
                  />
                </div>

                <div className="relative">
                  <FiPhone className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
                  />
                </div>

                <div className="relative">
                  <FiMapPin className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    rows="4"
                    placeholder="Address"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
                  ></textarea>
                </div>

                <div className="relative">
                  <FiCreditCard className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Purpose / Message"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none focus:ring-2 focus:ring-[#d84a3d]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d84a3d] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition text-lg"
                >
                  Donate ₹{amount}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
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
    </div>
  );
};

export default Donate;
