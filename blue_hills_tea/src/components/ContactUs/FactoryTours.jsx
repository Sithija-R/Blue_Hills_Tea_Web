

import React from 'react';
import { FiMapPin, FiPhoneCall, FiClock } from 'react-icons/fi';
import { SlCalender } from "react-icons/sl";
import { GiCoffeeCup } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi2";

import './Contact.css';

const FactoryTours = () => {
  return (
    <div className="w-full flex flex-col px-4 md:px-12 py-12">
      
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left">Factory Tours</h2>
      <p>Experience the art of tea making with our guided factory tours.
      Learn about our sustainable practices and traditional methods.</p>
      
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
        
        <div className="bg-blue-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 text-center min-h-[275px] transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4 text-center w-fit">
            <SlCalender />
          </div>
          <h3 className="text-lg font-semibold mb-2">Daily Tours</h3>
          <p className="text-sm">Monday – Friday<br />10.00am<br />2.00pm</p>
        </div>

        
        <div className="bg-blue-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 text-center min-h-[275px] transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4 text-center w-fit">
            <GiCoffeeCup />
          </div>
          <h3 className="text-lg font-semibold mb-2">Tea Tasting Sessions</h3>
          <p className="text-sm">
            Saturday<br />
            11.00am<br />
            (Reservation Required)
          </p>
        </div>

        
        <div className="bg-blue-100 bg-opacity-10 backdrop-blur-lg p-6 rounded-xl shadow-md w-full md:w-1/3 text-center min-h-[275px] transform transition-all duration-200 hover:scale-105">
          <div className="text-3xl text-blue-500 mx-auto mb-4 text-center w-fit">
            <HiUserGroup />
          </div>
          <h3 className="text-lg font-semibold mb-2">Group Booking</h3>
          <p className="text-sm">
            Monday – Friday <br />
            11.00am 
          </p>
        </div>

      </div>

        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-xl text-sm shadow">
            Book Your Tour
          </button>
        </div>

    </div>
  );
};

export default FactoryTours;
