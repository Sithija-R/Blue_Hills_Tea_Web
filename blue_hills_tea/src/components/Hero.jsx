import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Slider_01, PaginationInactive, PaginationActive } from "../assets"; // Import icons

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex); // Update the active index when slide changes
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        whileHover={{ scale: 1.2 }}
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-white text-center font-semibold text-4xl md:text-6xl font-league z-20"
      >
        High Quality Tea Production <br />
        <span className="text-[#00EB3F]">From Sri Lanka</span>
      </motion.h1>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange} 
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={Slider_01}
              alt="Slide 1"
              className="w-full h-screen object-cover"
            />
             <div className="absolute inset-0 bg-[#03045E6B]"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://www.ceylonexpeditions.com/medias/package_places/big/127/shrilanka-tea-estates.jpg"
              alt="Slide 2"
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-[#03045E6B]"></div>{" "}
           
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src="https://www.bluelankatours.com/wp-content/uploads/2024/11/Pedro-Tea-Estate-Sri-Lanka.jpg"
              alt="Slide 3"
              className="w-full h-screen object-cover"
            />
             <div className="absolute inset-0 bg-[#03045E6B]"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination */}
      <div className="z-50 absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <img
            key={index}
            src={index === currentIndex ? PaginationActive : PaginationInactive}
            alt={`Pagination ${index}`}
            className={`${
              index === currentIndex ? "w-8 h-8" : "w-6 h-6"
            } cursor-pointer ml-5`} // Increase size for the active icon
            onClick={() => setCurrentIndex(index)} // Update the current index on click
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
