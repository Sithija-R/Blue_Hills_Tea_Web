import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-0">
      <div className="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-[23px] font-bold text-blue-900 mb-4">
            BLUE HILLS TEA FACTORY
          </h2>
          <p className="text-sm">
            Experience the pure essence of Ceylon tea, meticulously crafted at
            Blue Hills to deliver exceptional quality and flavor in every cup.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-gray-600 uppercase mb-4 ">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            <motion.li
              className="text-lg"
              whileHover={{ scale: 1.1, originX: 0, color: "#1D4ED8" }}
            >
              <a href="/home">Home</a>
            </motion.li>
            <motion.li
              className="text-lg"
              whileHover={{ scale: 1.1, originX: 0, color: "#1D4ED8" }}
            >
              <a href="/about">About</a>
            </motion.li>
            <motion.li
              className="text-lg"
              whileHover={{ scale: 1.1, originX: 0, color: "#1D4ED8" }}
            >
              <a href="/catalog">Tea Catalog</a>
            </motion.li>
            <motion.li
              className="text-lg"
              whileHover={{ scale: 1.1, originX: 0, color: "#1D4ED8" }}
            >
              <a href="/contact">Contact Us</a>
            </motion.li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-gray-600 uppercase mb-4 ">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            {/* Phone */}
            <motion.li
              whileHover={{}}
              className="mb-2 text-lg group cursor-pointer"
            >
              <div className="flex">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-gray-500 group-hover:text-blue-700 transition-colors"
                />
                <div className="flex flex-col">
                  <span className="font-semibold mr-1 text-gray-500">
                    Phone:
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-700 transition-colors">
                    +94 773 551 946
                  </span>
                </div>
              </div>
            </motion.li>

            {/* Email */}
            <motion.li
              whileHover={{}}
              className="mb-2 text-lg group cursor-pointer"
            >
              <div className="flex">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-2 text-gray-500 group-hover:text-blue-700 transition-colors"
                />
                <div className="flex flex-col">
                  <span className="font-semibold mr-1 text-gray-500">
                    Email:
                  </span>
                  <span className="text-gray-700 group-hover:text-blue-700 transition-colors">
                    info@bluehillstea.com
                  </span>
                </div>
              </div>
            </motion.li>

            {/* Address */}
            <motion.li whileHover={{}} className="text-lg group cursor-pointer">
              <div className="flex items-start">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-2 mt-1 text-gray-500 group-hover:text-blue-700 transition-colors"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-500">Address:</span>
                  <span className="text-gray-700 group-hover:text-blue-700 transition-colors">
                    Blue Hills Tea Factory, Pinnawala, Balangoda
                  </span>
                </div>
              </div>
            </motion.li>
          </ul>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-lg font-semibold text-gray-600 uppercase mb-4 ">
          Resources
          </h3>
          <ul className="space-y-3">
          <motion.li
  className="text-lg"
  whileHover={{ scale: 1.05, originX: 0 }}
>
  <a 
    href="http://srilankateaboard.lk/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 transition-colors"
  >
    Sri Lanka Tea Board
  </a>
</motion.li>

<motion.li
  className="text-lg"
  whileHover={{ scale: 1.05, originX: 0 }}
>
  <a 
    href="https://www.srilankabusiness.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 transition-colors"
  >
    Sri Lanka Export Development Board
  </a>
</motion.li>

<motion.li
  className="text-lg"
  whileHover={{ scale: 1.05, originX: 0 }}
>
  <a 
    href="https://www.srilankabusiness.com/tea/about-tea/quality-assurance.html"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-700 transition-colors"
  >
    Ceylon Tea Quality Standards
  </a>
</motion.li>

          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
      © Copyright {currentYear}, All Rights Reserved by Blue Hills Tea
    </div>
    </footer>
  );
};

export default Footer;
