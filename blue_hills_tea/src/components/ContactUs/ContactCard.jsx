

import React from 'react';
import { FiMapPin, FiPhoneCall, FiClock } from 'react-icons/fi';
import './Contact.css';

const ContactCard = () => {
  return (
    <div className="w-full flex flex-col px-4 md:px-12 py-12">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">Contact Us</h2>
      <p>We’d love to hear from you. Whether you have questions about our teas, wholesale inquiries, or feedback, our team is here to help.</p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        
        <div className="bg-blue-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 text-left min-h-[275px] transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4">
            <FiMapPin />
          </div>
          <h3 className="text-lg font-semibold mb-2">Visit Our Factory</h3>
          <p className="text-sm">Blue Hill Tea Factory,<br />Bogawanthalawa,<br />Balangoda</p>
          <button className="mt-10.5 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md text-sm">
            Get Directions
          </button>
        </div>

        
        <div className="bg-blue-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 text-left min-h-[275px] transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4">
            <FiPhoneCall />
          </div>
          <h3 className="text-lg font-semibold mb-2">Call Us</h3>
          <p className="text-sm">
            Customer Service: +9476 123 4567 <br />
            CEO: +9476 123 4567 <br />
            Emergency: +9476 123 4567
          </p>
          <button className="mt-10.5 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md text-sm">
            Call Now
          </button>
        </div>

        
        <div className="bg-blue-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 text-left min-h-[275px] transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4">
            <FiClock />
          </div>
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p className="text-sm">
            Monday - Friday: 8am - 5pm <br />
            Saturday: 10am - 3pm <br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
