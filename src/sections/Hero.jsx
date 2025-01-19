import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";

import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p
          className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans
        "
        >
          {" "}
          Hi I am Nipun <span className="waving-hand">👋 </span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Projects and Startups
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva/> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          </Suspense>

          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>

            

          <HackerRoom
            //    scale={0.07}
            //    position={[0,0,0]}
            //    rotation={[0,280,0]}
            position={sizes.deskPosition} // positionX, positionY, positionZ
            rotation={[0.1, 3.2, 0.0]} // rotationX, rotationY, rotationZ
            scale={sizes.deskScale}
          />
          </HeroCamera>

          <group>
            <Target position={sizes.targetPosition} />

            <ReactLogo position={sizes.reactLogoPosition} />
            <Cube position={sizes.cubePosition} />
            <Rings position={sizes.ringPosition} />
          </group>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
    <a href="#about" className="w-fit">
        <Button
            name="Let's work together" 
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
        />
    </a>
</div>
    </section>
  );
};

export default Hero;
