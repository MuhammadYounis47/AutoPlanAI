import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-[#0C3B2E] text-white">

      {/* Hero Section */}
      <motion.section
        className="relative bg-[#0C3B2E] bg-opacity-90"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="backdrop-brightness-50 py-32 flex justify-center items-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-amber-400 drop-shadow-lg"
            {...fadeUp}
          >
            About Us
          </motion.h1>
        </div>
      </motion.section>

      {/* Future Vision Section */}
      <motion.section
        className="py-16 md:py-20 bg-emerald-900"
        {...fadeUp}
      >
        <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold text-amber-300 mb-6">
              Future Vision
            </h2>

            <p className="text-white leading-relaxed text-base md:text-lg mb-6">
              Our goal is to transform AutoPlan.AI into a complete architectural
              intelligence system — generating construction-ready blueprints,
              smart interior layouts, 3D visualizations and energy-efficient
              building recommendations using advanced AI automation.
            </p>

            <p className="text-white leading-relaxed text-base md:text-lg mb-6">
              Whether it's home architecture, commercial designs or hospital planning,
              AutoPlan.AI aims to provide fast, accurate, real-time design assistance
              for everyone — from architects to students.
            </p>

            {/* FUTURE STATS */}
            <div className="flex flex-wrap gap-6 md:gap-10 mt-6">
              {[
                { title: "500+", desc: "AI Generated Floor Plans" },
                { title: "98%", desc: "User Satisfaction" },
                { title: "AI 2.0", desc: "Next-Gen Engine" },
              ].map(({ title, desc }, i) => (
                <motion.div
                  key={title}
                  className="text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-300">{title}</h3>
                  <p className="text-white text-sm md:text-base">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="relative flex justify-center md:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="about main.jpg!w700wp"
              alt="AI Architecture"
              className="rounded-xl w-full shadow-lg"
            />

            <img
              src="about main2.jpg"
              alt="3D Layout"
              className="
                absolute
                w-40 sm:w-52 md:w-60
                rounded-xl shadow-xl
                border-4 border-white
                -bottom-4 sm:-bottom-6
                left-1/2 md:left-auto md:-left-6
                transform -translate-x-1/2 md:translate-x-0
              "
            />

            <div
              className="
                absolute 
                top-3 sm:top-6 
                left-3 sm:left-6 
                bg-emerald-700 
                text-white 
                px-4 py-2 sm:py-3 
                rounded-full 
                shadow-md 
                text-center 
                text-xs sm:text-sm
              "
            >
              <span className="block text-lg sm:text-xl font-bold">AI</span>
              Powered
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        className="container mx-auto px-6 md:px-20 py-24"
        {...fadeUp}
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            className="relative w-full flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl w-[90%] h-[90%]">
              <img
                src="scontect.webp"
                alt="AutoPlan AI"
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="absolute -bottom-8 md:left-20 rounded-xl overflow-hidden shadow-lg border-4 border-white w-40 h-28">
              <img
                src="s1content.webp"
                alt="AutoPlan small"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-6 right-16 bg-white shadow-md px-4 py-3 rounded-xl text-center">
              <span className="text-yellow-500 text-xl font-bold">⭐</span>
              <p className="text-gray-800 font-semibold">AI Excellence</p>
              <p className="text-xs text-gray-600">Smart Architecture</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-emerald-50 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Since 2024
            </div>

            <h2 className="text-4xl font-bold text-amber-300 leading-tight mb-4">
              Where Smart Architecture Meets Modern AI  
            </h2>

            <p className="text-white leading-relaxed mb-6">
              AutoPlan.AI combines next-generation artificial intelligence with modern
              architectural principles. From automated floor plans to smart 3D layouts,
              our platform evolves continuously to make home and commercial planning easier,
              faster and beautifully accurate.
            </p>

            <p className="text-white leading-relaxed mb-10">
              Our mission is simple — empower everyone with intelligent design tools that
              were once only available to architects.
            </p>

            <div className="space-y-8">
              {[{
                year: "2024",
                title: "AutoPlan.AI Launch",
                desc: "AI-powered floor plans introduced."
              }, {
                year: "2025",
                title: "3D Visualization Upgrade",
                desc: "High-quality 3D layouts for homes & offices."
              }, {
                year: "2026",
                title: "Smart Recommendations",
                desc: "Energy-efficient & space-optimized AI design."
              }].map(({year, title, desc}, i) => (
                <motion.div
                  key={year}
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 * i }}
                >
                  <div className="text-amber-300 font-bold text-xl">{year}</div>
                  <div>
                    <h4 className="font-semibold text-white">{title}</h4>
                    <p className="text-white text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission / Values Section */}
      <motion.section
        className="bg-[#0C3B2E] py-20"
        {...fadeUp}
      >
        <div className="container mx-auto px-6 md:px-20 text-center">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-amber-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            What Drives Us
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <motion.div
              className="bg-emerald-950 rounded-lg p-8 shadow-lg border border-blue-700 hover:border-amber-400 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold text-amber-400 mb-4">
                Innovation
              </h4>
              <p className="text-gray-300 leading-relaxed">
                We push the boundaries of AI and architecture to create tools that
                make design smarter, faster, and more efficient.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-emerald-950 rounded-lg p-8 shadow-lg border border-blue-700 hover:border-amber-400 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h4 className="text-xl font-semibold text-amber-400 mb-4">
                User Focus
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Our platform is designed for simplicity — anyone can generate
                professional layouts without technical knowledge.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-emerald-950 rounded-lg p-8 shadow-lg border border-blue-700 hover:border-amber-400 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-amber-400 mb-4">
                Quality
              </h4>
              <p className="text-gray-300 leading-relaxed">
                Every generated layout is optimized for realism, accuracy, and
                practical design flow — because every detail matters.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 bg-[#0C3B2E]"
        {...fadeUp}
      >
        <div className="container mx-auto px-6 md:px-20 text-center">
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-amber-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Meet Our Team
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                src: "pr.png",
                name: "Muhammad Younis",
                role: "Full Stack Developer",
              },
              {
                src: "hameed.jpg",
                name: "Ab Hameed",
                role: "Backend Developer",
              },
              {
                src: "saqib.jpg",
                name: "Saqib",
                role: "AI Integration & Logic",
              },
            ].map(({ src, name, role }, i) => (
              <motion.div
                key={name}
                className="relative w-full rounded-xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 * i }}
              >
                <img
                  src={src}
                  alt={name}
                  className="w-full h-auto object-cover rounded-lg"
                />

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-emerald-900/90 text-center py-3 rounded-md shadow-md">
                  <h4 className="text-xl font-semibold text-amber-400">{name}</h4>
                  <p className="text-gray-200 text-sm">{role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
