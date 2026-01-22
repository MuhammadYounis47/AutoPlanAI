import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Features from "../Features";
import HowItWorks from "../HowItWorks";
import Testimonails from "../Testimonails";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';

const sliderContent = [
  {
    content: "Design Your Dream Home with AI",
    description:
      "AutoPlan.AI instantly generates smart house layouts based on your requirements. Just enter your plot size and room preferences, and visualize your home",
  },
  {
    content: "From Idea to 3D Layout in Seconds",
    description:
      "Simply describe your house needs, and our AI transforms your prompt into a realistic 3D model. Rotate, zoom, and explore your dream home instantly.",
  },
  {
    content: "Smart, Fast & Affordable Planning",
    description:
      "AutoPlan.AI reduces cost, time, and complexity in architectural design. Generate layouts, customize features, and download your ready plan effortlessly.",
  },
];

const Grid3D = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const gridSize = 10;
  const gridLines = [];

  for (let i = -gridSize; i <= gridSize; i++) {
    gridLines.push({
      start: [-gridSize, 0, i],
      end: [gridSize, 0, i],
      color: i === 0 ? '#4ade80' : '#6b7280'
    });
  }

  for (let i = -gridSize; i <= gridSize; i++) {
    gridLines.push({
      start: [i, 0, -gridSize],
      end: [i, 0, gridSize],
      color: i === 0 ? '#4ade80' : '#6b7280'
    });
  }

  for (let i = -gridSize; i <= gridSize; i++) {
    gridLines.push({
      start: [0, -gridSize, i],
      end: [0, gridSize, i],
      color: '#374151'
    });
  }

  return (
    <group ref={groupRef}>
      {gridLines.map((line, index) => (
        <Line
          key={index}
          points={[line.start, line.end]}
          color={line.color}
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}

      <mesh position={[gridSize + 1, 0, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>
      <mesh position={[0, gridSize + 1, 0]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#22c55e" />
      </mesh>
      <mesh position={[0, 0, gridSize + 1]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshBasicMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
};

const FloatingCubes = () => {
  const cubesRef = useRef([]);

  useFrame((state) => {
    cubesRef.current.forEach((cube, index) => {
      if (cube) {
        const time = state.clock.elapsedTime;
        cube.position.y = Math.sin(time * 0.5 + index) * 0.5;
        cube.rotation.x = time * 0.2 + index;
        cube.rotation.y = time * 0.3 + index;
      }
    });
  });

  const cubePositions = [
    [3, 2, 3],
    [-3, 1, -3],
    [4, -1, -2],
    [-4, 0, 4],
    [2, -2, -4]
  ];

  return (
    <group>
      {cubePositions.map((position, index) => (
        <mesh 
          key={index} 
          position={position}
          ref={el => cubesRef.current[index] = el}
        >
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshBasicMaterial color="#f59e0b" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
};

const Home = ({ setShowModal }) => { 
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? sliderContent.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === sliderContent.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with 3D Grid */}
      <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[450px]">
            
            {/* Left Side - Text Content */}
            <div className="text-white space-y-6 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={sliderContent[current].content}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl lg:text-6xl font-extrabold text-amber-400 drop-shadow-lg leading-tight">
                    {sliderContent[current].content}
                  </h2>
                  <p className="text-gray-200 text-lg lg:text-xl max-w-2xl leading-relaxed">
                    {sliderContent[current].description}
                  </p>
                  
                  {/* CTA Button */}
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-8 py-4 bg-emerald-950 rounded-full text-white font-semibold text-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
                  >
                    Get Started Free
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center lg:justify-start gap-2 pt-4">
                {sliderContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === index ? "bg-amber-400 scale-110" : "bg-gray-400/50 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - 3D Grid */}
            <div className="h-80 lg:h-96 order-1 lg:order-2">
              <Canvas
                camera={{ position: [8, 8, 8], fov: 50 }}
                className="rounded-2xl bg-black/10 backdrop-blur-sm border border-white/10 w-full h-full"
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                
                <Grid3D />
                <FloatingCubes />
                
                {/* Camera Controls for better view */}
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
        </div>

        {/* Navigation Arrows (If you want, can style or add icons) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
          <button
            onClick={prevSlide}
            className="text-white bg-gray-700/50 hover:bg-gray-700 px-4 py-2 rounded-full shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-white bg-gray-700/50 hover:bg-gray-700 px-4 py-2 rounded-full shadow-lg"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Other Sections */}
      <section className="text-white bg-[#0C3B2E]">
        <Features />
        <HowItWorks />
        <section className=" mt-8 py-20 px-6 md:px-16 bg-emerald-900 text-white max-w-6xl mx-auto rounded-lg">
  <h2 className="text-4xl font-bold text-amber-400 mb-12 text-center">
    Why Choose AutoPlan.AI?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[
      {
        title: "Completely Free",
        desc: "Access all architectural design tools without any cost. No hidden fees or subscriptions.",
      },
      {
        title: "AI-Powered Precision",
        desc: "Generate accurate floor plans and 3D models tailored exactly to your needs, instantly.",
      },
      {
        title: "User-Friendly & Fast",
        desc: "Design smarter with a simple interface and lightning-fast AI processing for quick results.",
      },
    ].map(({ title, desc }) => (
      <div key={title} className="bg-emerald-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-amber-300 mb-4">{title}</h3>
        <p className="text-gray-300">{desc}</p>
      </div>
    ))}
  </div>
</section>

        <Testimonails />

      </section>
      
    </>
  );
};

const OrbitControls = ({ enableZoom, enablePan }) => {
  const controlsRef = useRef();

  useFrame((state) => {
    if (controlsRef.current) {
      const time = state.clock.elapsedTime;
      state.camera.position.x = Math.sin(time * 0.1) * 12;
      state.camera.position.z = Math.cos(time * 0.1) * 12;
      state.camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

export default Home;
