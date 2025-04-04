import React, { useState } from "react";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../contents";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className=" z-50 w-[80%] flex justify-between items-center bg-white px-5 py-2 rounded-4xl">
      <p className="font-semibold text-lg text-[#190A9B]">
        Blue Hills Tea Factory
      </p>
      <ul className="flex gap-8 items-center ">
        {navLinks.map((link) => (
          <motion.li
            onClick={() => navigate(`/${link.id}`)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <p
              onClick={() => setActive(link.id)}
              className={`${
                active === link.id ? "text-[#190A9B]" : "text-[#484848]"
              } cursor-pointer`}
            >
              {link?.title}
            </p>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
