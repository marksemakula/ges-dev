import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuMenu, 
  LuX, 
  LuChevronRight,
  LuArrowRight,
  LuGraduationCap,
  LuUsers,
  LuAward,
  LuCalendar,
  LuMapPin,
  LuPhone,
  LuMail,
  LuFacebook,
  LuTwitter,
  LuInstagram,
  LuLinkedin,
  LuPlay,
  LuChefHat,
  LuCoffee,
  LuPalette,
  LuLaptop,
  LuTrendingUp,
  LuClock
} from 'react-icons/lu';

const JSBI = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      category: 'culinary',
      title: 'Culinary Arts',
      icon: LuChefHat,
      duration: '6-12 Months',
      level: 'Certificate & Diploma',
      description: 'Master the art of cooking with hands-on training in professional kitchens.',
      color: 'from-orange-500 to-red-600'
    },
    {
      category: 'culinary',
      title: 'Pastry & Baking',
      icon: LuCoffee,
      duration: '4-8 Months',
      level: 'Certificate',
      description: 'Learn the craft of pastry making, cake decoration, and artisan baking.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      category: 'culinary',
      title: 'Barista Skills',
      icon: LuCoffee,
      duration: '2-3 Months',
      level: 'Certificate',
      description: 'Perfect your coffee-making skills and latte art techniques.',
      color: 'from-amber-600 to-orange-700'
    },
    {
      category: 'fashion',
      title: 'Fashion & Design',
      icon: LuPalette,
      duration: '12 Months',
      level: 'Diploma',
      description: 'Create stunning fashion designs and learn garment construction.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      category: 'fashion',
      title: 'Hairdressing & Beauty',
      icon: LuPalette,
      duration: '12 Months',
      level: 'Diploma',
      description: 'Master professional hairdressing and beauty therapy techniques.',
      color: 'from-fuchsia-500 to-purple-600'
    },
    {
      category: 'tech',
      title: 'ICT & Computer Skills',
      icon: LuLaptop,
      duration: '3-6 Months',
      level: 'Certificate',
      description: 'Build essential digital skills for the modern workplace.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      category: 'business',
      title: 'Business Management',
      icon: LuTrendingUp,
      duration: '6 Months',
      level: 'Certificate',
      description: 'Develop entrepreneurial skills and business acumen.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      category: 'culinary',
      title: 'Mixology',
      icon: LuCoffee,
      duration: '2-3 Months',
      level: 'Certificate',
      description: 'Learn professional bartending and cocktail creation.',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Graduates', sublabel: 'Success Stories' },
    { number: '95%', label: 'Employment Rate', sublabel: 'Within 6 Months' },
    { number: '15+', label: 'Programs', sublabel: 'Career Pathways' },
    { number: '20+', label: 'Industry Partners', sublabel: 'Job Placement' }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg py-3' 
            : 'bg-gradient-to-r from-orange-600 to-red-600 py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/images/Jimmy Ssekasi Business Institute Logo.png"
                alt="JSBI Logo"
                className="h-16 w-auto"
              />
              <div className="hidden md:block">
                <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  Jimmy Sekasi Business Institute
                </h1>
                <p className={`text-xs font-medium tracking-wider ${scrolled ? 'text-orange-600' : 'text-orange-100'}`}>
                  SKILLS FOR LIFE, CAREERS FOR TOMORROW
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#programs" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Programs
              </a>
              <a href="#admissions" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Admissions
              </a>
              <a href="#about" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                About
              </a>
              <a href="#contact" className={`font-medium hover:text-orange-600 transition ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                Contact
              </a>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition font-semibold shadow-lg hover:shadow-xl">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-white/20"
              >
                <div className="flex flex-col space-y-3 pt-4">
                  <a href="#programs" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Programs</a>
                  <a href="#admissions" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Admissions</a>
                  <a href="#about" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>About</a>
                  <a href="#contact" className={`font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
                  <button className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold w-full">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg"
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-red-900/90 to-orange-800/85"></div>
        </div>

        {/* Diagonal Design Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-orange-600 to-red-700 transform skew-x-12 origin-top-right opacity-20"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <LuGraduationCap className="w-8 h-8 text-orange-400" />
                <span className="text-orange-400 font-bold tracking-wider uppercase text-sm">
                  Transform Your Future
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Skills You Can
                <span className="block text-orange-400">Build On.</span>
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                At JSBI, education is about understanding a complex world, thinking critically, 
                and building practical skills that transform lives and communities. Choose from 
                certificates and diplomas in culinary arts, fashion, technology, and business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center space-x-2">
                  <span>Explore Programs</span>
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="group bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl flex items-center justify-center space-x-2">
                  <LuPlay className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </motion.div>

            {/* Circular Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-6"
            >
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
                  <img
                    src="/images/premium_photo-1661861141158-be08023174e6.avif"
                    alt="Student 1"
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="relative group">
                  <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition"></div>
                  <img
                    src="/images/premium_photo-1666956837879-fafe054d850c.avif"
                    alt="Student 2"
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-orange-600"></div>
              <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                Our Programs
              </span>
              <div className="h-1 w-12 bg-orange-600"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Build Your Career,
              <span className="text-orange-600"> Choose Your Path</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical skills training designed for real-world success
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Programs' },
              { id: 'culinary', label: 'Culinary Arts' },
              { id: 'fashion', label: 'Fashion & Beauty' },
              { id: 'tech', label: 'Technology' },
              { id: 'business', label: 'Business' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <LuClock className="w-4 h-4" />
                      <span>{program.duration}</span>
                    </div>
                    <span className="font-semibold text-orange-600">{program.level}</span>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition group-hover:bg-orange-600 group-hover:text-white flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <LuChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose JSBI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-1 w-12 bg-orange-600"></div>
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">
                  Why JSBI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering the
                <span className="text-orange-600"> Whole Person</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In a deliberate plan to build a hybrid mid-level training college, GES took over 
                JSBI to intentionally impart contemporary skills to young men and women of all walks 
                of life, to enhance their potential in being more relevant to their families and 
                communities and be direct partakers in their career destiny.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: LuUsers,
                    title: 'Hands-On Training',
                    description: 'Learn by doing with real-world equipment and industry-standard facilities'
                  },
                  {
                    icon: LuAward,
                    title: 'Industry Partnerships',
                    description: 'Direct job placement support through our network of 20+ partner companies'
                  },
                  {
                    icon: LuTrendingUp,
                    title: 'Flexible Learning',
                    description: 'Short courses, certificates, and diplomas designed to fit your schedule'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/premium_photo-1724026586579-5c413598de2c.avif"
                  alt="Students in class"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-lg font-semibold">Years of Excellence</div>
                  <div className="text-sm text-orange-200">Since 2010</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join hundreds of graduates who have transformed their lives through practical skills training
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
                Schedule a Visit
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About */}
            <div className="md:col-span-2">
              <img
                src="/images/Jimmy Ssekasi Business Institute Logo.png"
                alt="JSBI Logo"
                className="h-20 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6">
                Empowering young men and women with contemporary skills for careers in 
                culinary arts, fashion, technology, and business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center hover:bg-orange-700 transition">
                  <LuFacebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center hover:bg-orange-700 transition">
                  <LuTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center hover:bg-orange-700 transition">
                  <LuInstagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center hover:bg-orange-700 transition">
                  <LuLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-gray-400 hover:text-orange-500 transition">Programs</a></li>
                <li><a href="#admissions" className="text-gray-400 hover:text-orange-500 transition">Admissions</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-orange-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <LuMapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-400">Kampala, Uganda</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LuPhone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">+256 XXX XXXXXX</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LuMail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-400">info@jsbi.ges.ac.ug</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Jimmy Sekasi Business Institute. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JSBI;
