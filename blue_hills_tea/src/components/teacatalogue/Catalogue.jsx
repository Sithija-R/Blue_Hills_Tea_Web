// Catalog.js
import React from "react";
import TeaCard from "./TeaCard"; // Import the TeaCard component
import { teas } from "./teaDatas"; // Import the tea data
import { Tea_Leave } from "../../assets";

const Catalogue = () => {
  return (
    <div className="w-full  text-black  ">
      {/* Title + Description */}
      <section className="px-10 pt-16">
        <h1 className="text-[40px] font-bold text-left text-black">
          Tea Catalogue
        </h1>
        <p className="mt-2  text-[25px] text-[#4B5563]">
          A collection of expertly crafted teas, each with its own unique taste
          and aroma. From bold black teas to delicate white blends, discover the
          perfect cup for every moment.
        </p>
      </section>

      {/* Card Grid */}
      <section className="px-10 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {/* Map through tea data and display TeaCard for each tea */}
          {teas.map((tea) => (
            <TeaCard key={tea.id} tea={tea} />
          ))}
        </div>
      </section>

      {/* Blue Paragraph */}
      <div className="flex-col justify-center items-center px-70">
        <div className="min-h-0.5 mt-5 bg-[#2563EB] w-"></div>
      </div>
      <section className="text-center relative bg-transparent text-[#2563EBED] py-5 my-20">
        <img
          src={Tea_Leave}
          alt="tea leave"
          className="absolute xl:-right-10 -right-50 top-0 -translate-y-20 -z-50 transition-all duration-2000 ease-in-out"
        />

        <p className="text-3xl font-medium ">
          Every sip tells a story of tradition, quality, and craftsmanship.
          {<br />}
          Experience the true essence of Ceylon tea with Blue Hill Tea Factor.
        </p>
      </section>
    </div>
  );
};

export default Catalogue;
