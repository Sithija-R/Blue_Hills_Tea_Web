// Catalog.js
import React from "react";
import TeaCard from "./TeaCard"; // Import the TeaCard component
import { teas } from "./teaDatas"; // Import the tea data
import { Leave_Pattern, TeaCup, Tea_Leave } from "../../assets";
import WheelChart from "./BenefitWheel";
import { motion } from "framer-motion";
const Catalogue = () => {
  return (
    <div className="w-full  text-black  ">


{/* About Tea Section */}
<section className="px-10 pt-16 pb-10">
<h1 className="text-[40px] font-bold text-left text-black">
About Tea
        </h1>

  <div className="flex flex-col md:flex-row items-center gap-10 ">
    {/* Tea Image Placeholder */}
    <img
      src={TeaCup}
      alt="About Tea"
      className="w-full md:w-[50%] rounded-xl  object-cover"
    />

    {/* Text Content */}
    <div className="text-left md:w-[45%]">
    
      <p className="text-lg text-gray-700 mb-4">
        Sri Lanka is one of the world's largest and most respected tea producers, known for its high-quality Ceylon Tea. The tea industry is a cornerstone of the country's economy, culture, and global reputation. Here's an in-depth look at Sri Lanka's tea production:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-4">
        <li>
          <strong>Global Ranking:</strong> Sri Lanka is the 4th largest tea producer and 2nd largest tea exporter globally.
        </li>
        <li>
          <strong>Annual Production:</strong> Around 300–340 million kilograms of tea per year.
        </li>
        <li>
          <strong>Employment:</strong> The tea industry provides jobs for over 1.5 million people, including tea pluckers, factory workers, and others involved in the supply chain.
        </li>
      </ul>
    </div>
  </div>
</section>


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
      <section className="relative px-10 py-16  mb-20">
        <h2 className="text-[35px] font-bold text-center mb-20 text-[#2563EB] ">
          Health Benefits of Tea
        </h2>
        <WheelChart />

        <motion.img
          className="absolute w-60 top-0 left-0 -z-20 md:block hidden"
          src={Leave_Pattern}
          animate={{ rotate: [0, 2, -2, 2, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          className="absolute w-60 top-0 right-0 -scale-x-100 -z-20 md:block hidden"
          src={Leave_Pattern}
          animate={{ rotate: [0, -2, 2, -2, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>
    </div>
  );
};

export default Catalogue;
