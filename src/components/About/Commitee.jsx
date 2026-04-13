import React from "react";
import { motion } from "framer-motion";

const Commitee = () => {
  const members = [
    {
      sr: "01",
      name: "Shaikh Edris Shaikh Sardar",
      role: "President",
      age: "48",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
    {
      sr: "02",
      name: "Ashok Devendas Nagdev",
      role: "Vice President",
      age: "50",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
    {
      sr: "03",
      name: "Shaikh Imran Shaikh Sardar",
      role: "Secretary",
      age: "38",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
    {
      sr: "04",
      name: "Rajkumar Ramchandra Shyam",
      role: "Member",
      age: "46",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
    {
      sr: "05",
      name: "Sharif Hamid Bagwan",
      role: "Member",
      age: "43",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
    {
      sr: "06",
      name: "Salim Ahmad Khatik",
      role: "Member",
      age: "55",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
    {
      sr: "07",
      name: "Dinesh Ganesh Mishra",
      role: "Member",
      age: "42",
      profession: "Business",
      location: "Bhusawal, Jalgaon",
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="uppercase tracking-[0.25em] text-sm text-[#d84a3d] font-semibold">
            Leadership
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Governing Committee
          </h2>

          <p className="text-gray-600 mt-4 max-w-4xl mx-auto leading-7">
            Divyang Seva Foundation is guided by a dedicated executive
            committee committed to leadership, transparency, and
            community welfare.
          </p>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-200 rounded-xl">
          <table className="w-full text-left">
            <thead className="bg-[#fafafa] border-b border-gray-200">
              <tr>
                <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                  Sr.
                </th>
                <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                  Designation
                </th>
                <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                  Age
                </th>
                <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                  Profession
                </th>
                <th className="px-4 py-4 text-sm font-semibold text-gray-700">
                  Location
                </th>
              </tr>
            </thead>

            <tbody>
              {members.map((member, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-[#fafafa] transition"
                >
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {member.sr}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-800">
                    {member.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-[#d84a3d]">
                    {member.role}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {member.age}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {member.profession}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {member.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-6 text-center italic">
          Registered leadership details of Divyang Seva Foundation.
        </p>
      </div>
    </section>
  );
};

export default Commitee;