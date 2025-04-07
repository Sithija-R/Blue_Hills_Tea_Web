
import React from 'react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import ContactForm from './ContactUs/ContactForm';
import ContactCard from './ContactUs/ContactCard';
import FactoryTours from './ContactUs/FactoryTours';

const Contact = () => {
  return (
    <div className="relative w-full h-screen overflow-y-scroll hideScrollBar bg-white">
     
    <section className="relative h-screen">
    
      <header className="z-50 absolute top-13 w-full flex justify-center">
        <Navbar />
      </header>

      <motion.h1
        whileHover={{ scale: 1.2 }}
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2  text-center font-semibold text-4xl md:text-6xl font-league z-20"
      >
      </motion.h1>

      <div className="pt-32">
        <ContactCard />
      </div>
  
      <div className="mt-16">
        <ContactForm />
      </div>

      <div className="mt-16">
        <FactoryTours />
      </div>

    </section>

  </div>
  )
}

export default Contact;


