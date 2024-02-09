import React, { useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { linkedin, menu, close, github } from "../assets";

import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";

const Navbar = () => {
  const [click, setClick] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={fadeIn("", "spring", 5, 0.8)}
      className={`${styles.paddingX} w-full flex 
    items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div
        className="w-full flex justify-between 
      items-center max-w-7x1 mx-auto"
      >
        <div className={`${!toggle ? "flex" : "hidden"} flex flex-row gap-10`}>
          <a href="https://www.linkedin.com/in/emre-bengu" target="_blank">
            <img src={linkedin} alt="LinkedIn" className={styles.navLinks} />
          </a>
          <a href="https://github.com/emrebengue" target="_blank">
            <img src={github} alt="LinkedIn" className={styles.navLinks} />
          </a>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` font-poppins font-medium cursor-pointer text-[23px] hover:text-[26px] ${
                click === link.title ? "text-white" : "text-secondary"
              } hover:text-white`}
              onClick={() => {
                setClick(link.title);
              }}
            >
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
          <li
            className={` font-poppins font-medium cursor-pointer text-[23px] hover:text-[26px] ${
              click === "Resume" ? "text-white" : "text-secondary"
            } hover:text-white`}
            onClick={() => {
              setClick("Resume");
            }}
          >
            <a href="../resume/EMREBENGU_resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div onClick={() => setToggle(!toggle)} className="cursor-pointer">
            <div className="relative">
              <img
                src={menu}
                alt="menu"
                className={`w-[24px] h-[24px] object-contain ${
                  toggle ? "hidden" : "block"
                }`}
              />
            </div>
            <div className="relative">
              <img
                src={close}
                alt="close"
                className={`w-[24px] h-[24px] object-contain ${
                  toggle ? "block" : "hidden"
                }`}
              />
            </div>
          </div>
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } w-full min-h-screen absolute top-full right-0 justify-center items-center bg-primary`}
            variants={slideIn("left", "spring", 0, 1)}
            initial="hidden"
            animate={toggle ? "show" : "hidden"}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-3">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={` font-poppins font-medium cursor-pointer text-[23px] hover:text-[26px] ${
                    click === link.title ? "text-white" : "text-secondary"
                  } hover:text-white`}
                  onClick={() => {
                    setToggle(!toggle);
                    setClick(link.title);
                  }}
                >
                  <a href={link.id}>{link.title}</a>
                </li>
              ))}
              <li
                className={` font-poppins font-medium cursor-pointer text-[23px] hover:text-[26px] ${
                  click === "Resume" ? "text-white" : "text-secondary"
                } hover:text-white`}
                onClick={() => {
                  setClick("Resume");
                }}
              >
                <a href="../resume/EMREBENGU_resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
