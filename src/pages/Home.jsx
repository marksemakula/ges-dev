import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuArrowRight, 
  LuAward, 
  LuUsers, 
  LuBookOpen, 
  LuGlobe, 
  LuStar, 
  LuChevronLeft, 
  LuChevronRight, 
  LuPlay, 
  LuCalendar, 
  LuMapPin, 
  LuTrophy, 
  LuTrendingUp,
  LuX
} from 'react-icons/lu';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const heroSlides = [
    {
      title: "Your Kids Deserve The Best Education",
      subtitle: "Active Learning, Expert Teachers & Safe Environment",
      description: "Empowering students with world-class education and innovative learning approaches that prepare them for global success.",
      cta: "Admission Now",
      background: "bg-gradient-to-br from-ges-navy via-ges-blue to-ges-teal",
      image: "/images/happy pupil.jpg"
    },
    {
      title: "School of Your Time",
      subtitle: "Modern Curriculum Meets Traditional Values",
      description: "Innovative educational programs designed for the digital age while maintaining core academic excellence and character development.",
      cta: "Explore Programs",
      background: "bg-gradient-to-br from-ges-purple via-ges-burgundy to-ges-navy",
      image: "/images/classexam.jpg"
    },
    {
      title: "Subscribe to Excellence",
      subtitle: "Join Our Educational Community",
      description: "Connect with our network of schools and discover opportunities for academic growth, mentorship, and lifelong learning.",
      cta: "Join Community",
      background: "bg-gradient-to-br from-ges-teal via-ges-green to-ges-gold",
      image: "/images/schoolgroup.jpg"
    }
  ];

  const stats = [
    { icon: LuUsers, label: "Students Enrolled", value: "2,500+", color: "text-ges-blue" },
    { icon: LuAward, label: "Awards Won", value: "150+", color: "text-ges-gold" },
    { icon: LuBookOpen, label: "Programs Offered", value: "25+", color: "text-ges-teal" },
    { icon: LuGlobe, label: "Countries Represented", value: "15+", color: "text-ges-purple" }
  ];

  const logos = [
    { name: 'Jimmy Sekasi', src: '/images/JimmySekasiLogo.png' },
    { name: 'St. Andrew', src: '/images/StAndrewLogo.png' },
    { name: 'Gombe', src: '/images/GombeBadge.png' },
    { name: 'Scooby Doo', src: '/images/scoobydoo-logo.png' },
    { name: 'GES', src: '/images/GES.png' },
  ];

  const [institutionSlide, setInstitutionSlide] = useState(0);

  const institutions = [
    {
      name: "Scooby Doo International School - Katale Campus",
      description: "International curriculum offering both National & International curricula for global education",
      students: "400+",
      established: "2005",
      specialties: ["IB Program", "Cambridge", "Global Studies"],
      image: "/images/happy pupil.jpg",
      color: "bg-ges-purple"
    },
    {
      name: "Scooby Doo International School - Gulu Campus",
      description: "International curriculum offering both National & International curricula for global education",
      students: "350+",
      established: "2008",
      specialties: ["IB Program", "Cambridge", "Global Studies"],
      image: "/images/classexam.jpg",
      color: "bg-ges-purple"
    },
    {
      name: "Gombe Junior School - Kikajjo",
      description: "Day school providing primary and lower secondary education with holistic development",
      students: "500+",
      established: "1998",
      specialties: ["Foundation", "Character", "Skills"],
      image: "/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg",
      color: "bg-ges-teal"
    },
    {
      name: "Gombe Junior School - Gulu",
      description: "Day school providing primary and lower secondary education with holistic development",
      students: "480+",
      established: "2002",
      specialties: ["Foundation", "Character", "Skills"],
      image: "/images/schoolgroup.jpg",
      color: "bg-ges-teal"
    },
    {
      name: "Gombe Junior School - Boarding",
      description: "Boarding school providing primary and lower secondary education with holistic development",
      students: "350+",
      established: "2000",
      specialties: ["Foundation", "Character", "Skills"],
      image: "/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg",
      color: "bg-ges-teal"
    },
    {
      name: "St. Andrew Kaggwa Gombe High School - Kawaala",
      description: "Advanced secondary education with focus on sciences and humanities",
      students: "550+",
      established: "1995",
      specialties: ["Sciences", "Arts", "Technology"],
      image: "/images/annie-spratt-V-XM4kkWpng-unsplash.jpg",
      color: "bg-ges-blue"
    },
    {
      name: "St. Andrew Kaggwa Gombe High School - Bujuuko",
      description: "Advanced secondary education with focus on sciences and humanities",
      students: "520+",
      established: "2003",
      specialties: ["Sciences", "Arts", "Technology"],
      image: "/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg",
      color: "bg-ges-blue"
    },
    {
      name: "Jimmy Sekasi Business Institute",
      description: "Business education and entrepreneurship development programs for professional growth",
      students: "300+",
      established: "2010",
      specialties: ["Business", "Entrepreneurship", "Leadership"],
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg",
      color: "bg-ges-gold"
    }
  ];

  const features = [
    {
      icon: LuAward,
      title: "Excellence in Education",
      description: "Consistently ranked among top educational institutions with outstanding academic results.",
      stats: "95% Pass Rate"
    },
    {
      icon: LuUsers,
      title: "Expert Faculty",
      description: "Highly qualified teachers with international experience and modern teaching methodologies.",
      stats: "150+ Teachers"
    },
    {
      icon: LuGlobe,
      title: "Global Perspective",
      description: "International partnerships and exchange programs preparing students for global opportunities.",
      stats: "25+ Partners"
    },
    {
      icon: LuBookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-rounded education covering academics, sports, arts, and character development.",
      stats: "50+ Subjects"
    }
  ];

  const recentNews = [
    {
      title: "GES Students Excel in National Examinations",
      excerpt: "Our students achieved remarkable results in the recent national examinations with 98% pass rate.",
      date: "2024-01-15",
      category: "Academic Excellence",
      image: "/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg"
    },
    {
      title: "New STEM Laboratory Inaugurated",
      excerpt: "State-of-the-art science and technology laboratory opens to enhance practical learning.",
      date: "2024-01-10",
      category: "Infrastructure",
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg"
    },
    {
      title: "International Partnership with Cambridge",
      excerpt: "GES signs MOU with Cambridge University for academic collaboration and student exchange.",
      date: "2024-01-05",
      category: "Partnerships",
      image: "/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden bg-ges-navy">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`absolute inset-0 ${heroSlides[currentSlide].background}`}
          >
            {/* Background Image */}
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img 
                src={heroSlides[currentSlide].image} 
                alt="Hero background" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="floating-shape absolute top-20 left-10 w-20 h-20 bg-ges-gold/20 rounded-full"></div>
              <div className="floating-shape absolute top-40 right-20 w-32 h-32 bg-ges-teal/20 rounded-full"></div>
              <div className="floating-shape absolute bottom-20 left-1/3 w-16 h-16 bg-ges-purple/20 rounded-full"></div>
              <div className="floating-shape absolute top-1/3 right-1/3 w-24 h-24 bg-ges-gold/10 rounded-full"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="text-white"
                >
                  {/* Logo and Brand */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-8 flex items-center space-x-4"
                  >
                    <img src="/logo.png" alt="GES Logo" className="h-24 w-auto drop-shadow-lg" />
                    <div>
                      <h2 className="text-3xl font-bold text-white">GOMBE EDUCATION SERVICES</h2>
                      <p className="text-ges-gold text-sm font-semibold tracking-wider">EXCELLENCE SINCE 1995</p>
                    </div>
                  </motion.div>
                  
                  <div className="inline-flex items-center bg-ges-gold/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <LuCalendar className="w-4 h-4 mr-2 text-ges-gold" />
                    <span className="text-sm font-medium">GES Calender</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 text-ges-gold font-medium">
                    {heroSlides[currentSlide].subtitle}
                  </p>
                  <p className="text-lg mb-8 text-gray-200 leading-relaxed max-w-2xl">
                    {heroSlides[currentSlide].description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-ges-gold text-ges-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center group shadow-lg"
                    >
                      {heroSlides[currentSlide].cta}
                      <LuArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-ges-navy transition-all duration-300 flex items-center justify-center group"
                    >
                      <LuPlay className="mr-2 w-5 h-5" />
                      Watch Video
                    </motion.button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="relative">
                    <motion.div 
                      className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img 
                        src={heroSlides[currentSlide].image} 
                        alt="Students" 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    {/* Floating Stats Cards */}
                    <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-ges-gold rounded-xl flex items-center justify-center">
                          <LuTrophy className="w-6 h-6 text-ges-navy" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">Winners</div>
                          <div className="text-sm opacity-80"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-ges-teal rounded-xl flex items-center justify-center">
                          <LuTrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">98%</div>
                          <div className="text-sm opacity-80">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <LuChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-ges-gold scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          >
            <LuChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Logos Carousel Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="h-16 sm:h-20 md:h-24 w-auto max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Why Choose GES
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Discover what makes Gombe Education Services the premier choice for quality education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="w-16 h-16 bg-ges-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ges-gold group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-ges-gold group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-ges-navy mb-4">{feature.title}</h3>
                <p className="text-ges-slate mb-4 leading-relaxed">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-ges-teal">{feature.stats}</span>
                  <LuArrowRight className="w-5 h-5 text-ges-gold group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Our Institutions
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Explore our family of educational institutions, each offering specialized programs for different academic levels
            </p>
          </motion.div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: -institutionSlide * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {/* Slide 1 - First 4 institutions */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {institutions.slice(0, 4).map((institution, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group ges-card-hover"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={institution.image} 
                          alt={institution.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <div className={`px-4 py-2 ${institution.color} text-white rounded-full text-sm font-medium`}>
                            Est. {institution.established}
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-bold">{institution.students}</div>
                          <div className="text-sm opacity-80">Students</div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-ges-navy mb-4">{institution.name}</h3>
                        <p className="text-ges-slate mb-6 leading-relaxed">{institution.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {institution.specialties.map((specialty, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-ges-cream text-ges-navy rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <Link 
                          to={`/institutions/${institution.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-ges-teal font-semibold hover:text-ges-navy transition-colors group"
                        >
                          Learn More <LuArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Slide 2 - Next 4 institutions */}
                <div className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {institutions.slice(4, 8).map((institution, index) => (
                    <motion.div
                      key={index + 4}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group ges-card-hover"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={institution.image} 
                          alt={institution.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <div className={`px-4 py-2 ${institution.color} text-white rounded-full text-sm font-medium`}>
                            Est. {institution.established}
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="text-2xl font-bold">{institution.students}</div>
                          <div className="text-sm opacity-80">Students</div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-ges-navy mb-4">{institution.name}</h3>
                        <p className="text-ges-slate mb-6 leading-relaxed">{institution.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {institution.specialties.map((specialty, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-ges-cream text-ges-navy rounded-full text-sm font-medium"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                        <Link 
                          to={`/institutions/${institution.name.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center text-ges-teal font-semibold hover:text-ges-navy transition-colors group"
                        >
                          Learn More <LuArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInstitutionSlide(Math.max(0, institutionSlide - 1))}
                disabled={institutionSlide === 0}
                className="p-3 bg-ges-gold text-ges-navy rounded-full hover:bg-ges-teal hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <LuChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(institutions.length / 4) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setInstitutionSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      institutionSlide === index ? 'bg-ges-gold w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInstitutionSlide(Math.min(Math.ceil(institutions.length / 4) - 1, institutionSlide + 1))}
                disabled={institutionSlide >= Math.ceil(institutions.length / 4) - 1}
                className="p-3 bg-ges-gold text-ges-navy rounded-full hover:bg-ges-teal hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                <LuChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-4">
                Latest News
              </h2>
              <p className="text-xl text-ges-slate">
                Stay updated with our latest achievements and announcements
              </p>
            </div>
            <Link to="/blog" className="hidden md:inline-flex items-center text-ges-teal font-semibold hover:text-ges-navy transition-colors">
              View All News <LuArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-ges-gold text-ges-navy rounded-full text-xs font-medium">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-ges-slate text-sm mb-3">
                    <LuCalendar className="w-4 h-4 mr-2" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold text-ges-navy mb-3 group-hover:text-ges-teal transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-ges-slate mb-4 leading-relaxed">
                    {news.excerpt}
                  </p>
                  <button className="inline-flex items-center text-ges-teal font-semibold hover:text-ges-navy transition-colors group">
                    Read More <LuArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <Link to="/blog" className="inline-flex items-center bg-ges-gold text-ges-navy px-8 py-4 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300">
              View All News <LuArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#800E13] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ges-gold/10 rounded-full floating-shape"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-ges-teal/10 rounded-full floating-shape"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full floating-shape"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Take the first step towards excellence. Apply now and become part of Uganda's premier educational institution.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ges-gold text-ges-navy px-12 py-4 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 shadow-lg"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-ges-navy transition-all duration-300"
              >
                Schedule Visit
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
              >
                <LuX className="w-6 h-6" />
              </button>
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <LuPlay className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-75">Video content would be embedded here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;