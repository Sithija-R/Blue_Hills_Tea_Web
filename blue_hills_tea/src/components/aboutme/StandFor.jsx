import * as React from "react";

export const StandFor = () => {
  return (
    <section className="w-full px-4 py-12 mt-10 max-md:px-3 font-medium">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-600 text-4xl mb-1 text-center">What We Stand For</h2>
        <h3 className="text-black text-2xl font-semibold mb-3 text-center">
          Quality. Sustainability. Community
        </h3>
        <p className="text-gray-600 text-sm leading-6 text-center max-w-3xl mx-auto">
          We believe in more than just making tea—we believe in doing it right. At Blue Hill Tea Factory, 
          our purpose goes beyond production; it's about honoring a legacy and preserving the natural 
          beauty that surrounds us. Our factory embraces eco-conscious practices that reduce our 
          environmental footprint, from sustainable farming methods to responsible waste management. 
          We actively support our local community by providing fair wages, safe working conditions, 
          and opportunities for growth.
          <br /><br />
          Each blend we craft is a reflection of our commitment to quality, care, and transparency. 
          Whether it's hand-plucked leaves or our small-batch processing techniques, every step is 
          taken with intention. With us, every sip is a taste of tradition and trust—infused with 
          integrity, rooted in heritage, and made for those who appreciate authenticity.
        </p>
      </div>
    </section>
  );
};
