// import { styles } from "../styles";
// import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { heroText } from "../constants/index";


const Hero = () => {

  const space = "block w-3";
  const orange = "text-amber-600";
  const italic = "italic";
  const green = "text-green-700"
  const red  = "text-red-600";
  const light_blue = "text-blue-600";
  const regularFontSize  = "lg:text-5xl";
  // const medFontSize = "md:text-3xl";
  const smallFontSize = "sm:text-xl";

  return (
    <section className="relative w-full h-screen">
      <div
        className={`sm:px-16 px-6 absolute inset-0 flex flex-col justify-center items-center gap-y-4`}
      >
        {
        heroText.map((line, index) => {
          let jk = false;
          let type_green = false;
          // let type_orange = false;
          let type_red = false;
          let type_light_blue = false;
          let lastline = index === heroText.length-1;
          let fontSize = regularFontSize;
          return (
            <div key={index} className="flex justify-center items-center">
              {
              line
                .toString()
                .split("")
                .map((char, charIndex) => {
                  if (char === '*'){
                    jk = !jk;
                    return null;
                  }
                  else if (char === '&'){
                    type_green = !type_green;
                    return null;
                  }
                  else if (char === "^"){
                    type_red = !type_red;
                    return null;
                  }
                  else if (char == "%"){
                    type_light_blue = !type_light_blue;
                    return null;
                  }
                  if (lastline) {
                    fontSize = smallFontSize;
                  }

                  const typedCharstyle = char === " "
                      ? space
                      : jk
                      ? italic
                      : type_green
                      ? green
                      : type_light_blue
                      ? light_blue
                      : type_red
                      ? red
                      : "";

                  return (
                    <motion.span
                      key={charIndex}
                      className={`${typedCharstyle} font-mono ${fontSize}`}
                      initial="hidden"
                      animate="show"
                      variants={fadeIn("", "", index * 1.3 + charIndex * 0.025, 0)}
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
