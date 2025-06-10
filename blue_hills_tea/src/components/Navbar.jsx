import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../contents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sentinelRef = useRef(null);
  const controls = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();

  // Update active nav link on route change
  useEffect(() => {
    const currentPath = location.pathname.slice(1);
    setActive(currentPath || "home");
  }, [location.pathname]);

  // Observe scroll position to toggle sticky
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const sticky = !entry.isIntersecting;
        setIsSticky(sticky);
        controls.start(sticky ? "sticky" : "default");
      },
      {
        threshold: 0,
        rootMargin: "-1px 0px 0px 0px",
      }
    );

    if (sentinelRef.current) observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [controls]);

  const handleNavClick = (id) => {
    setActive(id);
    navigate(`/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Invisible element to detect when navbar hits top */}
      <div ref={sentinelRef} className="h-1" />

      {/* Desktop Navbar */}
      <motion.nav
        animate={controls}
        initial="default"
        variants={{
          default: {
            position: "relative",
            top: 0,
            width: "80%",
            borderRadius: "2rem",
            boxShadow: "0px 5px 40px rgba(0,0,0,0.2)",
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
          },
          sticky: {
            position: "fixed",
            top: 0,
            width: "100%",
            borderRadius: "0rem",
            boxShadow: "0px 4px 40px rgba(0,0,0,0.2)",
            y: 0,
            padding: "0.9rem 3rem",
            transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
          },
        }}
        className="z-50 left-0 bg-white px-6 py-3  justify-between items-center hidden md:flex mx-auto"
      >
        <p className="font-semibold text-lg text-[#190A9B]">
          Blue Hills Tea Factory
        </p>
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
      </motion.nav>

      {/* Mobile Navbar (Always sticky) */}
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
          className="fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-40 p-6 md:hidden"
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
