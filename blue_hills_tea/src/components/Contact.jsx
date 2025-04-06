import React from 'react'
import { motion } from 'motion/react'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <div className="relative w-full h-screen overflow-y-scroll hideScrollBar bg-violet-200">
     
    <section className="relative h-screen">
    
      <header className="z-50 absolute top-13 w-full flex justify-center">
        <Navbar />
      </header>

      {/* Heading */}
      <motion.h1
        whileHover={{ scale: 1.2 }}
        className="absolute top-[40%] left-1/2 transform -translate-x-1/2  text-center font-semibold text-4xl md:text-6xl font-league z-20"
      >
        Contact
      </motion.h1>
    </section>
  </div>
  )
}

export default Contact