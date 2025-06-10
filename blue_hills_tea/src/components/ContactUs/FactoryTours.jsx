import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMugHot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FactoryTours = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    contact: "",
    message: "",
    subject: "",
  });

  const openModal = (subject) => {
    setFormData({ email: "", contact: "", message: "", subject });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Blue Hills Tea Factory",
          from_email: formData.email,
          to_email: "newbluemounttea@gmail.com",
          phone: formData.contact,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
        
          setLoading(false); 
          Swal.fire({
            title: "Successfully Sent !",
            text: "Thank you. We will get back to you as soon as possible.",
            icon: "success",
          });

          closeModal()

          setFormData({
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); 
          console.error(error);
          Swal.fire({
            title: "Oops !",
            text: "Something went wrong. Please try again.",
            icon: "error",
          });
        }
      );
   
  };

  return (
    <div className="w-full flex flex-col px-4 md:px-12 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">Factory Tours</h2>
      <p className="text-xl">
        Experience the art of tea making with our guided factory tours. Learn
        about our sustainable practices and traditional methods.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center lg:gap-20 md:gap-10 gap-8 mt-25">
        {/* Office Tours */}
        <motion.div className="bg-[#2563EB1C] backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 min-h-80 text-left transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mb-4 w-fit">
            <FontAwesomeIcon icon={faCalendarAlt} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Office Tours</h3>
          <p className="text-lg text-[#4B5563]">
            Monday – Friday
            <br />
            10.00am
            <br />
            2.00pm
          </p>
        </motion.div>

        {/* Tea Tasting */}
        <motion.div className="bg-[#2563EB1C] backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 min-h-80 text-left transform transition-all duration-200 hover:scale-105 relative">
          <div className="text-3xl text-blue-500 mb-4 w-fit">
            <FontAwesomeIcon icon={faMugHot} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Tea Tasting Sessions</h3>
          <p className="text-lg text-[#4B5563] mb-1 block md:hidden lg:block">
          Enjoy a guided tasting of our finest blends. (Reservation Required)
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 md:absolute md:bottom-8 bg-[#2563EB40] hover:bg-blue-600 hover:text-white text-[#2563EB] py-2 px-4 rounded-xl text-lg cursor-pointer"
            onClick={() => openModal("Book a Tea Tasting Session")}
          >
            Make a Reservation
          </motion.button>
        </motion.div>

        {/* Book a Tour */}
        <motion.div className="bg-[#2563EB1C] backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 min-h-80 text-left transform transition-all duration-200 hover:scale-105 relative">
          <div className="text-3xl text-blue-500 mb-4 w-fit">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Book a Tour</h3>
          <p className="text-lg text-[#4B5563] mb-1  block md:hidden lg:block">
          Explore our factory and see how premium Ceylon tea is crafted.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="mt-4 md:absolute md:bottom-8 bg-[#2563EB40] hover:bg-blue-600 hover:text-white text-[#2563EB] py-2 px-4 rounded-xl text-lg cursor-pointer"
            onClick={() => openModal("Book a Factory Tour")}
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 
        ">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] xl:w-[50%] relative">
            <button
              className="absolute top-2 right-4 text-xl font-bold text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold mb-4">{formData.subject}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#D9D9D952] rounded-xl mb-3"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#D9D9D952] rounded-xl mb-3"
              />
              <input
                type="text"
                name="contact"
                placeholder="Your Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#D9D9D952] rounded-xl mb-3"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#D9D9D952] rounded-xl mb-3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg cursor-pointer"
              >
               {loading?"Sending...":"Send Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactoryTours;
