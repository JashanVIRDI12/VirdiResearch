'use client';

import { motion } from 'framer-motion';

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Virdi',
      role: 'Chief Research Officer',
      description: 'Leading market research expert with 15+ years of experience',
      initials: 'SV'
    },
    {
      name: 'Michael Chen',
      role: 'Data Analytics Director', 
      description: 'Specialist in quantitative analysis and predictive modeling',
      initials: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Market Intelligence Lead',
      description: 'Expert in consumer behavior and market trend analysis',
      initials: 'ER'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pioneering new methodologies in research and analysis',
      icon: '🚀'
    },
    {
      title: 'Accuracy',
      description: 'Delivering precise, data-driven insights you can trust',
      icon: '🎯'
    },
    {
      title: 'Impact',
      description: 'Creating research that drives meaningful business decisions',
      icon: '💎'
    }
  ];

  const stats = [
    { number: '500+', label: 'Research Projects' },
    { number: '150+', label: 'Global Clients' },
    { number: '25+', label: 'Industry Sectors' },
    { number: '9', label: 'Years of Excellence' }
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            About Virdi Research
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Founded in 2015, Virdi Research has been at the forefront of market intelligence and strategic consulting, 
            helping organizations make informed decisions through comprehensive research and analysis.
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
            <h2 className="text-3xl font-bold text-white mb-4 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
              To empower businesses and organizations with actionable insights through rigorous research, 
              innovative methodologies, and deep market understanding that drives sustainable growth and competitive advantage.
            </p>
          </div>
        </motion.div>

        {/* Values */}
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
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="glass glass-hover p-6 rounded-2xl text-center group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
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
            Leadership Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="glass glass-hover p-6 rounded-2xl text-center group"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white text-2xl font-bold">
                    {member.initials}
                  </span>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {member.description}
                </p>
              </motion.div>
            ))}
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