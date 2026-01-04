import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LuMenu, LuX, LuGlobe, LuUsers, LuBookOpen, LuGraduationCap, LuArrowRight, LuMail, LuPhone, LuMapPin, LuLinkedin, LuFacebook, LuTwitter, LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { FaDiscord, FaInstagram, FaLinkedin, FaSlack, FaYoutube, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const InternationalPathway: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [carouselIndices, setCarouselIndices] = useState({ 0: 0, 1: 0, 2: 0 });

  const carouselImages = {
    0: ['uni4.jpg', 'uni3.jpg', 'uni2.avif'],
    1: ['apply1.jpg'],
    2: ['visa.jpg', 'visa2.jpg'],
  };

  // Autoplay carousels
  useEffect(() => {
    const intervals = Object.keys(carouselImages).map((serviceIndex) => {
      const index = parseInt(serviceIndex);
      const imagesLength = carouselImages[index as keyof typeof carouselImages].length;
      
      if (imagesLength <= 1) return null;

      return setInterval(() => {
        setCarouselIndices(prev => ({
          ...prev,
          [index]: (prev[index as keyof typeof prev] + 1) % imagesLength,
        }));
      }, 2000);
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      icon: <LuGlobe className="w-8 h-8" />,
      title: 'Global University Partnerships',
      description: 'Access to top universities worldwide through our established network of academic partnerships.',
    },
    {
      icon: <LuUsers className="w-8 h-8" />,
      title: 'Personalized Counseling',
      description: 'One-on-one guidance from experienced education counselors to help you choose the right path.',
    },
    {
      icon: <LuBookOpen className="w-8 h-8" />,
      title: 'Test Preparation',
      description: 'Comprehensive preparation for IELTS, TOEFL, SAT, and other international standardized tests.',
    },
    {
      icon: <LuGraduationCap className="w-8 h-8" />,
      title: 'Scholarship Assistance',
      description: 'Support in identifying and applying for scholarships and financial aid opportunities.',
    },
  ];

  const destinations = [
    { country: 'United Kingdom', universities: '50+' },
    { country: 'United States', universities: '100+' },
    { country: 'Canada', universities: '40+' },
    { country: 'Australia', universities: '35+' },
    { country: 'Germany', universities: '25+' },
    { country: 'Netherlands', universities: '20+' },
  ];

  const stats = [
    { number: '500+', label: 'Students Placed' },
    { number: '150+', label: 'Partner Universities' },
    { number: '98%', label: 'Visa Success Rate' },
    { number: '45+', label: 'Countries' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-[#670C07] text-white min-h-screen overflow-hidden">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#670C07]/95 backdrop-blur-md shadow-xl' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <img
                  src="/images/IPP.png"
                  alt="International Education Pathway Program"
                  className="h-14 w-auto"
                />
                <div className="hidden md:block">
                  <div className="text-xl font-bold tracking-tight">International Education</div>
                  <div className="text-sm font-light tracking-wider">Pathway Program</div>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="#about" className="hover:text-gray-200 transition-colors font-medium">
                  About
                </a>
                <a href="#programs" className="hover:text-gray-200 transition-colors font-medium">
                  Programs
                </a>
                <a href="#destinations" className="hover:text-gray-200 transition-colors font-medium">
                  Destinations
                </a>
                <a href="#contact" className="hover:text-gray-200 transition-colors font-medium">
                  Contact
                </a>
                <a href="/" className="text-sm text-gray-200 hover:text-white transition-colors">
                  Back to GES
                </a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-400 text-[#670C07] px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Apply Now
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#670C07]/98 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                <a
                  href="#about"
                  className="block py-2 hover:text-gray-200 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#programs"
                  className="block py-2 hover:text-gray-200 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Programs
                </a>
                <a
                  href="#destinations"
                  className="block py-2 hover:text-gray-200 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destinations
                </a>
                <a
                  href="#contact"
                  className="block py-2 hover:text-gray-200 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/"
                  className="block py-2 text-gray-200 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Back to GES
                </a>
                <button className="w-full bg-white text-[#670C07] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors mt-4">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </motion.nav>

        <motion.a
          href="https://wa.me/256123456789"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed left-4 bottom-6 z-50"
          initial={{ scale: 0, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="p-4 rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 border border-white/30">
            <FaWhatsapp className="w-6 h-6" />
          </div>
        </motion.a>

        {/* Hero Content */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
                  Your Gateway to Global Education
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Shape Your
                <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Future Abroad
                </span>
              </h1>

              <p className="text-xl text-gray-100 leading-relaxed max-w-xl">
                Transform your academic dreams into reality with personalized guidance, comprehensive support, and access to world-class universities across the globe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#670C07] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center group"
                >
                  Start Your Journey
                  <LuArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block absolute right-0 top-0 bottom-0 lg:w-[calc(50vw-1.5rem)]"
            >
              <img
                src="/images/ieppheader.png"
                alt="International Education Pathway Program"
                className="w-full h-full object-cover object-left"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#670C07] via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-[#670C07]/40 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#670C07]/30 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-[#670C07]/30 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="relative py-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/uni3.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#670C07]/90" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              Why Choose IPP?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-lg text-gray-100 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">Global University Partnerships</h3>
                <p className="text-gray-100">
                  Access to top universities worldwide through our established network of academic partnerships.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">Personalized Counseling</h3>
                <p className="text-gray-100">
                  One-on-one guidance from experienced education counselors to help you choose the right path.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">Test Preparation</h3>
                <p className="text-gray-100">
                  Comprehensive preparation for IELTS, TOEFL, SAT, and other international standardized tests.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">Scholarship Assistance</h3>
                <p className="text-gray-100">
                  Support in identifying and applying for scholarships and financial aid opportunities.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">

            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'University Selection',
                description: 'Expert guidance in choosing the right university that matches your academic goals and career aspirations.',
                features: ['Program matching', 'Rankings analysis', 'Campus culture fit'],
              },
              {
                title: 'Application Support',
                description: 'End-to-end assistance with your university applications, essays, and documentation.',
                features: ['Document preparation', 'Essay editing', 'Application tracking'],
              },
              {
                title: 'Visa & Immigration',
                description: 'Complete visa application support with a 98% success rate across all major destinations.',
                features: ['Visa documentation', 'Interview preparation', 'Post-arrival support'],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-[#670C07]/30 transition-colors"
              >
                {/* Image Carousel */}
                <div className="relative bg-gray-200 h-48 overflow-hidden">
                  <motion.div
                    key={carouselIndices[index as keyof typeof carouselIndices]}
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <img
                      src={`/images/${carouselImages[index as keyof typeof carouselImages][carouselIndices[index as keyof typeof carouselIndices]]}`}
                      alt={`${service.title} image`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Dot Indicators */}
                  {carouselImages[index as keyof typeof carouselImages].length > 1 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {carouselImages[index as keyof typeof carouselImages].map((_, dotIndex) => (
                        <motion.button
                          key={dotIndex}
                          initial={{ scale: 0.8 }}
                          animate={{
                            scale: carouselIndices[index as keyof typeof carouselIndices] === dotIndex ? 1 : 0.8,
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            carouselIndices[index as keyof typeof carouselIndices] === dotIndex
                              ? 'bg-white w-8'
                              : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-5 h-5 bg-[#670C07] rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner universities in the world's leading education hubs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{destination.country}</h3>
                    <p className="text-[#670C07] font-semibold mt-1">{destination.universities} Universities</p>
                  </div>
                  <LuGlobe className="w-8 h-8 text-[#670C07]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#670C07] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-xl text-gray-100 mb-8">
                Contact us today for a free consultation and let us help you achieve your international education goals.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LuMail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@ipp-ges.org" className="text-gray-200 hover:text-white transition-colors">
                      info@iepp.ges.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LuPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+256123456789" className="text-gray-200 hover:text-white transition-colors">
                      +256 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <LuMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Address</div>
                    <p className="text-gray-200">
                      Gombe Education Service<br />
                      Kampala, Uganda
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl shadow-black/20"
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.15 }}
                transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('/images/gombebg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-[#670C07]/70" />
              </motion.div>

              <form className="relative z-10 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/15 border border-white/25 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/70 text-white placeholder-gray-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/15 border border-white/25 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/70 text-white placeholder-gray-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/15 border border-white/25 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/70 text-white placeholder-gray-200"
                    placeholder="+256 ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/15 border border-white/25 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300/70 text-white placeholder-gray-200"
                    placeholder="Tell us about your education goals..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-[#670C07] px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg shadow-black/10"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/IPP.png"
                  alt="IPP"
                  className="h-36 w-auto"
                />
                <div>
                  <div className="text-lg font-bold">International Education</div>
                  <div className="text-sm text-gray-400">Pathway Program</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering students to achieve their dreams of studying at world-class universities through personalized guidance and comprehensive support.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#programs" className="text-gray-400 hover:text-white transition-colors">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#destinations" className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    Back to GES
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: FaDiscord, href: 'https://discord.com/ges' },
                  { icon: FaInstagram, href: 'https://instagram.com/ges' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/company/ges' },
                  { icon: FaSlack, href: 'https://slack.com/ges' },
                  { icon: FaYoutube, href: 'https://youtube.com/ges' },
                  { icon: FaXTwitter, href: 'https://twitter.com/ges' },
                  { icon: FaWhatsapp, href: 'https://whatsapp.com/ges' },
                  { icon: FaTelegram, href: 'https://telegram.com/ges' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center justify-center transition-all duration-300 text-white hover:text-gray-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
              <p>© {new Date().getFullYear()} International Education Pathway Program. All rights reserved.</p>
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="flex space-x-6">
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">Powered by</span>
                  <img 
                    src="/images/Inzozi-grayscale1.png" 
                    alt="Inzozi Logo" 
                    className="h-16 w-auto" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
};

export default InternationalPathway;
