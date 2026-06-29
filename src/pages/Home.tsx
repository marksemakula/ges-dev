import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  LuArrowRight, 
  LuAward, 
  LuUsers, 
  LuBookOpen, 
  LuGlobe, 
  LuChevronLeft, 
  LuChevronRight, 
  LuPlay, 
  LuCalendar, 
  LuX,
  LuExternalLink,
  LuSparkles,
  LuGraduationCap,
  LuTrophy
} from 'react-icons/lu';
import type { HeroSlide, Stat, Logo, Institution, Feature } from '../types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [previewInstitution, setPreviewInstitution] = useState<Institution | null>(null);
  const [institutionSlide, setInstitutionSlide] = useState<number>(0);
  const [currentInstitutionIndex, setCurrentInstitutionIndex] = useState<number>(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const heroYOffset = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Animation variants with enhanced effects
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  const heroSlides: HeroSlide[] = [
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

  const stats: Stat[] = [
    { icon: LuUsers, label: "Students Enrolled", value: "2,500+", color: "text-ges-blue" },
    { icon: LuAward, label: "Awards Won", value: "150+", color: "text-ges-gold" },
    { icon: LuBookOpen, label: "Programs Offered", value: "25+", color: "text-ges-teal" },
    { icon: LuGlobe, label: "Countries Represented", value: "15+", color: "text-ges-purple" }
  ];

  const logos: Logo[] = [
    { name: 'KISU', src: '/images/KISU.png' },
    { name: 'MoES', src: '/images/MoES.png' },
    { name: 'Gombe Institute of Business Science & Technology (GIBST)', src: '/images/Jimmy Ssekasi Business Institute Logo.png' },
    { name: 'Gombe High School', src: '/images/Gombe High logo.png' },
    { name: 'Gombe Junior School', src: '/images/Gombe Junior School logo.png' },
    { name: 'Scooby Doo International School', src: '/images/scooby-logo.png' },
    { name: 'Buganda', src: '/images/Flag_of_Buganda.svg' },
  ];

  const heroInstitutions: Institution[] = [
    { name: 'St. Andrew Kaggwa Gombe High School - Kawaala', logo: '/images/Gombe High logo.png', path: '/institutions/sakghs-kawaala', url: 'https://sakghs-kawaala.vercel.app/' },
    { name: 'St. Andrew Kaggwa Gombe High School - Bujuuko', logo: '/images/Gombe High logo.png', path: '/institutions/sakghs-bujuuko', url: 'https://sakghs-bujuuko.vercel.app/' },
    { name: 'Gombe Junior School - Kikajjo', logo: '/images/Gombe Junior School logo.png', path: '/institutions/gjs-kikajjo', url: 'https://gjs-kikajjo.vercel.app/' },
    { name: 'Gombe Junior School - Boarding', logo: '/images/Gombe Junior School logo.png', path: '/institutions/gjs-boarding', url: 'https://gjs-boarding.vercel.app/' },
    { name: 'Gombe Junior School - Gulu', logo: '/images/Gombe Junior School logo.png', path: '/institutions/gjs-gulu', url: 'https://gjs-gulu.vercel.app/' },
    { name: 'Scooby Doo International School Uganda (SISU) - Katale', logo: '/images/scoobydoo-logo.png', path: '/institutions/scooby-katale', url: 'https://sisu-katale.vercel.app/' },
    { name: 'Scooby Doo International School Uganda (SISU) - Gulu', logo: '/images/scoobydoo-logo.png', path: '/institutions/scooby-gulu', url: 'https://sisu-gulu.vercel.app/' },
  ];

  const currentInstitution = heroInstitutions[currentInstitutionIndex];

  const institutions: Institution[] = [
    {
      name: "Scooby Doo International School Uganda (SISU) - Katale Campus",
      slug: "scooby-katale",
      description: "Modern international school featuring innovative design - Active Learning, Expert Teachers & Safe Environment",
      students: "400+",
      logo: "/images/scoobydoo-logo.png",
      path: "/institutions/scooby-katale",
      url: "https://sisu-katale.vercel.app/",
      type: "International",
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg",
    },
    {
      name: "Scooby Doo International School Uganda (SISU) - Gulu Campus",
      slug: "scooby-gulu",
      description: "Modern international school featuring innovative design - Active Learning, Expert Teachers & Safe Environment",
      students: "350+",
      logo: "/images/scoobydoo-logo.png",
      path: "/institutions/scooby-gulu",
      url: "https://sisu-gulu.vercel.app/",
      type: "International",
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg",
    },
    {
      name: "Gombe Junior School - Boarding",
      slug: "gjs-boarding",
      description: "Modern boarding & day school featuring innovative international design - Active Learning, Expert Teachers & Safe Environment",
      students: "500+",
      logo: "/images/Gombe Junior School logo.png",
      path: "/institutions/gjs-boarding",
      url: "https://gjs-boarding.vercel.app/",
      type: "Boarding",
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg",
    },
    {
      name: "Gombe Junior School - Kikajjo",
      slug: "gjs-kikajjo",
      description: "Modern day school featuring innovative international design - Active Learning, Expert Teachers & Safe Environment",
      students: "480+",
      logo: "/images/Gombe Junior School logo.png",
      path: "/institutions/gjs-kikajjo",
      url: "https://gjs-kikajjo.vercel.app/",
      type: "Day School",
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg",
    },
    {
      name: "Gombe Junior School - Gulu",
      slug: "gjs-gulu",
      description: "Extending foundational education excellence to Northern Uganda through a nurturing learning environment",
      students: "420+",
      logo: "/images/Gombe Junior School logo.png",
      path: "/institutions/gjs-gulu",
      url: "https://gjs-gulu.vercel.app/",
      type: "Day School",
      image: "/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg",
    },
    {
      name: "St. Andrew Kaggwa Gombe High School - Kawaala",
      slug: "sakghs-kawaala",
      description: "Advanced secondary education with focus on sciences and humanities",
      students: "550+",
      logo: "/images/Gombe High logo.png",
      path: "/institutions/sakghs-kawaala",
      url: "https://sakghs-kawaala.vercel.app/",
      type: "High School",
      image: "/images/annie-spratt-V-XM4kkWpng-unsplash.jpg",
    },
    {
      name: "St. Andrew Kaggwa Gombe High School - Bujuuko",
      slug: "sakghs-bujuuko",
      description: "Advanced secondary education with focus on sciences and humanities",
      students: "520+",
      logo: "/images/Gombe High logo.png",
      path: "/institutions/sakghs-bujuuko",
      url: "https://sakghs-bujuuko.vercel.app/",
      type: "High School",
      image: "/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg",
    }
  ];

  const features: Feature[] = [
    {
      icon: LuGraduationCap,
      title: "Excellence in Education",
      description: "Consistently ranked among top educational institutions with outstanding academic results.",
      color: "text-ges-blue"
    },
    {
      icon: LuUsers,
      title: "Expert Faculty",
      description: "Highly qualified teachers with international experience and modern teaching methodologies.",
      color: "text-ges-teal"
    },
    {
      icon: LuGlobe,
      title: "Global Perspective",
      description: "International partnerships and exchange programs preparing students for global opportunities.",
      color: "text-ges-purple"
    },
    {
      icon: LuTrophy,
      title: "Comprehensive Curriculum",
      description: "Well-rounded education covering academics, sports, arts, and character development.",
      color: "text-ges-gold"
    }
  ];

  const getHeroDescription = useCallback((): string => {
    const inst = currentInstitution.name;
    if (inst.includes('Scooby Doo International School Uganda'))
      return 'This is an early years independent international school offering both National & International curricular and brings together learners from different parts of Uganda from the age of 2-6years.\nStarted in 2013';
    if (inst.includes('Gombe Junior School - Kikajjo'))
      return 'Gombe Junior School Kikajjo GJS-K was opened in 2019 after the separation of day scholars from Boarders to create for them their own school which is entirely day. The school has brought about transformation in the community around its location.';
    if (inst.includes('Gombe Junior School'))
      return 'This school is one of our pioneer schools that started in 2013 as day & boarding. It academically excelled with 100% first grades in 2017 & 2022 emerging best in Wakiso District and ranked number 4 & 5 in Uganda respectively.';
    if (inst.includes('Gombe Institute of Business Science & Technology'))
      return 'In a deliberate plan to build a hybrid mid-level training college GES took over GIBST to intentionally impart contemporary skills to young men and women of all walks of life, to enhance their potential in being more relevant to their families and communities.';
    if (currentInstitution.path.includes('sakghs-kawaala'))
      return 'St. Andrew Kaggwa Gombe School Kawaala is both \'O\' and \'A\' level mixed Day and Boarding school, that started in June 2016.';
    if (currentInstitution.path.includes('sakghs-bujuuko'))
      return 'This is one of our new campuses that started in October 2022 and has brought about a paradigm shift from Kings College Bujuuko to St Andrew Kaggwa Gombe High School Bujuuko Campus.';
    return heroSlides[currentSlide].description;
  }, [currentInstitution, currentSlide, heroSlides]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInstitutionIndex((prev) => (prev + 1) % heroInstitutions.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [heroInstitutions.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleInstitutionClick = useCallback((slug: string) => {
    const institution = institutions.find(inst => inst.slug === slug);
    if (institution) {
      setPreviewInstitution(institution);
    }
  }, [institutions]);

  const closePreview = useCallback(() => {
    setPreviewInstitution(null);
  }, []);

  const visitFullSite = useCallback(() => {
    if (previewInstitution) {
      navigate(`/institutions/${previewInstitution.slug}`);
    }
  }, [previewInstitution, navigate]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Parallax */}
      <section className="relative h-screen overflow-hidden bg-ges-navy">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            style={{ y: heroYOffset, opacity: heroOpacity }}
            className={`absolute inset-0 ${heroSlides[currentSlide].background}`}
          >
            {/* Background Image with Ken Burns Effect */}
            <motion.div 
              className="absolute inset-0"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 10, ease: "linear" }}
            >
              <img 
                src={heroSlides[currentSlide].image} 
                alt="Hero background" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
              <div className="hero-overlay"></div>
            </motion.div>

            {/* Enhanced Floating Elements with Stagger */}
            <motion.div 
              className="absolute inset-0 overflow-hidden pointer-events-none"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`floating-shape absolute rounded-full ${
                    i % 3 === 0 ? 'bg-ges-gold/20' : i % 3 === 1 ? 'bg-ges-teal/20' : 'bg-ges-purple/20'
                  }`}
                  style={{
                    width: `${Math.random() * 80 + 40}px`,
                    height: `${Math.random() * 80 + 40}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="text-white font-sans"
                  style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                >
                  {/* Rotating Institution Logos with Enhanced Animation */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentInstitutionIndex}
                      initial={{ opacity: 0, y: -20, rotateY: -15 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      exit={{ opacity: 0, y: 20, rotateY: 15 }}
                      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                      className="mb-4 sm:mb-6 md:mb-8 flex items-center space-x-2 sm:space-x-3 md:space-x-4"
                    >
                      <motion.img 
                        src={currentInstitution.logo} 
                        alt={currentInstitution.name + ' Logo'} 
                        className="h-20 sm:h-24 md:h-32 lg:h-36 w-auto drop-shadow-2xl"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                      <div>
                        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                          {currentInstitution.name}
                        </h2>
                        <p className="text-ges-gold text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider">
                          {currentInstitution.url}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  <motion.div 
                    className="inline-flex items-center bg-ges-gold/20 backdrop-blur-md rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4 md:mb-6 border border-ges-gold/30"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(234, 179, 8, 0.3)' }}
                  >
                    <LuCalendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-ges-gold" />
                    <span className="text-xs sm:text-sm font-medium">GES Calendar</span>
                    <LuSparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 text-ges-gold animate-pulse" />
                  </motion.div>
                  
                  <motion.h1 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight font-sans"
                    style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 text-ges-gold font-medium font-sans"
                    style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {heroSlides[currentSlide].subtitle}
                  </motion.p>
                  
                  <motion.p 
                    className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 text-gray-200 leading-relaxed max-w-2xl font-sans"
                    style={{ whiteSpace: 'pre-line', fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {getHeroDescription()}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.08, boxShadow: '0 12px 40px 0 rgba(234, 179, 8, 0.4)' }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-ges-gold text-ges-navy px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white transition-all duration-300 flex items-center justify-center group shadow-xl font-sans"
                      style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                    >
                      {heroSlides[currentSlide].cta}
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <LuArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.08, boxShadow: '0 12px 40px 0 rgba(255, 255, 255, 0.2)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-ges-navy transition-all duration-300 flex items-center justify-center group font-sans backdrop-blur-sm"
                      style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <LuPlay className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                      Watch Video
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Right Side - Enhanced Logo Display */}
                <motion.div
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                  className="relative hidden lg:block"
                >
                  <div className="relative">
                    <motion.div 
                      className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10"
                      initial={{ scale: 0.9, rotateY: -10 }}
                      animate={{ scale: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      whileHover={{ scale: 1.02, rotateY: 2 }}
                    >
                      <motion.img 
                        src="/logo.png" 
                        alt="GES Logo" 
                        className="h-60 sm:h-64 md:h-72 lg:h-80 w-auto object-contain drop-shadow-2xl"
                        initial={{ scale: 0.9, rotate: -3 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          type: 'spring', 
                          stiffness: 80,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          repeatDelay: 5
                        }}
                      />
                    </motion.div>
                    
                    {/* Floating Stats - Enhanced */}
                    <motion.div
                      className="absolute -bottom-6 -right-6 bg-gradient-to-br from-ges-gold to-ges-gold/80 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                          <LuUsers className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">2,500+</div>
                          <div className="text-sm text-white/80">Students</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
          <motion.button 
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/30"
          >
            <LuChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-ges-gold w-8' : 'bg-white/50 w-3'
                }`}
              />
            ))}
          </div>
          
          <motion.button 
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all border border-white/30"
          >
            <LuChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* Enhanced Logos Carousel Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ges-gold to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ges-teal to-transparent"></div>
        </motion.div>
        
        <div className="relative">
          <div className="flex animate-scroll font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 flex items-center justify-center px-8"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="h-16 sm:h-20 md:h-24 w-auto max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer filter drop-shadow-lg"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-ges-navy via-ges-blue to-ges-teal relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center group"
              >
                <motion.div 
                  className="w-20 h-20 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all border border-white/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-10 h-10 text-ges-gold" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-ges-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-ges-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-ges-purple rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-ges-gold/20 text-ges-navy rounded-full text-sm font-semibold">
                Why Choose Us
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Excellence in Every Aspect
            </h2>
            <p className="text-xl text-ges-slate max-w-2xl mx-auto">
              Discover what makes us the preferred choice for quality education
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-ges-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                <motion.div 
                  className={`w-16 h-16 ${feature.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-ges-navy mb-4 font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-ges-slate leading-relaxed font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>
                  {feature.description}
                </p>
                
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-ges-gold via-ges-teal to-ges-purple"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Institutions Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ges-cream/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-ges-teal/20 text-ges-navy rounded-full text-sm font-semibold flex items-center gap-2">
                <LuSparkles className="w-4 h-4" />
                Our Network
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Explore Our Institutions
            </h2>
            <p className="text-xl text-ges-slate max-w-2xl mx-auto">
              World-class education across multiple campuses
            </p>
          </motion.div>

          <div className="relative -mx-4 px-4">
            <div className="overflow-hidden py-8">
              <motion.div
                animate={{ x: -institutionSlide * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex"
              >
                {/* Generate slides */}
                {Array.from({ length: Math.ceil(institutions.length / 4) }).map((_, slideIdx) => (
                  <div key={slideIdx} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
                    {institutions.slice(slideIdx * 4, (slideIdx + 1) * 4).map((institution, index) => (
                      <motion.div
                        key={institution.slug}
                        onClick={() => handleInstitutionClick(institution.slug!)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="cursor-pointer bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <motion.img 
                            src={institution.image} 
                            alt={institution.name} 
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                          
                          <motion.div 
                            className="absolute top-4 right-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="px-4 py-2 bg-ges-gold text-ges-navy rounded-full text-sm font-medium backdrop-blur-md">
                              {institution.type}
                            </div>
                          </motion.div>
                          
                          <div className="absolute bottom-4 left-4 text-white">
                            <motion.div 
                              className="text-3xl font-bold"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {institution.students}
                            </motion.div>
                            <div className="text-sm opacity-90">Active Students</div>
                          </div>
                        </div>
                        
                        <div className="p-8 relative">
                          <motion.h3 
                            className="text-2xl font-bold text-ges-navy mb-4 group-hover:text-ges-teal transition-colors"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {institution.name}
                          </motion.h3>
                          
                          <p className="text-ges-slate mb-6 leading-relaxed">
                            {institution.description}
                          </p>
                          
                          <motion.div 
                            className="inline-flex items-center text-ges-teal font-semibold group"
                            whileHover={{ x: 5 }}
                          >
                            Learn More 
                            <LuArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </motion.div>
                          
                          <motion.div
                            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-ges-teal to-ges-gold"
                            initial={{ width: 0 }}
                            whileHover={{ width: '100%' }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 8px 24px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInstitutionSlide(Math.max(0, institutionSlide - 1))}
                disabled={institutionSlide === 0}
                className="p-4 bg-gradient-to-br from-ges-gold to-ges-gold/80 text-ges-navy rounded-full hover:from-ges-teal hover:to-ges-teal/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
              >
                <LuChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(institutions.length / 4) }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setInstitutionSlide(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      institutionSlide === index 
                        ? 'bg-gradient-to-r from-ges-gold to-ges-teal w-12' 
                        : 'bg-gray-300 w-3'
                    }`}
                  />
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0 8px 24px rgba(234, 179, 8, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInstitutionSlide(Math.min(Math.ceil(institutions.length / 4) - 1, institutionSlide + 1))}
                disabled={institutionSlide >= Math.ceil(institutions.length / 4) - 1}
                className="p-4 bg-gradient-to-br from-ges-gold to-ges-gold/80 text-ges-navy rounded-full hover:from-ges-teal hover:to-ges-teal/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
              >
                <LuChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setIsVideoPlaying(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
              >
                <LuX className="w-6 h-6" />
              </motion.button>
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <LuPlay className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  </motion.div>
                  <p className="text-lg opacity-75">Video content would be embedded here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Institution Preview Modal */}
      <AnimatePresence>
        {previewInstitution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closePreview}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl w-[85vw] h-[95vh] flex flex-col border border-white/20"
            >
              {/* Preview Header */}
              <motion.div 
                className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-ges-navy via-ges-blue to-ges-teal text-white border-b border-white/10"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <span className="ml-4 text-sm font-medium opacity-90">{previewInstitution.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={visitFullSite}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-md"
                  >
                    <LuExternalLink className="w-4 h-4" />
                    Open Full Site
                  </motion.button>
                  <motion.button
                    onClick={closePreview}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all"
                  >
                    <LuX className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Preview Content */}
              <div className="flex-1 bg-gray-100 relative overflow-hidden">
                <iframe
                  src={`/institutions/${previewInstitution.slug}`}
                  className="w-full h-full border-0"
                  title={`Preview of ${previewInstitution.name}`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
