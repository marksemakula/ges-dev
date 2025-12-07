import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMenu, LuX, LuChevronDown, LuSearch, LuSun, LuMoon } from 'react-icons/lu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const institutions = [
    { name: 'Gombe High School', subdomain: 'gombehighschool', path: '/institutions/gombe-high-school', description: 'Advanced Secondary Education' },
    { name: 'Gombe Junior School', subdomain: 'gombejuniorschool', path: '/institutions/gombe-junior-school', description: 'Primary & Lower Secondary' },
    { name: 'Scooby Doo International', subdomain: 'scoobydoo', path: '/institutions/scooby-doo', description: 'International Curriculum' },
    { name: 'Jimmy Sekasi Business Institute', subdomain: 'jsbi', path: '/institutions/jsbi', description: 'Business & Entrepreneurship' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'GES Life', path: '/ges-life' },
    { name: 'Mentorship', path: '/mentorship' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'GES Calendar', path: '/academic-calendar' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-ges-navy/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              src="/logo.png"
              alt="GES Logo"
              className="h-12 w-auto group-hover:drop-shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white group-hover:text-ges-gold transition-colors">
                Gombe Education Services
              </h1>
              <p className={`text-xs font-medium tracking-wider ${scrolled ? 'text-ges-gold' : 'text-gray-300'}`}>
                EXCELLENCE SINCE 1995
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-ges-navy bg-ges-gold'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Institutions Dropdown */}
            <div
              className="relative ml-2"
              onMouseEnter={() => setDropdownOpen('institutions')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-full transition-all">
                Institutions <LuChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {dropdownOpen === 'institutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 overflow-hidden"
                  >
                    {institutions.map((inst, index) => (
                      <motion.div
                        key={inst.subdomain}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={inst.path}
                          className="block px-6 py-3 hover:bg-ges-cream transition-colors group"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold text-ges-navy group-hover:text-ges-teal transition-colors">
                                {inst.name}
                              </div>
                              <div className="text-xs text-ges-slate mt-1">
                                {inst.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-4">
            {/* Removed Apply Now button */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-ges-navy/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-colors ${
                      location.pathname === link.path
                        ? 'bg-ges-gold text-ges-navy font-bold'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="h-px bg-white/10 my-4" />
                <div className="px-4 text-xs font-bold text-ges-gold uppercase tracking-wider mb-2">
                  Our Institutions
                </div>
                {institutions.map((inst) => (
                  <Link
                    key={inst.subdomain}
                    to={inst.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-sm"
                  >
                    {inst.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-ges-gold text-ges-navy px-6 py-3 rounded-xl font-bold hover:bg-ges-teal hover:text-white transition-all duration-300"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;