import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaGooglePlay,
  FaApple,
  FaShieldAlt,
  FaLock,
  FaRocket,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const Footer = () => {
  const [openSections, setOpenSections] = useState({});
  
  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const description = [
    {
      caption: "AutoPlan.AI is an AI-powered platform that creates house layouts from simple prompts. It offers instant 3D visualization with Three.js. Fast, affordable, and user-friendly. Designed for homeowners, students, and builders.",
    },
  ];

  const links = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  const services = [
    { label: "AI House Design" },
    { label: "3D Visualization" },
    { label: "Floor Plans" },
    { label: "Architect Tools" },
  ];

  const support = [
    { label: "Help Center" },
    { label: "Documentation" },
    { label: "Video Tutorials" },
    { label: "Community" },
  ];

  const legal = [
    { label: "Privacy Policy" },
    { label: "Terms of Service" },
    { label: "Cookie Policy" },
    { label: "GDPR Compliance" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, url: "#", color: "hover:bg-sky-400" },
    { icon: <FaLinkedinIn />, url: "#", color: "hover:bg-blue-700" },
    { icon: <FaInstagram />, url: "#", color: "hover:bg-pink-600" },
    { icon: <FaYoutube />, url: "#", color: "hover:bg-red-600" },
  ];

  const features = [
    "AI-Powered Designs",
    "Instant 3D Models",
    "Build-Ready Plans",
    "24/7 Support"
  ];

  const currentYear = new Date().getFullYear();

  // Mobile Accordion Sections
  const mobileSections = [
    {
      id: "quick-links",
      title: "Quick Links",
      content: links,
      icon: <div className="w-1 h-4 bg-amber-400 rounded"></div>
    },
    {
      id: "services",
      title: "Services",
      content: services,
      icon: <div className="w-1 h-4 bg-amber-400 rounded"></div>
    },
    {
      id: "support",
      title: "Support",
      content: support,
      icon: <div className="w-1 h-4 bg-amber-400 rounded"></div>
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Desktop View */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <FaRocket className="text-white text-sm sm:text-lg" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-amber-400">AutoPlan.AI</h1>
            </div>
            
            {description.map((item, index) => (
              <p key={index} className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                {item.caption}
              </p>
            ))}

            {/* Features List */}
            <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white text-sm sm:text-base`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-amber-400 rounded"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-amber-400 rounded"></div>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <div className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group text-sm cursor-pointer">
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-amber-400 rounded"></div>
              Support
            </h3>
            <ul className="space-y-3">
              {support.map((item, idx) => (
                <li key={idx}>
                  <div className="text-gray-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group text-sm cursor-pointer">
                    <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Desktop */}
          
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-4">
          {/* Company Info - Always visible on mobile */}
          <div className="bg-gray-800/30 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <FaRocket className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold text-amber-400">AutoPlan.AI</h1>
            </div>
            
            {description.map((item, index) => (
              <p key={index} className="text-gray-300 leading-relaxed text-sm mb-4">
                {item.caption}
              </p>
            ))}

            {/* Features List */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-300 text-xs">{feature}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-2 justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color} hover:text-white text-sm`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Accordion Sections */}
          {mobileSections.map((section) => (
            <div key={section.id} className="bg-gray-800/30 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {section.icon}
                  <h3 className="font-semibold text-white text-sm">{section.title}</h3>
                </div>
                {openSections[section.id] ? <FaChevronUp className="text-amber-400" /> : <FaChevronDown className="text-amber-400" />}
              </button>
              
              {openSections[section.id] && (
                <div className="px-4 pb-3">
                  <ul className="space-y-2">
                    {section.content.map((item, idx) => (
                      <li key={idx}>
                        <div className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group text-sm py-1">
                          <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                          {item.label}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* Contact Info - Mobile */}
          <div className="bg-gray-800/30 rounded-lg p-4">
            <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
              <div className="w-1 h-4 bg-amber-400 rounded"></div>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-amber-400 text-xs" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs">123 Design Street</p>
                  <p className="text-gray-300 text-xs">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-amber-400 text-xs" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 9AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amber-500/20 rounded flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-amber-400 text-xs" />
                </div>
                <div>
                  <p className="text-gray-300 text-xs">support@autoplan.ai</p>
                  <p className="text-gray-400 text-xs">24/7 Support</p>
                </div>
              </div>
            </div>

            {/* App Download Buttons - Mobile */}
            <div className="mt-4 space-y-2">
              <button className="w-full flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 transition-all duration-300 group">
                <FaGooglePlay className="text-xl text-amber-400" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-white text-xs font-semibold">Google Play</div>
                </div>
              </button>
              
              <button className="w-full flex items-center gap-2 bg-gray-800 hover:bg-gray-700 rounded-lg p-2 transition-all duration-300 group">
                <FaApple className="text-xl text-amber-400" />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on</div>
                  <div className="text-white text-xs font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-8 pt-6 sm:mt-12 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm sm:text-base">Subscribe for latest updates and features.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-400 transition-colors text-sm sm:text-base"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              <span>© {currentYear} AutoPlan.AI. All rights reserved.</span>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {legal.map((item, index) => (
                  <div
                    key={index}
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
              <div className="flex items-center gap-1 sm:gap-2">
                <FaLock className="text-green-400 text-xs" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <FaShieldAlt className="text-blue-400 text-xs" />
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Footer;