import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Set active tab based on current URL
  useEffect(() => {
    const currentPath = location.pathname.slice(1); // Remove leading "/"
    setActive(currentPath || "home"); // Default to "" if homepage
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setActive(id);
    navigate(`/${id}`);
    setIsOpen(false); // Close sidebar on click
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="z-50 w-[80%] justify-between items-center bg-white px-5 py-2 rounded-4xl md:flex hidden shadow-lg">
        <p className="font-semibold text-lg text-[#190A9B]">
          Blue Hills Tea Factory
        </p>
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p
                className={`${
                  active === link.id ? "text-[#2563EB]" : "text-[#484848]"
                } cursor-pointer text-lg`}
              >
                {link.title}
              </p>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <div className="z-50 w-full flex justify-between items-center bg-white px-5 py-3 md:hidden shadow-md fixed top-0 left-0">
        <p className="font-semibold text-lg text-[#190A9B]">
          Blue Hills Tea Factory
        </p>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="fixed top-0 right-0 h-full w-1/2 sm:w-1/2 bg-white shadow-lg z-40 p-6 md:hidden"
        >
          <ul className="flex flex-col gap-6 mt-16">
            {navLinks.map((link) => (
              <li key={link.id}>
                <p
                  onClick={() => handleNavClick(link.id)}
                  className={`${
                    active === link.id ? "text-[#2563EB]" : "text-[#484848]"
                  } cursor-pointer text-lg`}
                >
                  {link.title}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
