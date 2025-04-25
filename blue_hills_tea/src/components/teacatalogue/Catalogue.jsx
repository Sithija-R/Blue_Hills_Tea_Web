// Catalog.js
import React from 'react';
import TeaCard from './TeaCard'; // Import the TeaCard component
import { teas } from './teaDatas'; // Import the tea data

const Catalogue=()=> {
  return (
    <div className="w-full bg-white text-black  ">
      {/* Title + Description */}
      <section className="px-10 pt-16">
        <h1 className="text-[40px] font-bold text-left text-black">Tea Catalogue</h1>
        <p className="mt-2  text-[25px] text-[#4B5563]">
          A collection of expertly crafted teas, each with its own unique taste and aroma. From bold black teas to
          delicate white blends, discover the perfect cup for every moment.
        </p>
      </section>

      {/* Card Grid */}
      <section className="px-10 pt-12 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {/* Map through tea data and display TeaCard for each tea */}
          {teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} />
          ))}
        </div>
      </section>

      {/* Blue Paragraph */}
      <div className='flex-col justify-center items-center px-70'>

      <div className='min-h-0.5 bg-[#2563EB] w-'></div>
      </div>
      <section className="text-center bg-[#ffffff] text-[#2563EBED] py-8 px-6  ">
        <p className="text-2xl font-bold">
          Every sip tells a story of tradition, quality, and craftsmanship.{<br/>}
          Experience the true essence of Ceylon tea with Blue Hill Tea Factor.
        </p>
      </section>
    </div>
  );
}

export default Catalogue;