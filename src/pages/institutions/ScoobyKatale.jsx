import React from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuGlobe, LuExternalLink, LuTarget } from 'react-icons/lu';

const ScoobyKatale = () => {
  const brandColors = {
    primary: '#FFD700', // Yellow
    secondary: '#800E13', // Burgundy
  };

  const stats = [
    { icon: LuUsers, label: 'Students', value: '400+' },
    { icon: LuAward, label: 'Pass Rate', value: '99%' },
    { icon: LuBookOpen, label: 'Curricula', value: '2' },
    { icon: LuGlobe, label: 'Countries', value: '12+' },
  ];

  const programs = [
    {
      title: 'IB Program',
      description: 'International Baccalaureate curriculum for globally-minded learners',
      features: ['Primary Years', 'Middle Years', 'Diploma Programme'],
    },
    {
      title: 'Cambridge Curriculum',
      description: 'Cambridge International Education from Primary to A-Levels',
      features: ['IGCSE', 'AS Level', 'A Level'],
    },
    {
      title: 'National Curriculum',
      description: 'Uganda National Curriculum integrated with international standards',
      features: ['Primary', 'O-Level', 'A-Level'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0">
          <img 
            src="/images/happy pupil.jpg" 
            alt="Scooby Doo International School - Katale" 
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
              <span className="text-sm font-medium">scooby-katale.ges.ac.ug</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Scooby Doo International School
            </h1>
            <p className="text-xl mb-4" style={{ color: brandColors.primary }}>
              Katale Campus
            </p>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              International Excellence • Established 2005
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              International curriculum offering both National & International curricula for global education excellence.
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
              Academic Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class international education programs
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
              Join Our Global Community
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Experience world-class international education at Scooby Doo International School - Katale Campus
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <LuMapPin className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>Katale, Kampala</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuPhone className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>+256 700 000 002</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuMail className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>info@scooby-katale.ges.ac.ug</span>
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

export default ScoobyKatale;
