import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const GJSKikajjo = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    '/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg',
    '/images/schoolgroup.jpg',
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

  const highlights = [
    { emoji: '📚', label: 'P1-P7', description: 'Complete Primary Education' },
    { emoji: '🎨', label: 'Creative', description: 'Arts & Creativity' },
    { emoji: '⚽', label: 'Sports', description: 'Sports & Activities' },
    { emoji: '👨‍🏫', label: 'Expert Teachers', description: 'Experienced Faculty' },
  ];

  const programs = [
    {
      emoji: '📖',
      title: 'Academics',
      description: 'Strong foundation in Literacy and Numeracy with modern teaching methods',
      color: 'from-blue-400 to-blue-600',
    },
    {
      emoji: '🚌',
      title: 'Safe Transport',
      description: 'Daily school transport ensuring safe commute for all day scholars',
      color: 'from-orange-400 to-orange-600',
    },
    {
      emoji: '❤️',
      title: 'Care & Love',
      description: 'Nurturing environment with individual attention and pastoral care',
      color: 'from-pink-400 to-pink-600',
    },
  ];

  return (
    <div className="min-h-screen" style={{ viewTransitionName: 'institution-gjs-kikajjo' }}>
      <GJSHeader />
      
      {/* Hero Section - Vibrant & Fun */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300"></div>
        
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 left-10 text-8xl">⭐</motion.div>
          <motion.div animate={{ y: [0, 20, 0], rotate: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute top-32 right-16 text-7xl">🎈</motion.div>
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-32 left-20 text-8xl">✨</motion.div>
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute bottom-20 right-1/4 text-8xl">🌈</motion.div>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.3 }} className="absolute top-1/2 right-10 text-7xl">☀️</motion.div>
          <motion.div animate={{ bounce: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-40 left-1/4 text-7xl">🎓</motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              className="flex justify-center mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-white p-4 rounded-full shadow-2xl">
                <img
                  src="/images/GombeBadge.jpg"
                  alt="Gombe Junior School"
                  className="h-24 w-auto"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center rounded-full px-6 py-3 mb-6 bg-white shadow-lg"
            >
              <LuExternalLink className="w-4 h-4 mr-2 text-purple-600" />
              <span className="text-sm font-bold text-purple-600">gjs-kikajjo.ges.ac.ug</span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-black mb-4 text-white drop-shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
            >
              Gombe Junior School 🎓
            </motion.h1>
            
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block bg-white px-8 py-3 rounded-full shadow-xl mb-6"
            >
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Kikajjo Day Campus 🌟
              </p>
            </motion.div>
            
            <motion.p 
              className="text-xl mb-6 leading-relaxed text-white font-semibold drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              🎨 Where Learning is Fun! 📚 P1-P7 Excellence 🌈
            </motion.p>
            
            <motion.p 
              className="text-lg max-w-3xl mx-auto leading-relaxed bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl text-gray-800 font-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              A magical place where children discover, learn, and grow! Bringing joy and excellence to the Kikajjo community since 2019. 🚌✨
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section - See Our School! 📸 */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-green-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-green-800 drop-shadow-lg">
              See Our School! 📸
            </h2>
            <p className="text-2xl text-green-700 font-bold mb-12">
              Explore our beautiful campus and vibrant learning spaces ✨
            </p>

            {/* Gallery Preview */}
            <motion.div
              onClick={() => setIsGalleryOpen(true)}
              whileHover={{ scale: 1.02 }}
              className="relative max-w-4xl mx-auto cursor-pointer overflow-hidden rounded-3xl shadow-2xl border-4 border-white"
            >
              <div className="relative h-96 flex items-center justify-center gap-4 bg-white">
                {galleryImages.slice(0, 3).map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative h-80 flex-1"
                  >
                    <img
                      src={img}
                      alt={`Preview ${idx + 1}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-yellow-400 px-10 py-6 rounded-3xl border-4 border-white shadow-2xl"
                  >
                    <p className="text-white font-black text-2xl">View Gallery! 🖼️</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-yellow-400 transition-colors z-10"
              >
                <LuX className="w-8 h-8" />
              </button>

              {/* Image */}
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={galleryImages[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full transition-all font-black text-2xl shadow-2xl"
              >
                <LuChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full transition-all font-black text-2xl shadow-2xl"
              >
                <LuChevronRight className="w-6 h-6" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-6 py-3 rounded-full font-black text-lg border-4 border-white shadow-2xl">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Programs Section - What We Offer 🎯 */}
      <section id="programs" className="py-20 md:py-32 bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-pink-800 drop-shadow-lg">
              What We Offer 🎯
            </h2>
            <p className="text-2xl text-pink-700 font-bold mt-4">
              Everything your child needs to thrive! 🌟
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                emoji: '📖',
                title: 'Academics',
                description: 'Excellent teaching with modern methods',
                gradient: 'from-blue-400 to-blue-600'
              },
              {
                emoji: '🚌',
                title: 'Safe Transport',
                description: 'Reliable and safe daily transportation',
                gradient: 'from-orange-400 to-orange-600'
              },
              {
                emoji: '❤️',
                title: 'Care & Love',
                description: 'Nurturing environment with personal attention',
                gradient: 'from-pink-400 to-pink-600'
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${program.gradient} rounded-3xl p-10 shadow-2xl text-white border-4 border-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-8xl mb-6 drop-shadow-xl">{program.emoji}</div>
                <h3 className="text-4xl font-black mb-4">{program.title}</h3>
                <p className="text-xl font-bold leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Ready to Join Us? 🚀 */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-orange-300 via-red-300 to-pink-300 overflow-hidden relative">
        {/* Decorative floating emoji */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-10 right-20 text-7xl opacity-30">✏️</motion.div>
          <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute bottom-20 left-10 text-6xl opacity-20">🎓</motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white drop-shadow-xl">
              Ready to Join Us? 🚀
            </h2>
            <p className="text-2xl text-white font-bold mb-12 drop-shadow-lg">
              Give your child an amazing learning experience!
            </p>

            {/* Contact Info Box */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 max-w-2xl mx-auto border-4 border-white shadow-2xl mb-12"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-xl">
                  <LuMapPin className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-black text-gray-800">Location</p>
                    <p className="text-gray-700 font-bold">Kikajjo, Wakiso</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4 text-xl">
                  <LuPhone className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-black text-gray-800">Call Us</p>
                    <p className="text-gray-700 font-bold">+256 700 000 004</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4 text-xl">
                  <LuMail className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-black text-gray-800">Email</p>
                    <p className="text-gray-700 font-bold">info@gjs-kikajjo.ges.ac.ug</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-16 py-6 rounded-3xl font-black text-3xl text-orange-600 bg-white border-4 border-white shadow-2xl hover:bg-yellow-100 transition-all duration-300"
            >
              Enroll Now! 📝
            </motion.button>
          </motion.div>
        </div>
      </section>
      <GJSFooter />
    </div>
  );
};

export default GJSKikajjo;
