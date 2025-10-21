'use client';

import { motion } from 'framer-motion';
import { Award, TrendingUp, BookOpen, MapPin, User } from 'lucide-react';

export default function About() {
  const credentials = [
    {
      title: 'NISM Certified Research Analyst',
      description: 'Certified by National Institute of Securities Markets',
      icon: Award,
      color: 'blue'
    },
    {
      title: 'Investment Advisor',
      description: 'Licensed investment advisory services',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'CS Honours Student',
      description: 'Pursuing Computer Science with focus on automation',
      icon: BookOpen,
      color: 'purple'
    }
  ];

  const experience = [
    {
      title: 'Equity Trading',
      duration: '2+ Years',
      description: 'Active equity trader with proven track record',
      icon: TrendingUp
    },
    {
      title: 'Data Automation',
      duration: 'Ongoing',
      description: 'Automating research processes and data analysis',
      icon: BookOpen
    },
    {
      title: 'Remote Operations',
      duration: 'Current',
      description: 'Running Virdi Research independently from India',
      icon: MapPin
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Trading' },
    { number: 'NISM', label: 'Certified' },
    { number: 'CS', label: 'Honours' },
    { number: 'India', label: 'Based' }
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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <User size={48} className="text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Jashan Singh Virdi
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NISM Certified Research Analyst & Investment Advisor. Equity trader with 2+ years of experience, 
            pursuing CS Honours and automating research processes. Running Virdi Research remotely from India.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-16 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
          <div className="relative">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              To provide institutional-grade equity research and market intelligence through data-driven analysis, 
              leveraging technology and automation to deliver precise investment insights for modern investors.
            </p>
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Credentials & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential) => {
              const IconComponent = credential.icon;
              return (
                <motion.div
                  key={credential.title}
                  variants={itemVariants}
                  className="glass glass-hover p-6 rounded-2xl text-center group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      credential.color === 'blue' ? 'bg-blue-500/20' :
                      credential.color === 'green' ? 'bg-green-500/20' :
                      'bg-purple-500/20'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent 
                      size={32} 
                      className={`${
                        credential.color === 'blue' ? 'text-blue-400' :
                        credential.color === 'green' ? 'text-green-400' :
                        'text-purple-400'
                      }`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {credential.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {credential.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Experience & Focus
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experience.map((exp) => {
              const IconComponent = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  variants={itemVariants}
                  className="glass glass-hover p-6 rounded-2xl text-center group"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-3">{exp.duration}</p>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {exp.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="glass p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-black/50" />
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="group"
              >
                <motion.h3 
                  className="text-3xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}