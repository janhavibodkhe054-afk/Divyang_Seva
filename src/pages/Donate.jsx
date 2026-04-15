import React from "react";
import { motion } from "framer-motion";
import {
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
    const amount = form[5].value;

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
              {/* QR BLOCK */}
              <div className="p-5 rounded-xl bg-white shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">
                  Donate via QR Code
                </h3>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-40 h-40 rounded-xl overflow-hidden shadow">
                    <img
                      src="/qr.jpeg"
                      alt="Donate QR"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="text-gray-600 leading-7">
                      Scan using{" "}
                      <span className="font-semibold">
                        Google Pay, PhonePe, Paytm
                      </span>{" "}
                      or any banking app.
                    </p>
                  </div>
                </div>
              </div>

              {/* BANK DETAILS */}
              <div className="mt-8 p-6 rounded-xl bg-[#fff7f5] border border-[#f3d0cb] shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#d84a3d]">
                  Bank Transfer Details
                </h3>

                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-semibold">Account Name:</span>{" "}
                    DIVYANG SEVA FOUNDATION
                  </p>

                  <p>
                    <span className="font-semibold">Account Type:</span>{" "}
                    SBA
                  </p>

                  <p>
                    <span className="font-semibold">Account Number:</span>{" "}
                    10660110112632
                  </p>

                  <p>
                    <span className="font-semibold">IFSC Code:</span>{" "}
                    UCBA0001066
                  </p>

                  <p>
                    <span className="font-semibold">UPI ID:</span>{" "}
                    divyangsevafoun@ucobank
                  </p>

                  <p>
                    <span className="font-semibold">Branch:</span>{" "}
                    BHUSAWAL
                  </p>

                  <p>
                    <span className="font-semibold">Branch Address:</span>{" "}
                    4960, NAVSHAKTI ARCADE, JAMNER RD BHUSA MH 425201
                  </p>
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
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <FiPhone className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <FiMapPin className="absolute left-4 top-4 text-gray-400" />
                  <textarea
                    rows="4"
                    placeholder="Address"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none"
                    required
                  ></textarea>
                </div>

                <div className="relative">
                  <FiCreditCard className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Purpose / Message"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none"
                  />
                </div>

                {/* MANUAL DONATION AMOUNT */}
                <div className="relative">
                  <FiCreditCard className="absolute left-4 top-4 text-gray-400" />
                  <input
                    type="number"
                    placeholder="Donation Amount (₹)"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-50 outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d84a3d] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Donate Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;