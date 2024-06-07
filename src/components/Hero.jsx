import { styles } from "../styles";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { heroText } from "../constants/index";

const Hero = () => {
  const space = "block w-3";
  const red = "text-red-600";

  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 flex flex-col justify-center items-center gap-y-4`}
      >
        {heroText.map((line, index) => {
          let inTag = false;

          return (
            <div key={index} className="flex justify-center items-center">
              {line
                .toString()
                .split("")
                .map((char, charIndex) => {
                  if (char === "<") inTag = true;
                  if (char === ">") inTag = false;

                  const charClass =
                    inTag || char === "<" || char === ">"
                      ? red
                      : char === " "
                      ? space
                      : "";

                  return (
                    <motion.span
                      key={charIndex}
                      className={`${charClass} font-mono sm:text-lg  md:text-3xl lg:text-5xl`}
                      initial="hidden"
                      animate="show"
                      variants={fadeIn("", "", index * 1.4 + charIndex * 0.05, 0)}
                    >
                      {char}
                    </motion.span>
                  );
                })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
