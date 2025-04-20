import * as React from "react";
import ownerImage from "../../assets/images/owner.png";

export const Owner = () => {
  return (
    <section className="w-full px-4 py-12 mt-10 max-md:px-3 font-medium">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8">
        <div className="flex-1 min-w-[280px] max-w-[600px]">
          <h2 className="text-blue-600 text-xl mb-1 text-center md:text-left">The Founder</h2>
          <h3 className="text-black text-2xl font-semibold mb-3 text-center md:text-left">
            The Heart Behind the Hills
          </h3>
          <p className="text-gray-600 text-sm leading-6 text-justify">
            At the helm of Blue Hill Tea Factory is <strong>Mr. Chaminda</strong>, a
            passionate tea enthusiast whose journey is deeply entwined with
            the rich heritage of Sri Lankan tea. Growing up amidst the scenic
            tea gardens, he developed an early appreciation for the art of tea
            cultivation and the hard work behind every harvest.
            <br /><br />
            Inspired by both tradition and the evolving demands of modern tea lovers,
            <strong> Mr. Chaminda</strong> envisioned a space where authentic craftsmanship
            meets sustainable innovation.
            <br /><br />
            Under his leadership, Blue Hill has grown into a respected name in
            the tea industry, recognized for ethical practices, community
            empowerment, and premium-quality blends.
          </p>
        </div>

        <div className="flex-1 min-w-[280px] max-w-[400px] flex justify-center mt-20">
          <img
            src={ownerImage}
            alt="Founder of Blue Hill Tea Factory"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
