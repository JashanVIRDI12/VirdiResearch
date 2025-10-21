'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, MapPin, Clock, User, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'jashan@virdiresearch.com',
      icon: Mail,
      color: 'blue'
    },
    {
      title: 'Location',
      value: 'India\n(Remote Operations)',
      icon: MapPin,
      color: 'green'
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours\nIST Business Hours',
      icon: Clock,
      color: 'purple'
    },
    {
      title: 'Consultation',
      value: 'Research & Investment\nAdvisory Services',
      icon: User,
      color: 'orange'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-black to-pink-900/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <MessageSquare size={24} className="sm:w-8 sm:h-8 text-white" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Ready to elevate your investment strategy? Connect with Jashan Singh Virdi for professional research and advisory services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-6 sm:p-8 rounded-xl sm:rounded-2xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Send size={20} className="sm:w-6 sm:h-6 text-blue-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Send a Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your email address"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 text-sm sm:text-base"
                  placeholder="Enter your company name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 glass rounded-lg sm:rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us about your project or inquiry..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full glass glass-hover py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="glass p-6 sm:p-8 rounded-xl sm:rounded-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <User size={20} className="sm:w-6 sm:h-6 text-purple-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white">Contact Information</h2>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="flex items-start space-x-3 sm:space-x-4 p-2 sm:p-3 glass-hover rounded-lg sm:rounded-xl group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className={`p-2 rounded-lg sm:rounded-xl ${
                          info.color === 'blue' ? 'bg-blue-500/20' :
                          info.color === 'green' ? 'bg-green-500/20' :
                          info.color === 'purple' ? 'bg-purple-500/20' :
                          'bg-orange-500/20'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          size={18} 
                          className={`sm:w-5 sm:h-5 ${
                            info.color === 'blue' ? 'text-blue-400' :
                            info.color === 'green' ? 'text-green-400' :
                            info.color === 'purple' ? 'text-purple-400' :
                            'text-orange-400'
                          }`}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 whitespace-pre-line group-hover:text-gray-300 transition-colors duration-300 text-xs sm:text-sm">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              className="glass p-6 sm:p-8 rounded-xl sm:rounded-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
              <div className="relative">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Ready for Professional Investment Advisory?</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get NISM-certified research analysis and investment advisory services tailored to your portfolio needs. 
                  Leveraging 2+ years of equity trading experience and automated data insights.
                </p>
                <motion.button
                  className="glass glass-hover px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-white bg-gradient-to-r from-white/10 to-blue-500/20 border border-white/20 flex items-center gap-2 text-sm sm:text-base"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User size={16} className="sm:w-[18px] sm:h-[18px]" />
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}