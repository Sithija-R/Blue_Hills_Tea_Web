import React from "react";
import { motion } from "motion/react";

export default function TeaCard({ tea }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-2 shadow-xl overflow-hidden w-[300px] h-[300px] flex flex-col justify-between cursor-pointer"
    >
      <img
        src={tea.image}
        alt={tea.name}
        className="w-full h-[220px] object-contain"
      />
      <div className="p-3 flex-grow flex flex-col justify-between bg-transparent">

        <h2 className="text-md font-semibold mt-1 text-center">
          {tea.name}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3 mt-1">
          {tea.description}
        </p>
      </div>
    </motion.div>
  );
}
