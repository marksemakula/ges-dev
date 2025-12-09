import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuGlobe, LuExternalLink, LuTarget, LuMenu, LuX, LuChevronDown } from 'react-icons/lu';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const ScoobyGulu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  useEffect(() => {
    // Change favicon when component mounts
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/images/scooby-logo.png';
    document.getElementsByTagName('head')[0].appendChild(link);

    // Restore original favicon when component unmounts
    return () => {
      link.href = '/favicon.ico';
    };
  }, []);
  const brandColors = {
    primary: '#FFD700', // Yellow
    secondary: '#800E13', // Burgundy
  };

  const stats = [
    { icon: LuUsers, label: 'Students', value: '350+' },
    { icon: LuAward, label: 'Pass Rate', value: '98%' },
    { icon: LuBookOpen, label: 'Curricula', value: '2' },
    { icon: LuGlobe, label: 'Countries', value: '10+' },
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
    <div className="min-h-screen bg-gray-50" style={{ viewTransitionName: 'institution-scooby-gulu' }}>
      {/* Custom Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Name */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold" style={{ color: brandColors.secondary }}>
                Scooby Doo <span style={{ color: brandColors.primary }}>International</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#800E13] font-medium transition-colors">
                Home
              </a>
              
              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
              >
                <button className="flex items-center text-gray-700 hover:text-[#800E13] font-medium transition-colors">
                  About Us
                  <LuChevronDown className={`ml-1 w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50">
                    <a href="#management" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#800E13] transition-colors">
                      School Management Committee
                    </a>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <a href="#home" className="block py-3 text-gray-700 hover:text-[#800E13] font-medium">
                Home
              </a>
              <div className="py-3">
                <button 
                  onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#800E13] font-medium"
                >
                  About Us
                  <LuChevronDown className={`w-4 h-4 transition-transform ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAboutDropdownOpen && (
                  <a href="#management" className="block pl-4 py-2 text-gray-600 hover:text-[#800E13]">
                    School Management Committee
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-32" style={{ backgroundColor: brandColors.secondary }}>
        <div className="absolute inset-0">
          <img 
            src="/images/classexam.jpg" 
            alt="Scooby Doo International School - Gulu" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center rounded-full px-6 py-2 mb-6" style={{ backgroundColor: `${brandColors.primary}40` }}>
                <LuExternalLink className="w-4 h-4 mr-2" style={{ color: brandColors.primary }} />
                <span className="text-sm font-medium">scooby-gulu.ges.ac.ug</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Scooby Doo International School
              </h1>
              <p className="text-xl mb-4" style={{ color: brandColors.primary }}>
                Gulu Campus
              </p>
            </motion.div>
            
            {/* Right side - Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center md:justify-end"
            >
              <div className="bg-white rounded-full p-6 shadow-2xl">
                <img 
                  src="/images/scooby-logo.png" 
                  alt="Scooby Doo International School Uganda" 
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
            </motion.div>
          </div>
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
              Experience world-class international education at Scooby Doo International School - Gulu Campus
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <LuMapPin className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>Gulu City</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuPhone className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>+256 414 694 516</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuMail className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>info@scoobydoodaycare.ges.ac.ug</span>
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

      {/* Custom Footer */}
      <footer className="bg-[#800E13] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/images/scooby-logo.png" 
                  alt="Scooby Doo International School" 
                  className="h-16 w-auto mr-3"
                />
                <h3 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
                  Scooby Doo International
                </h3>
              </div>
              <p className="text-gray-200 mb-4">
                Providing world-class international education with a focus on holistic development.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <LuMail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">info@scoobydoodaycare.ges.ac.ug</span>
                </div>
                <div className="flex items-start space-x-3">
                  <LuPhone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="text-gray-200">
                    <div>Tel: +256 414 694 516</div>
                    <div>Mobile: +256 708 800 005</div>
                    <div>Mobile: +256 708 800 006</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <LuMapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Gulu Campus, Gulu City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FFD700] flex items-center justify-center transition-all">
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-gray-300">
              &copy; {new Date().getFullYear()} Scooby Doo International School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScoobyGulu;
