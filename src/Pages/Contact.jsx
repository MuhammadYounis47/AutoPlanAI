import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaWhatsapp, 
  FaTelegram, 
  FaLinkedin, 
  FaTwitter,
  FaHeadset,
  FaLightbulb,
  FaBug,
  FaQuestionCircle
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [activeTopic, setActiveTopic] = useState("general");

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      details: "+92 (03251228371)",
      subtitle: "Mon-Fri from 9am to 6pm",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "support@autoplan.ai",
      subtitle: "We reply within 12 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Office",
      details: "university of sindh jamshoro",
      subtitle: "sindh pakistan",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Response Time",
      details: "< 24 Hours",
      subtitle: "Average first response",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const contactTopics = [
    {
      id: "general",
      icon: <FaQuestionCircle />,
      title: "General Inquiry",
      description: "Questions about features or pricing"
    },
    {
      id: "support",
      icon: <FaHeadset />,
      title: "Technical Support",
      description: "Need help with the platform"
    },
    {
      id: "feedback",
      icon: <FaLightbulb />,
      title: "Feedback",
      description: "Share your suggestions"
    },
    {
      id: "bug",
      icon: <FaBug />,
      title: "Report Bug",
      description: "Found an issue? Let us know"
    }
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "#",
      color: "hover:bg-green-500"
    },
    {
      icon: <FaTelegram />,
      name: "Telegram",
      link: "#",
      color: "hover:bg-blue-400"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      link: "#",
      color: "hover:bg-blue-600"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      link: "#",
      color: "hover:bg-sky-400"
    }
  ];

  const faqs = [
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we provide customized AI solutions for large enterprises with specific requirements."
    },
    {
      question: "Can I schedule a demo call?",
      answer: "Absolutely! We'd love to show you how AutoPlan.AI can transform your design process."
    },
    {
      question: "What's your typical response time?",
      answer: "We respond to all inquiries within 12-24 hours during business days."
    }
  ];

  const formFields = [
    { name: "name", type: "text", placeholder: "Your full name" },
    { name: "email", type: "email", placeholder: "Your email address" },
    { name: "subject", type: "text", placeholder: "Subject" },
    { name: "message", type: "textarea", placeholder: "Describe your issue or inquiry in detail" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .send(
        "service_hf81kie",
        "template_4sukkuf",
        {
          user_name: form.name,
          user_email: form.email,
          subject: form.subject,
          message: form.message,
          topic: activeTopic
        },
        "ff31yeCcA1JYlwLbQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setSuccess(true);
          setTimeout(() => setSuccess(null), 5000);
          setForm({ name: "", email: "", message: "", subject: "" });
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#0C3B2E] text-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-[#0C3B2E] to-emerald-800 py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-amber-400 mb-6 drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your architectural design process? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              <p className="text-xl font-semibold mb-1">{item.details}</p>
              <p className="text-white/80 text-sm">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side - Contact Options & Info */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Contact Topics */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-emerald-900 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-6">How can we help?</h3>
              <div className="space-y-3">
                {contactTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setActiveTopic(topic.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      activeTopic === topic.id
                        ? 'bg-amber-500 text-white transform scale-105'
                        : 'bg-emerald-800 hover:bg-emerald-700 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{topic.icon}</span>
                      <div>
                        <div className="font-semibold">{topic.title}</div>
                        <div className="text-sm opacity-80">{topic.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-emerald-900 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`flex items-center justify-center gap-2 p-3 bg-emerald-800 rounded-lg transition-all duration-300 ${social.color} hover:text-white transform hover:scale-105`}
                  >
                    {social.icon}
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-emerald-900 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-2 border-amber-400 pl-4">
                    <h4 className="font-semibold text-white mb-1">{faq.question}</h4>
                    <p className="text-sm text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-2xl p-8 shadow-2xl"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-amber-400 mb-2">Send us a Message</h2>
                <p className="text-gray-300">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(0, 2).map((field) => (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="p-4 border border-emerald-700 bg-emerald-950 text-white rounded-xl w-full focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                      required
                    />
                  ))}
                </div>

                {formFields.slice(2).map((field) =>
                  field.type === "textarea" ? (
                    <textarea
                      key={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="p-4 border border-emerald-700 bg-emerald-950 text-white rounded-xl w-full h-40 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300 resize-none"
                      required
                    />
                  ) : (
                    <input
                      key={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="p-4 border border-emerald-700 bg-emerald-950 text-white rounded-xl w-full focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                      required
                    />
                  )
                )}

                <div className="flex items-center gap-4 p-4 bg-amber-400/10 rounded-xl border border-amber-400/20">
                  <FaHeadset className="text-amber-400 text-xl" />
                  <div>
                    <p className="text-amber-400 font-semibold">Currently discussing: {contactTopics.find(t => t.id === activeTopic)?.title}</p>
                    <p className="text-gray-300 text-sm">Your message will be directed to the appropriate team</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:scale-100 shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {success === true && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-400 text-center"
                  >
                    ✅ Message sent successfully! We'll get back to you within 24 hours.
                  </motion.div>
                )}
                {success === false && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-400 text-center"
                  >
                     Failed to send message. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

 
        </div>
     
    
  );
}