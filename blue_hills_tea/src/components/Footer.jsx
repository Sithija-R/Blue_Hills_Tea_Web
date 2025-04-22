import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-0">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-[23px] font-bold text-blue-900 mb-4">
            BLUE HILL TEA FACTORY
          </h2>
          <p className="text-sm">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Help</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#">Customer Support</a></li>
            <li><a href="#" >Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase mb-4">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
        © Copyright 2025, All Rights Reserved by Team11
      </div>
    </footer>
  );
};

export default Footer;
