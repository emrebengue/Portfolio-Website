import React from "react";
import { BallCanvas } from "./index";
import { SectionWrapper } from "../wrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-2">
      {technologies.map((tech) => (
        <div className="w-20 h-20" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
