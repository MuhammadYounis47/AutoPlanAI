import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Boxes, Building2, Ruler, Wand2, Layers } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-[#0C3B2E] text-white">

      {/* HERO SECTION */}
      <section className="py-20 text-center px-6 md:px-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          AI-Powered Architectural Services
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Transform your ideas into professional architectural layouts, 3D
          visualizations, and construction-ready blueprints — instantly powered
          by AutoPlan.AI.
        </motion.p>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 md:px-16">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our AI Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{
            icon: <Ruler className="w-12 h-12 text-amber-400 mb-4" />,
            title: "AI Floor Plan Generator",
            desc: "Generate accurate & optimized 2D floor plans instantly."
          }, {
            icon: <Boxes className="w-12 h-12 text-amber-400 mb-4" />,
            title: "3D Architecture Visualization",
            desc: "Convert sketches into photorealistic 3D renders."
          }, {
            icon: <Wand2 className="w-12 h-12 text-amber-400 mb-4" />,
            title: "AI Interior Design Assistant",
            desc: "AI redesigns your room with modern themes."
          }, {
            icon: <Layers className="w-12 h-12 text-amber-400 mb-4" />,
            title: "Construction Blueprint Generator",
            desc: "Generate electrical & plumbing plans automatically."
          }, {
            icon: <Building2 className="w-12 h-12 text-amber-400 mb-4" />,
            title: "Commercial Layouts",
            desc: "Office, clinic & hospital AI-optimized layouts."
          }, {
            icon: <Sparkles className="w-12 h-12 text-amber-400 mb-4" />,
            title: "Smart Cost Estimation",
            desc: "AI-based material & labour estimation."
          }].map(({icon, title, desc}, i) => (
            <motion.div
              key={i}
              className="p-8 bg-emerald-800 rounded-xl shadow-lg border border-emerald-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {icon}
              <h3 className="text-2xl font-semibold text-amber-300 mb-2">{title}</h3>
              <p className="text-gray-200">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-6 md:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-amber-300 px-4 py-2 rounded-full font-bold text-sm inline-block shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Don't Miss!
            </motion.span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <motion.span
                className="text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Ready to
              </motion.span>
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Design Smarter?
              </motion.span>
            </h1>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              AutoPlan.AI revolutionizes architectural design by turning your ideas
              into smart, precise and build-ready plans within seconds. Powered by
              advanced AI automation, we help homeowners, architects and businesses
              design faster.
            </motion.p>

            {/* Features List */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {["AI-Powered Designs", "Instant Results", "Build-Ready Plans", "24/7 Support"].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-3"
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-6 mt-8 pt-6 border-t border-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">245%</div>
                <div className="text-sm text-gray-400">Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">10K+</div>
                <div className="text-sm text-gray-400">Plans Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">99%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="service.jpg"
                alt="AutoPlan Service"
                className="w-full max-w-md rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Floating Label */}
            <motion.div
              className="mb absolute -bottom-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg z-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Fast Results
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 rounded-2xl blur-xl -z-10"></div>
          </motion.div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-16 bg-[#0A3327]">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-amber-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {[
            { step: "1️⃣", title: "Enter Dimensions", desc: "Add plot/room size." },
            { step: "2️⃣", title: "Select Style", desc: "Choose your design theme." },
            { step: "3️⃣", title: "AI Generates Layout", desc: "2D & 3D output." },
            { step: "4️⃣", title: "Download Plan", desc: "PDF / JPG / CAD export." },
          ].map(({ step, title, desc }, i) => (
            <motion.div
              key={i}
              className="p-6 bg-emerald-800 rounded-lg shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <span className="text-5xl">{step}</span>
              <h3 className="text-xl font-bold text-amber-300 mt-2">{title}</h3>
              <p className="text-gray-300 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
