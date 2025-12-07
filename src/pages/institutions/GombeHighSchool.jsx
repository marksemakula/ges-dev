import React from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuPhone, LuMail, LuUsers, LuAward, LuBookOpen, LuCalendar, LuArrowRight, LuExternalLink, LuStar, LuTarget, LuTrendingUp } from 'react-icons/lu';

const GombeHighSchool = () => {
  const stats = [
    { icon: LuUsers, label: 'Students', value: '800+', color: 'text-ges-blue' },
    { icon: LuAward, label: 'Pass Rate', value: '98%', color: 'text-ges-gold' },
    { icon: LuBookOpen, label: 'Subjects', value: '20+', color: 'text-ges-teal' },
    { icon: LuTarget, label: 'University Admissions', value: '95%', color: 'text-ges-purple' },
  ];

  const programs = [
    {
      title: 'Sciences Program',
      description: 'Comprehensive science education covering Physics, Chemistry, Biology, and Mathematics',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'ICT'],
      color: 'bg-ges-blue'
    },
    {
      title: 'Arts Program',
      description: 'Liberal arts education focusing on languages, humanities, and social sciences',
      subjects: ['Literature', 'History', 'Geography', 'Economics', 'Languages'],
      color: 'bg-ges-teal'
    },
    {
      title: 'Technical Program',
      description: 'Practical skills development in technical and vocational subjects',
      subjects: ['Technical Drawing', 'Computer Science', 'Agriculture', 'Business Studies'],
      color: 'bg-ges-purple'
    }
  ];

  const facilities = [
    {
      name: 'Science Laboratories',
      description: 'State-of-the-art labs for Physics, Chemistry, and Biology',
      image: '/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg'
    },
    {
      name: 'Digital Library',
      description: 'Modern library with digital resources and study spaces',
      image: '/images/schoolgroup.jpg'
    },
    {
      name: 'Sports Complex',
      description: 'Multi-purpose sports facilities for various athletic activities',
      image: '/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg'
    },
    {
      name: 'Computer Lab',
      description: 'Modern computer laboratory with high-speed internet',
      image: '/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg'
    }
  ];

  const achievements = [
    { year: '2023', title: 'National Science Fair Winners', description: 'Three students won top prizes in the national science competition' },
    { year: '2023', title: 'Outstanding Academic Performance', description: '98% pass rate in Uganda Certificate of Education examinations' },
    { year: '2022', title: 'Sports Championship', description: 'Regional champions in football and athletics' },
    { year: '2022', title: 'ICT Excellence Award', description: 'Recognized for innovative use of technology in education' }
  ];

  return (
    <div className="min-h-screen bg-ges-cream">
      {/* Hero Section */}
      <section className="bg-ges-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg" 
            alt="Gombe High School" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ges-navy/90 to-ges-blue/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-ges-gold/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <LuExternalLink className="w-4 h-4 mr-2 text-ges-gold" />
              <span className="text-sm font-medium">gombehighschool.ges.ac.ug</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gombe High School
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Excellence in Secondary Education • Established 1995
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Providing comprehensive secondary education with a focus on academic excellence, character development, and preparation for higher education and future careers.
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

      {/* Programs Section */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Academic Programs
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Comprehensive curriculum designed to prepare students for university education and future careers
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <LuBookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-ges-navy mb-4">{program.title}</h3>
                <p className="text-ges-slate mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-ges-navy">Key Subjects:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-ges-cream text-ges-navy rounded-full text-sm font-medium"
                      >
                        {subject}
                      </span>
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

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              World-Class Facilities
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Modern infrastructure designed to support effective learning and student development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
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
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{facility.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-ges-slate leading-relaxed">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-ges-cream">
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
              Celebrating our students' and institution's outstanding accomplishments
            </p>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-6"
              >
                <div className="w-16 h-16 bg-ges-gold rounded-full flex items-center justify-center text-ges-navy font-bold text-lg flex-shrink-0">
                  {achievement.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ges-navy mb-2">{achievement.title}</h3>
                  <p className="text-ges-slate">{achievement.description}</p>
                </div>
                <LuAward className="w-8 h-8 text-ges-gold flex-shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-ges-navy mb-6">
                Visit Gombe High School
              </h2>
              <p className="text-lg text-ges-slate mb-8 leading-relaxed">
                Experience our vibrant learning community firsthand. Schedule a visit to see our facilities, meet our dedicated faculty, and learn more about our programs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <LuMapPin className="w-6 h-6 text-ges-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ges-navy">Address</h3>
                    <p className="text-ges-slate">Gombe District, Uganda<br />P.O. Box 123, Gombe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <LuPhone className="w-6 h-6 text-ges-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ges-navy">Phone</h3>
                    <p className="text-ges-slate">+256 700 123 456<br />+256 800 987 654</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <LuMail className="w-6 h-6 text-ges-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-ges-navy">Email</h3>
                    <p className="text-ges-slate">info@gombehighschool.ges.ac.ug<br />admissions@gombehighschool.ges.ac.ug</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-ges-gold text-ges-navy px-8 py-3 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 shadow-lg"
                >
                  Schedule Visit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-ges-gold text-ges-gold px-8 py-3 rounded-full font-semibold hover:bg-ges-gold hover:text-ges-navy transition-all duration-300"
                >
                  Apply Now
                </motion.button>
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
                alt="Students at Gombe High School" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ges-gold rounded-2xl opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-ges-teal rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GombeHighSchool;