'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { TrendingUp, BarChart3, Target, ArrowRight } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const services = [
    {
      title: "Market Analysis",
      description: "Institutional-grade equity research and sector analysis.",
      icon: TrendingUp,
      route: "/research",
      color: "blue"
    },
    {
      title: "Research Reports",
      description: "Comprehensive analysis and investment recommendations.",
      icon: BarChart3,
      route: "/research",
      color: "purple"
    },
    {
      title: "Strategic Consulting",
      description: "Custom research and valuation for investors.",
      icon: Target,
      route: "/contact",
      color: "emerald"
    }
  ];

  const handleServiceClick = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-black relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />

      {/* Minimal floating elements */}
      <div className="absolute inset-0">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center pt-24 sm:pt-32 pb-12 sm:pb-20 px-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-white/60 via-white/80 to-white/60 bg-clip-text text-transparent leading-tight"
          >
            Virdi Research
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            Institutional-grade research and market intelligence for modern investors.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.button
              onClick={() => router.push('/research')}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white font-medium overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                Explore Research
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>

            <motion.button
              onClick={() => router.push('/about')}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white font-medium overflow-hidden w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                About Us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-12 sm:pb-20 px-4"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleServiceClick(service.route)}
              >
                {/* Hover background */}
                <motion.div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${service.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10' :
                    service.color === 'purple' ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' :
                      'bg-gradient-to-br from-emerald-500/10 to-green-500/10'
                    }`}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 sm:mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${service.color === 'blue' ? 'bg-blue-500/20' :
                      service.color === 'purple' ? 'bg-purple-500/20' :
                        'bg-emerald-500/20'
                      }`}>
                      <IconComponent
                        size={28}
                        className={`sm:w-8 sm:h-8 ${service.color === 'blue' ? 'text-blue-400' :
                          service.color === 'purple' ? 'text-purple-400' :
                            'text-emerald-400'
                          }`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white text-center">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 text-center leading-relaxed mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Action indicator */}
                  <motion.div
                    className="flex items-center justify-center text-gray-500 group-hover:text-white transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </div>
  );
}