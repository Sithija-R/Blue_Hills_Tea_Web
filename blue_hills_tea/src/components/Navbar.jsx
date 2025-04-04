import React, { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { navLinks } from "../contents";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className=" z-50 w-[80%] flex justify-between items-center bg-white px-5 py-2 rounded-4xl">
      <p className="font-semibold text-lg text-[#190A9B]">
        Blue Hills Tea Factory
      </p>
      <ul className="flex gap-8 items-center ">
        {navLinks.map((link) => (
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{scale:0.9}}>
            <Link
              onClick={() => setActive(link.id)}
              to={link?.id}
              className={`${
                active === link.id ? "text-[#190A9B]" : "text-[#484848]"
              }`}
            >
              {link?.title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
