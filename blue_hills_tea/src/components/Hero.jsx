import React, { useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Slider_01, PaginationInactive, PaginationActive } from "../assets"; // Import icons
import Navbar from "./Navbar";
import { shortAbout } from "../contents";
import { slideIn } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  // Stagger animation for words
  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <div className="relative w-full h-screen overflow-y-scroll hideScrollBar">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Navbar */}
        <header className="z-50 absolute top-13 w-full flex justify-center">
          <Navbar />
        </header>

        {/* Heading */}
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
              <div className="absolute inset-0 bg-[#03045E6B]"></div>
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
              src={
                index === currentIndex ? PaginationActive : PaginationInactive
              }
              alt={`Pagination ${index}`}
              className={`${
                index === currentIndex ? "w-8 h-8" : "w-6 h-6"
              } ml-5`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={ref} className="w-full h-screen mt-34">
        <div className="flex justify-evenly lg:flex-row flex-col-reverse gap-10 lg:px-20 px-8">
          {/* Image with Slide-in Animation */}
          <motion.div
            variants={slideIn("left", "tween", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="lg:flex-[0.95]  flex bg-black-100 lg:p-8 rounded-2xl"
          >
            <motion.img
              src="https://www.bluelankatours.com/wp-content/uploads/2024/11/Pedro-Tea-Estate-Sri-Lanka.jpg"
              alt="factory"
              className="w-full  rounded-2xl object-cover"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>

          {/* Text Section with Animation */}
          <motion.div
            variants={slideIn("right", "tween", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            className="min-h-50  lg:max-w-[40%] w-full pt-13"
          >
            <motion.p
              className="text-[#0069FF] font-medium"
              whileHover={{ scale: 1.01 }}
            >
              Blue Hill Tea Factory
            </motion.p>

            {/* Staggered Text Animation */}
            <motion.p
              className="text-[#090914] font-medium text-3xl mt-4"
              variants={sentenceVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {"From a Humble Beginning to a Legacy of Fine Tea"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    className="mr-2 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>

            <motion.p className="mt-8">{shortAbout.description}</motion.p>

            <motion.p className="mt-6 font-medium">
              Mr.Chaminda
              <span className="ml-5 font-regular text-[#64748B]">Founder</span>
            </motion.p>

            <div className="bg-[#CBD5E1] min-h-[1.5px] rounded-lg opacity-50 mt-5"></div>

            <motion.div
              className="mt-8 flex items-center gap-2 justify-end px-8 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.p className=" text-[#2563EB] font-medium">
                Read Full Story
              </motion.p>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-blue-600 ml-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
