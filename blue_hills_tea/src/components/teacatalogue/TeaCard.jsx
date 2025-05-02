


import React from 'react';
import { motion } from 'motion/react'

export default function TeaCard({ tea }) {
  return (
    <motion.div whileHover={{scale:1.05}} className="bg-white rounded-xl p-5 shadow-lg overflow-hidden w-[250px] h-[250px] flex flex-col justify-between cursor-pointer">
      <img
        src={tea.image}
        alt={tea.name}
        className="w-full h-[170px] object-cover"
      />
      <div className="p-3 flex-grow flex flex-col justify-between">
        <h2 className="text-md font-semibold truncate mt-1 text-center">{tea.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3 mt-1">{tea.description}</p>
      </div>
    </motion.div>
  );
}
