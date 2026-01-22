import React from 'react'
import { FaHome, FaCube, FaDownload } from "react-icons/fa";
import { motion } from 'framer-motion';
 const cards = [
    {
        icon: <FaHome className="text-amber-400 text-5xl" />,
      title: "AI-Generated Layouts",
      description:
        "Instantly generate smart house layouts by just entering your requirements. Save time and money with AutoPlan.AI.",
    },
    {
         icon: <FaCube className="text-amber-400 text-5xl" />,
      title: "Instant 3D Preview",
      description:
        "Visualize your home in 3D. Rotate, zoom, and explore your rooms before construction begins.",
    },
    {
        icon: <FaDownload className="text-amber-400 text-5xl" />,
      title: "Download & Customize",
      description:
        "Download your layouts as image/PDF or regenerate designs with custom options for windows and doors.",
    },
  ];

const Features = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center space-y-0">
    <p style={{ color: "rgba(255, 255, 255, 0.08)" }} className='lg:text-5xl text-3xl font-bold'>Features</p>
      <h2 className='text-amber-400 font-semibold text-2xl lg:text-4xl absolute mt-10 '>Features</h2>
      </div>
      {/* cards */}
      <div className=" min-h-screen items-center justify-center p-10">
      <div className=" grid grid-cols-1  gap-8 w-full lg:max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className=" relative bg-emerald-900 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition"
          initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
            <div className='flex gap-8'>
            <span className='absolute left-23 md:left-0 -top-6 md:top-4 md:relative'>{card.icon}</span>
            <div className='flex flex-col'>
            <h2 className="text-xl lg:text-2xl font-bold text-amber-400 mb-4">
              {card.title}
            </h2>
            <p className="text-white mb-4">{card.description}</p>
           </div>
           </div>
          </motion.div>
        ))}
      </div>
    </div>
    
</>  )
}

export default Features
