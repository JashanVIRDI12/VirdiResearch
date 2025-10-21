'use client';

import { motion } from 'framer-motion';
import { Download, FileText, TrendingUp, DollarSign, Building2 } from 'lucide-react';

export default function Research() {
  const reports = [
    {
      title: "Yes Bank Comprehensive Analysis",
      description: "In-depth financial analysis and investment outlook for Yes Bank",
      filename: "YesBank_Comprehensive_Report_Virdi_Research.pdf",
      type: "Equity Research",
      date: "2025",
      icon: Building2,
      color: "blue"
    },
    {
      title: "Gold Market Report Q3 2025",
      description: "Quarterly analysis of gold market trends and price forecasts",
      filename: "Gold_Market_Report_Q3_2025.pdf",
      type: "Commodity Research",
      date: "Q3 2025",
      icon: DollarSign,
      color: "yellow"
    },
    {
      title: "EUR/USD FX Research Note",
      description: "Foreign exchange analysis and trading recommendations",
      filename: "EUR_USD FX Research Note - Jashan Singh - EURUSD_FX_Research_Note_JashanSingh-1.pdf",
      type: "FX Research",
      date: "2025",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Blackbuck Stock Research",
      description: "Comprehensive stock analysis and investment thesis",
      filename: "Blackbuck Stock Research Report Request.docx",
      type: "Equity Research",
      date: "2025",
      icon: Building2,
      color: "purple"
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

  const handleDownload = (filename: string, title: string) => {
    const link = document.createElement('a');
    link.href = `/reports/${filename}`;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-black to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white/60 via-white to-white/60 bg-clip-text text-transparent">
            Research Reports
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Access our 2025 institutional-grade research reports and market analysis
          </p>
        </motion.div>

        {/* Featured Reports */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-white mb-8">2025 Research Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report, index) => {
              const IconComponent = report.icon;
              return (
                <motion.div
                  key={report.title}
                  variants={itemVariants}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl cursor-pointer overflow-hidden"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Hover background */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${
                      report.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10' :
                      report.color === 'yellow' ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10' :
                      report.color === 'green' ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10' :
                      'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${
                        report.color === 'blue' ? 'bg-blue-500/20' :
                        report.color === 'yellow' ? 'bg-yellow-500/20' :
                        report.color === 'green' ? 'bg-green-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        <IconComponent 
                          size={24} 
                          className={`${
                            report.color === 'blue' ? 'text-blue-400' :
                            report.color === 'yellow' ? 'text-yellow-400' :
                            report.color === 'green' ? 'text-green-400' :
                            'text-purple-400'
                          }`}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          report.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                          report.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' :
                          report.color === 'green' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        }`}>
                          {report.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {report.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {report.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{report.date}</span>
                      <motion.button
                        onClick={() => handleDownload(report.filename, report.title)}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg text-white font-medium hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>



        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl max-w-2xl mx-auto">
            <FileText size={48} className="text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Custom Research?
            </h3>
            <p className="text-gray-400 mb-6">
              Get tailored research reports and analysis for your specific investment needs.
            </p>
            <motion.button
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 font-medium hover:bg-blue-500/30 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Report
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}