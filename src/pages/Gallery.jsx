import React from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const galleryImages = Array.from(
    { length: 105 },
    (_, i) => `/img${i + 1}.jpeg`
  );

  const videos = ["/v1.mp4", "/v2.mp4", "/v3.mp4", "/v4.mp4",];

  return (
    <section className="bg-white py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d84a3d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 rounded-full blur-3xl"></div>

      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#d84a3d] uppercase tracking-[0.3em] text-sm mb-3 font-medium">
              Divyang Seva Foundation
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Stories of Care, <br />
              Strength & Smiles
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
              Every image reflects our journey of compassion, support,
              and empowerment for differently-abled individuals.
              These moments capture hope, dignity, and togetherness.
            </p>
          </div>

          <div className="bg-[#d84a3d] rounded-3xl p-8 md:p-10 shadow-2xl">
            <p className="text-white text-xl md:text-2xl leading-9 italic">
              “Together we create a world where every ability is
              celebrated and every life is empowered.”
            </p>

            <div className="mt-6 w-16 h-1 bg-white rounded-full"></div>

            <p className="text-white/80 mt-4 text-sm uppercase tracking-widest">
              Divyang Seva Foundation
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE GALLERY */}
      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-black mb-8 text-center">
          Our Gallery
        </h3>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.01,
              }}
              viewport={{ once: true }}
              className="break-inside-avoid rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 group"
            >
              <div className="relative">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-56 md:h-64 object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="absolute bottom-0 left-0 p-5 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-white text-lg font-semibold">
                    Inspiring Moments
                  </h3>
                  <p className="text-white/80 text-sm">
                    Care • Support • Empowerment
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="relative z-10 mt-20">
        <h3 className="text-3xl font-bold text-black mb-8 text-center">
          Video Stories
        </h3>

        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-lg">
          Watch the inspiring journeys, community events, and heartwarming
          stories from Divyang Seva Foundation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              <video
                src={video}
                controls
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="max-w-4xl mx-auto text-center mt-16 relative z-10">
        <p className="text-gray-600 text-lg leading-8">
          Through every smile, every initiative, every image, and every
          story, we continue building a more inclusive and compassionate society.
        </p>
      </div>
    </section>
  );
}