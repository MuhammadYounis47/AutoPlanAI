import React from 'react'
const Features = () => {
  return (
    <div className=''>
        <p style={{ color: "rgba(255, 255, 255, 0.08)" }} className='text-4xl font-bold mt-8 relative text-center'>Features</p>
      <h1 className='text-2xl font-semibold absolute left-33 bottom-0.5 text-amber-400'>Features</h1>

      {/* cards */}

     <div className="bg-blue-950 min-h-screen flex items-center justify-center p-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
    
    {/* Card 1 */}
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
      <h2 className="text-2xl font-bold text-amber-400 mb-4">AI-Generated Layouts</h2>
      <p className="text-white">
        Instantly generate smart house layouts by just entering your requirements. Save time and money with AutoPlan.AI.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
      <h2 className="text-2xl font-bold text-amber-400 mb-4">Instant 3D Preview</h2>
      <p className="text-white">
        Visualize your home in 3D. Rotate, zoom, and explore your rooms before construction begins.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition">
      <h2 className="text-2xl font-bold text-amber-400 mb-4">Download & Customize</h2>
      <p className="text-white">
        Download your layouts as image/PDF or regenerate designs with custom options for windows and doors.
      </p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Features
