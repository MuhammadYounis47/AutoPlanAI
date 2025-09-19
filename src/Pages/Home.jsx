import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Features from "./Features";

const sliderImg = [
  { imgsrc: "/s1.jpg", content: "Design Your Dream Home with AI", description: "AutoPlan.AI instantly generates smart house layouts based on your requirements just enter your plot size and rooms, and see your future home in 3D" },
  { imgsrc: "/s2.jpg", content: "From Idea to 3D Layout in Seconds", description: "Simply describe your house needs, and our AI transforms your prompt into an interactive 3D model. Rotate, zoom, and explore your home before it’s even built." },
  { imgsrc: "/s3.jpg", content: "Smart Fast & Affordable Planning", description: "AutoPlan.AI reduces time, cost, and complexity in house designing. Regenerate layouts, customize windows and doors, and download ready-to-use plans hassle-free." },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? sliderImg.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === sliderImg.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="relative w-full h-[550px] overflow-hidden bg-white/5">
      {/* Background Image */}
      <img
        src={sliderImg[current].imgsrc}
        alt={sliderImg[current].content}
        className="w-full h-full object-cover"
      />

      {/* Text overlay with animation */}
      <div className="absolute inset-0 flex flex-col items-center lg:items-start px-4 justify-center text-center">
        <AnimatePresence mode="wait">
          <div>
          <motion.h2
            key={sliderImg[current].content}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl lg:text-5xl font-bold drop-shadow-lg max-w-[500px]"
          >
            {sliderImg[current].content}
          </motion.h2>

          <motion.p
            key={sliderImg[current].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-200 mt-2 drop-shadow-md max-w-[430px] text-xl"
          >
            {sliderImg[current].description}
          </motion.p>
          </div>
        </AnimatePresence>
      </div>

      {/* Buttons */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button
          onClick={prevSlide} > 
        </button>
        <button
          onClick={nextSlide}></button>
      </div>

       

        

    </div>
 {/* sections */}
 <Features/>

    </>
  );
};

export default Home;
