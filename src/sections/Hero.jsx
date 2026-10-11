import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";

import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import useInView from "../hooks/useInView";
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
  const [sectionRef, isInView] = useInView({ threshold: 0.02, rootMargin: '150px' });

  return (
    <section ref={sectionRef} className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-24 mt-16 c-space gap-4 z-20 pointer-events-none">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Nipun <span className="waving-hand">👋 </span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Applied Scientist & AI Engineer
        </p>
        <div className="flex justify-center -mt-1 px-2">
          <p className="inline-block px-4 py-2 sm:px-5 rounded-2xl sm:rounded-full bg-black-200/90 border border-black-300/80 backdrop-blur-md shadow-2xl text-center text-xs sm:text-sm md:text-base font-semibold text-neutral-200 tracking-wide max-w-full">
            Architecting LLM Multi-Agent Systems, RAG Platforms & Scalable AI
          </p>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas
          className="w-full h-full"
          dpr={[1, 1.5]}
          frameloop={isInView ? 'always' : 'never'}
          gl={{ powerPreference: 'high-performance', antialias: true, alpha: true, stencil: false }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          </Suspense>

          <HeroCamera isMobile={isMobile}>
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[0.1, 3.2, 0.0]}
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
            name="Explore My Work"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
