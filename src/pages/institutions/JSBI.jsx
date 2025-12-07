import React from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuTrendingUp, LuExternalLink, LuBriefcase } from 'react-icons/lu';

const JSBI = () => {
  const brandColors = {
    primary: '#FFD700', // Yellow
    secondary: '#800E13', // Burgundy
  };

  const stats = [
    { icon: LuUsers, label: 'Students', value: '300+' },
    { icon: LuAward, label: 'Job Placement', value: '92%' },
    { icon: LuBookOpen, label: 'Programs', value: '15+' },
    { icon: LuBriefcase, label: 'Industry Partners', value: '50+' },
  ];

  const programs = [
    {
      title: 'Business Management',
      description: 'Comprehensive business administration and management skills',
      features: ['Accounting', 'Marketing', 'Operations', 'Finance'],
    },
    {
      title: 'Entrepreneurship',
      description: 'Practical entrepreneurship training for business startups',
      features: ['Business Planning', 'Innovation', 'Funding', 'Growth'],
    },
    {
      title: 'Professional Development',
      description: 'Leadership and professional skills for career advancement',
      features: ['Leadership', 'Communication', 'Strategy', 'Ethics'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0">
          <img 
            src="/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg" 
            alt="Jimmy Sekasi Business Institute" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center rounded-full px-6 py-2 mb-6" style={{ backgroundColor: `${brandColors.primary}40` }}>
              <LuExternalLink className="w-4 h-4 mr-2" style={{ color: brandColors.primary }} />
              <span className="text-sm font-medium">jsbi.ges.ac.ug</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Jimmy Sekasi Business Institute
            </h1>
            <p className="text-xl mb-4" style={{ color: brandColors.primary }}>
              Excellence in Business Education
            </p>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional Business Training • Established 2010
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Business education and entrepreneurship development programs for professional growth and career success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: `${brandColors.primary}20` }}>
                  <stat.icon className="w-8 h-8" style={{ color: brandColors.primary }} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: brandColors.secondary }}>{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: brandColors.secondary }}>
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical business education for real-world success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4" style={{ color: brandColors.secondary }}>{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColors.primary }}></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 text-white" style={{ backgroundColor: brandColors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Start Your Business Journey
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Transform your career with professional business education at Jimmy Sekasi Business Institute
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <LuMapPin className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>Kampala, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuPhone className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>+256 700 000 007</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuMail className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>info@jsbi.ges.ac.ug</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 shadow-lg"
              style={{ backgroundColor: brandColors.primary, color: brandColors.secondary }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JSBI;
