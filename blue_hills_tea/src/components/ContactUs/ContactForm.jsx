import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const ContactForm = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 md:px-0 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">Send Us a Message</h2>
      
      <form className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-2xl mb-3"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email Address</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-2xl mb-3"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Mobile Number (Optional)</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-2xl mb-3"
            placeholder="+94 (55) 555-5555"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-2xl mb-3"
            placeholder="What is your message about?"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            className="w-full p-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100 rounded-2xl mb-3"
            rows="5"
            placeholder="Please provide details about your inquiry or feedback.."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-2xl"
        >
          Submit Message
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
