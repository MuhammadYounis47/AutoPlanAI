import { useState } from 'react'
import Navbar from './Components/Navbar'
import {Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
      <div className='h-screen bg-blue-950'>
      <Navbar/>
    
        <Routes>
          {/* public pages */}
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

            {/* Dashboard pages */}
            

        </Routes>
        
      </div>
      
    </>
  )
}

export default App
