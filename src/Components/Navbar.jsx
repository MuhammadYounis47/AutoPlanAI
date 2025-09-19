import React, { useState } from 'react'
import { Link, useLocation} from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { IoIosHome } from "react-icons/io";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [user,setUser] = useState([])
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })
  
  
        // onChange
  const handleUserData = (e)=>{
    
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })      
  }

      //Login form submit
    const userData = (e)=>{
      e.preventDefault();
      if(!formData.email && !formData.password){
      alert("please fill the fields!")
    }
      console.log("form submited",formData)
        
    // api call here
    setUser([...user,formData])
    setFormData({email:"",password:""})
    }


    // signupFrom submit
    const userDataSignup = (e) =>{
        e.preventDefault();
        
        if(!formData.name && !formData.email && !formData.password){
          alert("Please fill all fields")
          return
        }
        
        setUser([...user,formData])
        console.log(formData)
        setShowModal(false)
        setFormData({name:"",email:"",password:""})
    }

    // hover effect
      const locaton = useLocation()
     const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About us" },
    { path: "/contact", label: "Contact us" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className='w-full bg-black px-2 pl-0 flex justify-between items-center shadow'>
        <div className='flex text-white items-center gap-2'>
         
          <img src='/c.jpg' alt="" className='w-30 h-20 object-cover mix-blend-color-screen cursor-pointer'/>
        </div>
        {/* Desktop Menu */}
         <ul className="text-white justify-center items-center gap-6 font-semibold hidden lg:flex">
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} className="relative group">
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-green-500 transition-all duration-500
                  ${
                    location.pathname === link.path
                      ? "w-full" // Active link -> hamesha line visible
                      : "w-0 group-hover:w-full" // Normal link -> hover pe line 
                  }`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>

        {/* Desktop Login Button */}
        <div className='hidden lg:flex'>
          <button 
            onClick={() => setShowModal(true)}
            className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 font-semibold cursor-pointer'
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className='text-white text-2xl lg:hidden'
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white flex flex-col px-7 font-semibold space-y-4 py-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
          {/* <button 
            onClick={() => { setShowModal(true); setMenuOpen(false); }}
            className='bg-green-600 px-4 py-2 rounded hover:bg-green-700 font-semibold cursor-pointer'
          >
            Login
          </button> */}
        </div>
      )}

      {/* Modal (Login & Signup) */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg w-96 p-6 relative'>
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl cursor-pointer"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className='text-2xl font-semibold mb-4 text-center'>
              {isLogin ? "Login" : "Signup"}
            </h2>

            {/* Form */}
            {isLogin ? (
              <form className="space-y-4" onSubmit={userData}>
                <div>
                  <label className='block mb-1 font-medium'>Email</label>
                  <input 
                  onChange={handleUserData}
                  name='email'
                    type="email"
                    value={formData.email}
                    className='w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300' required
                  />
                </div>
                <div>
                  <label className='block mb-1 font-medium'>Password</label>
                  <input 
                  onChange={handleUserData}
                  name='password'
                    type="password" 
                    value={formData.password}
                    className='w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-green-300' required
                  />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer">
                  Login
                </button>

                {/* Switch to Signup */}
                <p className="text-center text-sm mt-3">
                  Don’t have an account?{" "}
                  <span 
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => setIsLogin(false)}
                  >
                    Signup
                  </span>
                </p>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={userDataSignup}>
                <div>
                  <label className="block mb-1 font-medium">Full Name</label>
                  <input
                  onChange={handleUserData}
                  name='name'
                  value={formData.name} type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" required/>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                  onChange={handleUserData}
                  name='email'
                  value={formData.email}
                  type="email" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" required/>
                </div>
                <div>
                  <label className="block mb-1 font-medium">Password</label>
                  <input
                  onChange={handleUserData}
                  name='password'
                  value={formData.password} type="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300" required/>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                  Signup
                </button>

                {/* Switch to Login */}
                <p className="text-center text-sm mt-3">
                  Already have an account?{" "}
                  <span 
                    className="text-green-600 cursor-pointer hover:underline"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
