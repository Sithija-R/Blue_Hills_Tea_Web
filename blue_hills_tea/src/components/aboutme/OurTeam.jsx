import * as React from "react";
import { useState, useEffect } from "react";
import { TeamImg1, TeamImg2 } from "../../assets";

export const OurTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamImages = [TeamImg1, TeamImg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-4 py-12 mt-30 max-md:px-3 font-medium">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8">
        {/* Left - Slider */}
        <div className="flex-1 min-w-[280px] max-w-[400px] relative">
          <div className="relative w-full h-80 overflow-hidden rounded-lg">
            {teamImages.map((img, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Slider dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {teamImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex-1 min-w-[280px] max-w-[600px]">
          <h2 className="text-blue-600 text-xl mb-1 text-center md:text-left tracking-wide uppercase">
            Our Team
          </h2>
          <h3 className="text-black text-2xl font-semibold mb-3 text-center md:text-left italic">
            The hands and hearts behind every cup
          </h3>
          <p className="text-gray-600 text-lg leading-6 text-justify lg:px-0 px-7">
            From skilled pluckers and dedicated factory workers to our quality
            control team, Blue Hill Tea Factory thrives because of the
            passionate individuals who bring care, skill, and soul into every
            part of the production.
            <br />
            <br />
            We are proud of our hardworking staff who carry forward our values
            every single day—ensuring that every leaf is picked with precision,
            every batch processed with dedication, and every cup brewed with
            love.
            <br />
            <br />
            Together, they form the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};
