import React from 'react';
import { motion } from 'framer-motion';
import { LuGlobe, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuMapPin, LuArrowRight, LuExternalLink, LuStar, LuTarget, LuLanguages, LuGraduationCap } from 'react-icons/lu';

const ScoobyDooInternational = () => {
  const stats = [
    { icon: LuUsers, label: 'Students', value: '400+', color: 'text-ges-blue' },
    { icon: LuGlobe, label: 'Countries', value: '15+', color: 'text-ges-gold' },
    { icon: LuAward, label: 'IB Pass Rate', value: '96%', color: 'text-ges-teal' },
    { icon: LuGraduationCap, label: 'University Acceptance', value: '98%', color: 'text-ges-purple' },
  ];

  const curricula = [
    {
      title: 'International Baccalaureate (IB)',
      description: 'Comprehensive international education program recognized by universities worldwide',
      features: ['Diploma Programme', 'Theory of Knowledge', 'Extended Essay', 'CAS Activities'],
      color: 'bg-ges-blue'
    },
    {
      title: 'Cambridge International',
      description: 'British curriculum with IGCSE and A-Level qualifications',
      features: ['IGCSE Programme', 'A-Level Studies', 'Global Perspective', 'English Proficiency'],
      color: 'bg-ges-teal'
    },
    {
      title: 'American High School',
      description: 'US-style education with Advanced Placement (AP) courses',
      features: ['AP Courses', 'SAT Preparation', 'College Counseling', 'Credit Transfer'],
      color: 'bg-ges-purple'
    }
  ];

  const languages = [
    { name: 'English', level: 'Native/Fluent', flag: '🇬🇧' },
    { name: 'French', level: 'Advanced', flag: '🇫🇷' },
    { name: 'Spanish', level: 'Intermediate', flag: '🇪🇸' },
    { name: 'Mandarin', level: 'Beginner', flag: '🇨🇳' },
    { name: 'Swahili', level: 'Native', flag: '🇰🇪' },
    { name: 'German', level: 'Intermediate', flag: '🇩🇪' }
  ];

  const globalPartnerships = [
    {
      name: 'Harvard University',
      country: 'USA',
      program: 'Summer Research Program',
      image: '/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg'
    },
    {
      name: 'University of Cambridge',
      country: 'UK',
      program: 'Academic Exchange',
      image: '/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg'
    },
    {
      name: 'Sorbonne University',
      country: 'France',
      program: 'Language Immersion',
      image: '/images/happy pupil.jpg'
    },
    {
      name: 'University of Toronto',
      country: 'Canada',
      program: 'Science Collaboration',
      image: '/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg'
    }
  ];

  const achievements = [
    { year: '2023', title: 'IB World School Excellence Award', description: 'Recognized for outstanding implementation of IB programmes' },
    { year: '2023', title: 'Global Student Exchange Success', description: '45 students participated in international exchange programs' },
    { year: '2022', title: 'Model United Nations Champions', description: 'Won regional MUN competition for third consecutive year' },
    { year: '2022', title: 'International Science Olympiad', description: 'Students placed in top 10 globally in multiple science categories' }
  ];

  return (
    <div className="min-h-screen bg-ges-cream">
      {/* Hero Section */}
      <section className="bg-ges-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/happy pupil.jpg" 
            alt="Scooby Doo International School" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ges-navy/90 to-ges-teal/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-ges-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <LuGlobe className="w-4 h-4 mr-2 text-ges-gold" />
              <span className="text-sm font-medium">scoobydoo.ges.ac.ug</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Scooby Doo International School
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Global Education • International Curriculum • Established 2005
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Providing world-class international education with IB, Cambridge, and American curricula. Preparing students for success in global universities and international careers.
            </p>
          </motion.div>
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
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-ges-navy mb-2">{stat.value}</div>
                <div className="text-ges-slate font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curricula Section */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              International Curricula
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Choose from world-renowned educational programs designed for global university admission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curricula.map((curriculum, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className={`w-16 h-16 ${curriculum.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <LuBookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ges-navy mb-4">{curriculum.title}</h3>
                <p className="text-ges-slate mb-6 leading-relaxed">{curriculum.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-ges-navy">Key Features:</h4>
                  <div className="space-y-2">
                    {curriculum.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-ges-slate">
                        <div className="w-2 h-2 bg-ges-gold rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="w-full mt-6 bg-ges-gold text-ges-navy py-3 rounded-lg font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 flex items-center justify-center group">
                  Learn More <LuArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-ges-navy mb-6">
                Language & Culture
              </h2>
              <p className="text-lg text-ges-slate mb-8 leading-relaxed">
                We believe in fostering global citizenship through language acquisition and cultural understanding. Our diverse community represents over 40 nationalities, creating a truly international environment.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-4 bg-ges-cream rounded-xl"
                  >
                    <span className="text-2xl mr-3">{language.flag}</span>
                    <div>
                      <div className="font-bold text-ges-navy">{language.name}</div>
                      <div className="text-xs text-ges-slate">{language.level}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/happy pupil.jpg" 
                alt="Multicultural students" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ges-teal rounded-2xl opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-ges-gold rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Global Partnerships
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Connecting our students with world-leading universities and institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalPartnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium mb-1">{partner.country}</div>
                    <h3 className="text-lg font-bold leading-tight">{partner.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-ges-slate">{partner.program}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Recent Achievements
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Celebrating excellence on the global stage
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-ges-cream rounded-xl p-6 flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-ges-gold rounded-full flex items-center justify-center text-ges-navy font-bold flex-shrink-0">
                  {achievement.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-ges-navy mb-2">{achievement.title}</h3>
                  <p className="text-ges-slate text-sm">{achievement.description}</p>
                </div>
                <LuAward className="w-6 h-6 text-ges-gold flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-ges-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ges-gold/10 rounded-full floating-shape"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-ges-teal/10 rounded-full floating-shape"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Start Your Global Journey
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Join a community of learners who are shaping the future. Apply to Scooby Doo International School today.
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
                Download Brochure
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="flex items-center space-x-3">
                <LuMapPin className="w-6 h-6 text-ges-gold" />
                <div className="text-white">
                  <div className="font-semibold">Location</div>
                  <div className="text-sm opacity-80">Gombe, Uganda</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <LuPhone className="w-6 h-6 text-ges-gold" />
                <div className="text-white">
                  <div className="font-semibold">Call Us</div>
                  <div className="text-sm opacity-80">+256 700 123 458</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <LuMail className="w-6 h-6 text-ges-gold" />
                <div className="text-white">
                  <div className="font-semibold">Email Us</div>
                  <div className="text-sm opacity-80">int@ges.ac.ug</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ScoobyDooInternational;