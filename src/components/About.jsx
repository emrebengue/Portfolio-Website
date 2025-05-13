// import React from "react";

import { motion } from "framer-motion";
// import { styles } from "../styles";
//import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../wrapper";

import { BallCanvas } from "./index";
import { technologies } from "../constants";

import { Tooltip } from "react-tooltip";

const About = () => {
  return (
    <section>
      <div className="xl:flex xl:justify-between xl:items-start">
        <motion.div className="xl:w-6/12 w-full" variants={textVariant()}>
          <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About me.</p>
          <motion.p
            variants={fadeIn("down", "", 0.5, 1)}
            className="mt-4 text-secondary text-[24px] max-w-3xl leading-9"
          >
            I have been interested in computers and how they work since childhood. 
            I have been coding for the past six years, and it's become something I truly enjoy. 
            Over time, I have explored web development, low-level programming,
            and done dozens of Hack The Box challenges. This interest has grown into something I do almost every day.
            I recently graduated from the {" "} 
            <span className="font-bold">
              <a href="https://www.uottawa.ca/en" target="_blank">
                University of Ottawa
              </a>
            </span>
            , and I am now focused on improving my skills and looking for new opportunities in tech.
          </motion.p>
        </motion.div>
        <motion.div
          className="xl:w-6/12 w-full xl:mt-0 mt-10"
          variants={textVariant()}
        >
          <p className="text-white font-black md:text-[41-px] sm:text-[36px] xs:text-[26px] text-[20px] inset-x-0 top-0 pt-4">
            Technologies that I have been using lately&nbsp;:
          </p>
          <div
            variants={fadeIn("down", "spring", 0.5, 1)}
            className="flex flex-row flex-wrap justify-start  gap-x-3 gap-y-0"
          >
            {technologies.map((tech) => (
              <div className="w-28 h-28" key={tech.name}>
                <a data-tooltip-id={tech.name}>
                  <BallCanvas icon={tech.icon} />
                  <Tooltip
                    id={tech.name}
                    content={tech.name}
                    offset={-15}
                    place="top-start"
                    style={{
                      backgroundColor: "rgb(0, 0, 28)",
                      color: "white",
                    }}
                  />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
