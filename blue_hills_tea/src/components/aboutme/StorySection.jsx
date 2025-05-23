import React, { useState, useEffect } from "react";
import { Os1, Os2 } from "../../assets";

export const StorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Os1,Os2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); 
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            &#10094;
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            &#10095;
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-xl text-gray-700 font-normal text-center mt-4 w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9302a29ca02da3bfa9f834f491207f843ddc709?placeholderIfAbsent=true"
            alt="Decorative left"
            className="aspect-[0.73] object-contain w-48 shrink-0"
          />
          <p className="mx-4 max-w-2xl">
            Nestled in the lush hills of Sri Lanka, Blue Hill Tea Factory began
            with a simple dream—to craft the finest Ceylon tea while honoring
            tradition and sustainability. From humble beginnings to a renowned tea
            producer, our journey is one of passion, dedication, and an unwavering
            commitment to quality. Join us as we share the story behind every
            leaf, every blend, and every cup.
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82697982d3a9633b1fe192b70548f74bb976d2e8?placeholderIfAbsent=true"
            alt="Decorative right"
            className="aspect-[0.73] object-contain w-48 shrink-0"
          />
        </div>
      </div>
    </section>
  );
};

export default StorySection;