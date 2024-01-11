import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";

// Ball.jsx
const Ball = ({ icon }) => {
  const [decalTexture] = useTexture([icon]);

  return (
    <Float
      speed={1}
      rotationIntensity={1}
      floatIntensity={2}
      // floatingRange={[-0.2, 0.2]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[-1, -3, 2]} />
      <mesh castShadow receiveShadow scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          scale={1.3}
          map={decalTexture}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
