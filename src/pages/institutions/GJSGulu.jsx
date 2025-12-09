import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuHeart, LuExternalLink, LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const GJSGulu = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const brandColors = {
    primary: '#FFD700', // Yellow
    secondary: '#800E13', // Burgundy
  };

  const galleryImages = [
    '/images/schoolgroup.jpg',
    '/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg',
    '/images/happy pupil.jpg',
    '/images/happgirl.jpg',
    '/images/classexam.jpg',
    '/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const stats = [
    { icon: LuUsers, label: 'Students', value: '480+' },
    { icon: LuAward, label: 'Success Rate', value: '96%' },
    { icon: LuBookOpen, label: 'Levels', value: 'P1-S4' },
    { icon: LuHeart, label: 'Student Care', value: '100%' },
  ];

  const programs = [
    {
      title: 'Primary Education',
      description: 'Strong foundation in literacy, numeracy, and character development',
      features: ['P1-P7', 'Holistic Learning', 'Life Skills'],
    },
    {
      title: 'Lower Secondary',
      description: 'Comprehensive curriculum for S1-S4 with modern teaching methods',
      features: ['Core Subjects', 'Practical Skills', 'ICT Integration'],
    },
    {
      title: 'Character Development',
      description: 'Values-based education emphasizing integrity and leadership',
      features: ['Leadership', 'Ethics', 'Community Service'],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ viewTransitionName: 'institution-gjs-gulu' }}>
      <GJSHeader />
      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden py-28"
        style={{ backgroundColor: '#FDEFB2', color: brandColors.secondary }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-8">
              <img
                src="/images/GombeBadge.jpg"
                alt="Gombe Junior School"
                className="h-28 w-auto drop-shadow-md"
              />
            </div>
            <div className="inline-flex items-center rounded-full px-6 py-2 mb-6" style={{ backgroundColor: `${brandColors.primary}40` }}>
              <LuExternalLink className="w-4 h-4 mr-2" style={{ color: brandColors.primary }} />
              <span className="text-sm font-medium">gjs-gulu.ges.ac.ug</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: brandColors.secondary }}>
              Gombe Junior School
            </h1>
            <p className="text-xl mb-4" style={{ color: brandColors.secondary }}>
              Gulu Campus
            </p>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#5c3a2a' }}>
              Quality Day School Education • Established 2002
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#5c3a2a' }}>
              Day school providing primary and lower secondary education with holistic development and character formation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - replacing Stats */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/schoolgroup.jpg" 
            alt="Gombe Junior School Gallery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#800E13]/90 via-[#800E13]/80 to-[#800E13]/70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Our Campus
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Take a virtual tour of our vibrant learning environment and state-of-the-art facilities
            </p>
            <motion.button
              onClick={() => setIsGalleryOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{ backgroundColor: brandColors.primary, color: brandColors.secondary }}
            >
              View Photo Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#FFD700] transition-colors"
              >
                <LuX className="w-8 h-8" />
              </button>
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={galleryImages[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              >
                <LuChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              >
                <LuChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
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
              Building strong foundations for lifelong learning
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
      <section id="contact" className="py-20 text-white" style={{ backgroundColor: brandColors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Enroll Your Child Today
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Give your child the best foundation at Gombe Junior School - Gulu Campus
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center space-x-2">
                <LuMapPin className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>Gulu City</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuPhone className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>+256 700 000 005</span>
              </div>
              <div className="flex items-center space-x-2">
                <LuMail className="w-5 h-5" style={{ color: brandColors.primary }} />
                <span>info@gjs-gulu.ges.ac.ug</span>
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
      <GJSFooter />
    </div>
  );
};

export default GJSGulu;
