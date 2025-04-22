


import React from 'react';

export default function TeaCard({ tea }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[200px] h-[250px] flex flex-col justify-between">
      <img
        src={tea.image}
        alt={tea.name}
        className="w-full h-[150px] object-cover"
      />
      <div className="p-3 flex-grow flex flex-col justify-between">
        <h2 className="text-md font-semibold truncate mt-1">{tea.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3 mt-1">{tea.description}</p>
      </div>
    </div>
  );
}
