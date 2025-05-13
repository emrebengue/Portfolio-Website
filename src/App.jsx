import React from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Project } from "./components";

import Particles from "./components/particle_background";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Particles
          className="fixed inset-0 -z-10"
          particleColors={['#1310e0', '#10e0b6']}
          particleCount={600}
          particleSpread={10}
          speed={0.3}
          particleBaseSize={120}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Project />
      </div>
    </BrowserRouter>
  );
};

export default App;
