import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="relative w-full h-screen overflow-y-scroll hideScrollBar bg-green-200">
     
      <section className="relative h-screen">
      
        <header className="z-50 absolute top-13 w-full flex justify-center">
          <Navbar />
        </header>

        {/* Heading */}
        <motion.h1
          whileHover={{ scale: 1.2 }}
          className="absolute top-[40%] left-1/2 transform -translate-x-1/2  text-center font-semibold text-4xl md:text-6xl font-league z-20"
        >
          About
        </motion.h1>
      </section>

      <Footer />
    </div>
  );
};

export default About;
