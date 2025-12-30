import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { galleryImages } from './gesLifeGalleryImages';

// School data
const schools = [
  {
    name: 'St. Andrew Kaggwa Gombe High School - Kawaala',
    logo: '/images/Gombe High logo.png',
    path: '/institutions/sakghs-kawaala',
    color: 'from-ges-navy to-ges-gold',
    description: 'O & A Level, Day & Boarding, Academic Excellence, Kampala',
  },
  {
    name: 'St. Andrew Kaggwa Gombe High School - Bujuuko',
    logo: '/images/Gombe High logo.png',
    path: '/institutions/sakghs-bujuuko',
    color: 'from-ges-blue to-ges-gold',
    description: 'O & A Level, Day & Boarding, Modern Campus, Wakiso',
  },
  {
    name: 'Gombe Junior School - Kikajjo',
    logo: '/images/Gombe Junior School logo.png',
    path: '/institutions/gjs-kikajjo',
    color: 'from-ges-teal to-ges-blue',
    description: 'Day School, Primary, Community Impact, Wakiso',
  },
  {
    name: 'Gombe Junior School - Boarding',
    logo: '/images/Gombe Junior School logo.png',
    path: '/institutions/gjs-boarding',
    color: 'from-ges-purple to-ges-teal',
    description: 'Boarding, Primary, Top Results, Butambala',
  },
  {
    name: 'Scooby Doo International School Uganda (SISU) - Katale',
    logo: '/images/scoobydoo-logo.png',
    path: '/institutions/scooby-katale',
    color: 'from-ges-gold to-ges-purple',
    description: 'International, Early Years, Katale',
  },
  {
    name: 'Scooby Doo International School Uganda (SISU) - Gulu',
    logo: '/images/scoobydoo-logo.png',
    path: '/institutions/scooby-gulu',
    color: 'from-ges-gold to-ges-blue',
    description: 'International, Early Years, Gulu',
  },
  {
    name: 'Jimmy Sekasi Business Institute (JSBI)',
    logo: '/images/Jimmy Ssekasi Business Institute Logo.png',
    path: '/institutions/jsbi',
    color: 'from-ges-orange to-ges-navy',
    description: 'Business, Entrepreneurship, Kampala',
  },
];

const GESLifeCatalogue: React.FC = () => {
  return (
    <div className="min-h-screen bg-ges-cream py-16 px-4 font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-ges-navy drop-shadow-lg">GES Life: Our Schools</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {schools.map((school, idx) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 120 }}
              className={`relative rounded-3xl shadow-xl overflow-hidden group bg-gradient-to-br ${school.color} hover:scale-[1.03] transition-transform duration-300`}
              style={{ minHeight: 340 }}
            >
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img src={school.logo} alt={school.name + ' logo'} className="w-full h-full object-contain" />
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                <motion.img
                  src={school.logo}
                  alt={school.name + ' logo'}
                  className="h-24 w-auto mb-6 drop-shadow-xl bg-white/70 rounded-2xl p-2"
                  initial={{ scale: 0.9, rotate: -8 }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
                <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow mb-2 font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>{school.name}</h2>
                <p className="text-lg text-white/90 mb-4 font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>{school.description}</p>
                <Link
                  to={school.path}
                  className="inline-block mt-2 px-8 py-3 rounded-full bg-white/90 text-ges-navy font-bold text-lg shadow-lg hover:bg-ges-gold hover:text-white transition-all duration-300 font-sans"
                  style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}
                >
                  Explore School
                </Link>
              </div>
              {/* Decorative floating shapes */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-float" style={{ animationDelay: `${idx * 0.3}s` }}></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: `${idx * 0.5}s` }}></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Gallery Section */}
      <section className="max-w-7xl mx-auto mt-20 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-ges-navy font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>
          GES Life Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
              className="relative overflow-hidden rounded-3xl shadow-xl group bg-white"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, type: 'spring', stiffness: 120 }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                initial={{ scale: 1.02 }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 180 }}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-base font-medium font-sans" style={{ fontFamily: 'Ubuntu, system-ui, sans-serif' }}>{img.alt}</p>
              </div>
              {/* Floating shape for extra flair */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-ges-gold/20 rounded-full blur-2xl animate-float" style={{ animationDelay: `${idx * 0.2}s` }}></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GESLifeCatalogue;
