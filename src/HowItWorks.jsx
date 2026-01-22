import { div } from 'framer-motion/client'
import { motion } from "framer-motion";
import React from 'react'
const strucData = [
  {
    heading:"Step 1: Enter your house requirements",
    caption:"Simply type your plot size and house needs, like number of bedrooms, kitchen, or bathrooms. No technical skills required — just plain English input."
  },
  {
    heading:"Step 2: AI processes your input",
    caption:"Our AI instantly understands your prompt and creates a structured layout plan. It calculates room positions, dimensions, and overall design automatically"
  },
  {
    heading:"Step 3: Explore your 3D layout instantly",
    caption:"See your home in an interactive 3D model. Rotate, zoom, and even add windows or doors. Download or regenerate layouts with a single click"
  },
  
]

const HowItWorks = () => {
  return (
    <>
    <div className="mt-10 flex flex-col items-center justify-center space-y-0 mb-8">
    <p style={{ color: "rgba(255, 255, 255, 0.08)" }} className='text-3xl lg:text-5xl font-bold relatvie'>How it works</p>
      <h2 className='text-amber-400 font-semibold  text-2xl lg:text-4xl absolute mt-8 '>How it works</h2>
      </div>

      <div className="lg:flex lg:items-start">

  {/* Steps Column */}
  <div className="flex flex-col max-w-md mx-auto lg:w-1/2">
    {strucData.map((item, index) => (
      <div
        key={index}
        className="mt-10 px-4 space-y-2"
      >
        <h2 className="text-amber-400 text-xl lg:text-2xl">{item.heading}</h2>
        <span className="text-white lg:text-xl">{item.caption}</span>
      </div>
    ))}
  </div>

  {/* Image Column */}
  <motion.img
    src="/structure.png"
    alt="Demo home structure"
    className="max-w-[85%] lg:max-w-full h-auto mx-auto mt-10"
    animate={{
      y: [0, -10, 0], // floating effect
    }}
    transition={{
      duration: 3,
      repeat:Infinity,
      ease: "easeInOut",
    }}
  />
</div>

  </>
  )
}

export default HowItWorks
