import React from 'react';
import { motion } from 'framer-motion';
import { LuAward, LuUsers, LuGlobe, LuBookOpen, LuTarget, LuEye, LuHeart } from 'react-icons/lu';

const About = () => {
  const stats = [
    { icon: LuUsers, label: 'Students', value: '2,500+', color: 'text-ges-blue' },
    { icon: LuAward, label: 'Awards', value: '150+', color: 'text-ges-gold' },
    { icon: LuBookOpen, label: 'Programs', value: '25+', color: 'text-ges-teal' },
    { icon: LuGlobe, label: 'Countries', value: '15+', color: 'text-ges-purple' },
  ];

  const values = [
    {
      icon: LuTarget,
      title: 'Excellence',
      description: 'We strive for excellence in all aspects of education, from academics to character development.',
    },
    {
      icon: LuHeart,
      title: 'Integrity',
      description: 'We uphold the highest standards of integrity, honesty, and ethical behavior in all our interactions.',
    },
    {
      icon: LuUsers,
      title: 'Community',
      description: 'We foster a strong sense of community where everyone feels valued, respected, and supported.',
    },
    {
      icon: LuGlobe,
      title: 'Innovation',
      description: 'We embrace innovation and continuous improvement to stay at the forefront of educational excellence.',
    },
  ];

  return (
    <div className="min-h-screen bg-ges-cream">
      {/* Hero Section */}
      <section className="bg-ges-gradient text-white pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-shape absolute top-20 left-10 w-32 h-32 bg-ges-gold/20 rounded-full"></div>
          <div className="floating-shape absolute bottom-20 right-20 w-48 h-48 bg-ges-teal/20 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About GES
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Gombe Education Services has been at the forefront of educational excellence for over 25 years, shaping minds and building futures across Uganda and beyond.
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

      {/* Mission & Vision */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <LuTarget className="w-8 h-8 text-ges-gold mr-4" />
                  <h2 className="text-3xl font-bold text-ges-navy">Our Mission</h2>
                </div>
                <p className="text-lg text-ges-slate leading-relaxed">
                  To provide world-class education that empowers students with knowledge, skills, and values necessary for success in a rapidly changing global society. We are committed to fostering critical thinking, creativity, and character development in every student.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <LuEye className="w-8 h-8 text-ges-teal mr-4" />
                  <h2 className="text-3xl font-bold text-ges-navy">Our Vision</h2>
                </div>
                <p className="text-lg text-ges-slate leading-relaxed">
                  To be the leading educational institution in East Africa, recognized for academic excellence, innovative teaching methods, and the holistic development of students who become responsible global citizens and leaders of tomorrow.
                </p>
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
                alt="Students in classroom" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ges-gold rounded-2xl opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-ges-teal rounded-full opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our educational community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover border border-gray-100"
              >
                <div className="w-16 h-16 bg-ges-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ges-gold group-hover:text-white transition-all duration-300">
                  <value.icon className="w-8 h-8 text-ges-gold group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-ges-navy mb-4">{value.title}</h3>
                <p className="text-ges-slate leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              From humble beginnings to becoming a premier educational institution
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-ges-gold"></div>
            <div className="space-y-12">
              {[
                { year: '1995', title: 'Foundation of GES', description: 'Gombe Education Services was established with a vision to provide quality education in rural Uganda.' },
                { year: '2000', title: 'Expansion Phase', description: 'Added Gombe Junior School to cater to primary education needs in the community.' },
                { year: '2005', title: 'International Recognition', description: 'Launched Scooby Doo International School Uganda (SISU) with Cambridge curriculum, gaining international recognition.' },
                { year: '2010', title: 'Business Education', description: 'Established Jimmy Sekasi Business Institute to promote entrepreneurship and business skills.' },
                { year: '2020', title: 'Digital Transformation', description: 'Embraced digital learning technologies and launched online education platforms.' },
                { year: '2024', title: 'Future Ready', description: 'Continuing to innovate and prepare students for the challenges of tomorrow.' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center"
                >
                  <div className="w-16 h-16 bg-ges-gold rounded-full flex items-center justify-center text-ges-navy font-bold mr-8 shadow-lg">
                    {milestone.year}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                    <h3 className="text-xl font-bold text-ges-navy mb-2">{milestone.title}</h3>
                    <p className="text-ges-slate">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Join Our Legacy
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Become part of our educational family and experience the difference that quality education makes.
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
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;