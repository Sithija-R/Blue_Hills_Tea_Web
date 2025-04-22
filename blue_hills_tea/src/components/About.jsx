import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import { StorySection } from "./aboutme/StorySection";
import { Owner } from "./aboutme/Owner";
import { OurTeam } from "./aboutme/OurTeam";
import { StandFor } from "./aboutme/StandFor";
import Footer from "./Footer";


const About = () => {
  return (
<div className="relative w-full h-screen overflow-y-scroll hideScrollBar bg-[#EDEDED]">
  <header className="z-50 w-full flex justify-center py-3">
    <Navbar />
  </header>

  <section className="relative w-full">
   <h1 className="text-4xl font-bold text-blue-500 text-center mt-2">Our Story</h1>
  </section>

  <section className="relative w-full h-screen">
    <StorySection/>
  </section>
  <section className="relative w-full">
    <Owner/>
  </section>
  <section className="relative w-full">
    <OurTeam/>
  </section>
  <section className="relative w-full">
    <StandFor/>
  </section>
     <Footer />
</div>

  );
};

export default About;