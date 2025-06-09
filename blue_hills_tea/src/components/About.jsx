import Navbar from "./Navbar";
import { StorySection } from "./aboutme/StorySection";
import { Owner } from "./aboutme/Owner";
import { OurTeam } from "./aboutme/OurTeam";
import { StandFor } from "./aboutme/StandFor";
import Footer from "./Footer";

const About = () => {
  return (
    <div className=" w-full h-screen overflow-y-scroll hideScrollBar bg-[#EDEDED]">
      <header className="z-50 relative top-13 w-full flex justify-center">
        <Navbar />
      </header>

      <section className=" w-full mt-35">
        <h1 className="text-4xl font-bold text-blue-500 text-center mt-2">
          Our Story
        </h1>
      </section>

      <section className=" w-full ">
        <StorySection />
      </section>
      <section className=" w-full">
        <Owner />
      </section>
      <section className=" w-full">
        <OurTeam />
      </section>
      <section className=" w-full">
        <StandFor />
      </section>
      <Footer />
    </div>
  );
};

export default About;
