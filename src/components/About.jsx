import { React } from "react";

import { motion } from "framer-motion";
import { styles } from "../styles";
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
          <p className={styles.HeadText}>Introduction.</p>
          <motion.p
            variants={fadeIn("down", "", 0.5, 1)}
            className={styles.sectionAbout}
          >
            I'm currently in my fourth year at{" "}
            <span className="font-bold">
              <a href="#  " target="_blank">
                University of Ottawa
              </a>
            </span>
            , and I am truly passionate about coding, cybersecurity, and Linux
            systems. I first delved into coding during my freshman year, and my
            aim is not just to learn but to thrive in this field. As a quick
            learner and a team player, I'm always up for new challenges. At this
            moment, I'm actively seeking opportunities to continue honing my
            skills in software engineering and cybersecurity.
          </motion.p>
        </motion.div>
        <motion.div
          className="xl:w-6/12 w-full xl:mt-0 mt-10"
          variants={textVariant()}
        >
          <p className={styles.Techtext}>
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
          {/* <div className='mt-5 flex flex-wrap gap-8'>
            {services.map((service, index) => (
            <ServiceList key={service.title} index = {index} {...service} />
            ))}
          </div> */}
        </motion.div>
      </div>
      {/* <div className='mt-9 flex max-w-3xl leading-5 '>
        <p className='font-bold italic  text-secondary text-[18px]'>
          
        </p>
      </div> */}
    </section>
  );
};

export default SectionWrapper(About, "about");
