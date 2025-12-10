import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuExternalLink, LuChevronLeft, LuChevronRight, LuX } from 'react-icons/lu';
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

        <div className="relative py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div className="flex justify-center mb-8" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-white">
                <img src="/images/GombeBadge.jpg" alt="Gombe Junior School" className="h-32 w-auto" />
              </div>
            </motion.div>

            <motion.h1 className="text-7xl md:text-8xl font-black mb-4 text-white drop-shadow-xl" initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 100 }}>
              Gombe Junior School
            </motion.h1>

            <motion.div className="inline-block bg-white px-10 py-4 rounded-3xl shadow-2xl mb-8 border-4 border-yellow-400" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-600">
                Kikajjo Day Campus 🌟
              </p>
            </motion.div>

            <motion.p className="text-3xl font-black text-white drop-shadow-lg mb-6" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
              Where Happy Kids Learn! 📚✨
            </motion.p>

            <motion.div className="bg-white/95 backdrop-blur-sm px-10 py-6 rounded-3xl shadow-2xl max-w-2xl mx-auto border-4 border-blue-300" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
              <p className="text-xl font-bold text-gray-800">
                A fun, caring, and excellent day school where every child shines! 🌈💚
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - Why Us */}
      <section className="py-24 bg-gradient-to-b from-purple-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-purple-800 drop-shadow-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Why Choose Us? 💡
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-4 border-purple-300 text-center"
              >
                <div className="text-7xl mb-4 drop-shadow-lg">{item.emoji}</div>
                <h3 className="text-2xl font-black text-purple-800 mb-2">{item.label}</h3>
                <p className="text-gray-700 font-semibold">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery/Photos Section */}
      <section className="py-24 bg-gradient-to-b from-green-100 to-teal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-5xl md:text-6xl font-black text-center mb-6 text-green-800 drop-shadow-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            See Our School! 📸
          </motion.h2>

          <motion.p className="text-2xl text-center text-green-700 font-bold mb-12" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} viewport={{ once: true }}>
            Click below to explore our beautiful campus
          </motion.p>

          <motion.div
            onClick={() => setIsGalleryOpen(true)}
            whileHover={{ scale: 1.05 }}
            className="relative max-w-4xl mx-auto cursor-pointer overflow-hidden rounded-3xl shadow-2xl border-8 border-white"
          >
            <div className="relative h-96 flex items-center justify-center gap-4">
              {galleryImages.slice(0, 3).map((img, idx) => (
                <div key={idx} className="relative h-80 flex-1 overflow-hidden rounded-2xl border-4 border-white">
                  <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-yellow-400 px-10 py-6 rounded-3xl border-4 border-white shadow-2xl">
                  <p className="text-white font-black text-2xl">Click to View!</p>
                </div>
              </div>
            </div>
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
                className="absolute -top-16 right-0 text-white hover:text-yellow-300 transition-colors"
              >
                <LuX className="w-12 h-12" />
              </button>

              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                src={galleryImages[currentImageIndex]}
                alt={`Gallery ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full transition-all font-black text-2xl border-4 border-white"
              >
                <LuChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full transition-all font-black text-2xl border-4 border-white"
              >
                <LuChevronRight className="w-8 h-8" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-white px-6 py-3 rounded-full font-black text-lg border-4 border-white">
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-b from-pink-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-pink-800 drop-shadow-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            What We Offer 🎯
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${prog.color} rounded-3xl p-10 shadow-2xl text-white border-4 border-white`}
              >
                <div className="text-8xl mb-4 drop-shadow-lg">{prog.emoji}</div>
                <h3 className="text-3xl font-black mb-4">{prog.title}</h3>
                <p className="text-lg font-bold">{prog.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-orange-300 via-red-300 to-pink-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-6xl font-black mb-8 text-white drop-shadow-xl">Ready to Join Us? 🚀</h2>
            <p className="text-2xl text-white font-bold mb-12 drop-shadow-lg">
              Give your child a wonderful learning experience!
            </p>

            <div className="bg-white rounded-3xl p-10 max-w-2xl mx-auto border-4 border-white shadow-2xl mb-12">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 text-lg font-black text-gray-800">
                  <LuMapPin className="w-8 h-8 text-orange-600" />
                  <span>Kikajjo, Wakiso</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg font-black text-gray-800">
                  <LuPhone className="w-8 h-8 text-orange-600" />
                  <span>+256 700 000 004</span>
                </div>
                <div className="flex items-center justify-center space-x-4 text-lg font-black text-gray-800">
                  <LuMail className="w-8 h-8 text-orange-600" />
                  <span>info@gjs-kikajjo.ges.ac.ug</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 rounded-3xl font-black text-3xl text-orange-600 bg-white shadow-2xl hover:shadow-xl transition-all border-4 border-white"
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
