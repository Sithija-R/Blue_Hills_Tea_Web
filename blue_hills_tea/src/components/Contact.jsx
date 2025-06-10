import React from "react";
import Navbar from "./Navbar";
import ContactForm from "./ContactUs/ContactForm";
import ContactCard from "./ContactUs/ContactCard";
import FactoryTours from "./ContactUs/FactoryTours";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="relative w-full h-screen  ">
      <header className="z-50 absolute top-13 w-full flex justify-center">
        <Navbar />
      </header>

      <section className="relative h-screen  ">
        <div className="px-10">
          <div className="pt-32">
            <ContactCard />
          </div>

          <div className="mt-16">
            <ContactForm />
          </div>

          <div className="mt-16">
            <FactoryTours />
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Contact;
