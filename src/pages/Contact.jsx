import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const newErrors = {};

    if (!form.name.value.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.value.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.subject.value.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.value.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.value.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const form = e.target;
    const validationErrors = validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const phoneNumber = "919370302804";

    const text = `
Hello! I want to contact you:

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");

    setSuccess(true);
    form.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-[#fafafa] relative">
      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-6 right-6 bg-white shadow-xl border-l-4 border-green-500 px-5 py-4 rounded-xl flex items-center gap-3 z-50"
          >
            <FiCheckCircle className="text-green-500 text-xl" />
            <p className="font-medium">Message sent successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative h-[280px] md:h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Contact Hero"
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-3 text-white/90 text-sm md:text-base">
            Home • Contact
          </p>
        </motion.div>
      </section>

      {/* MAP */}
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Plot%201%20Gadkari%20Nagar%20Bhusawal%20District%20Jalgaon%20425201&output=embed"
        className="w-full h-[260px] md:h-[450px]"
      />

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-5 md:px-16 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <p className="text-[#d84a3d] font-semibold tracking-widest uppercase">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              We’re Always Here for Support
            </h2>

            <div className="w-20 h-[2px] bg-gradient-to-r from-[#d84a3d] to-yellow-400 mt-4"></div>

            <p className="text-gray-600 mt-5 leading-7">
              We believe in compassion, care and community support. Reach out
              to us for any help, donations, volunteering or collaboration.
            </p>
          </div>

          {/* INFO BLOCKS */}
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-full bg-white shadow-md text-[#d84a3d]">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-600">
                  Plot 1 Gadkari Nagar, Bhusawal, Jalgaon, Maharashtra - 425201
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-full bg-white shadow-md text-yellow-500">
                <FiPhone />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">+91 9370302804</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-full bg-white shadow-md text-[#d84a3d]">
                <FiMail />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-600">
                  dsfoundation8331@gmail.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-full bg-white shadow-md text-yellow-500">
                <FiClock />
              </div>
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-600">Mon - Sat: 9AM - 7PM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Send Message
          </h3>

          <form className="space-y-5" onSubmit={handleWhatsApp}>
            <div>
              <input
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-[#d84a3d]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-[#d84a3d]"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full px-4 py-3 bg-gray-50 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#d84a3d] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              Send Message <FiSend />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;