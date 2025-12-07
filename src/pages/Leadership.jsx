import React from 'react';
import { motion } from 'framer-motion';
import { LuMail, LuLinkedin, LuAward, LuGraduationCap } from 'react-icons/lu';

const Leadership = () => {
  const leaders = [
    {
      name: 'Dr. Sarah Mukasa',
      position: 'Executive Director',
      bio: 'With over 20 years in educational leadership, Dr. Mukasa has transformed GES into a premier educational institution.',
      education: 'PhD in Educational Leadership, Harvard University',
      achievements: ['UNESCO Education Award 2022', 'Outstanding Leadership in Education 2021'],
      image: '/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg',
      email: 'sarah.mukasa@ges.ac.ug',
      linkedin: 'https://linkedin.com/in/sarahmukasa'
    },
    {
      name: 'Prof. John Kiprotich',
      position: 'Academic Director',
      bio: 'Prof. Kiprotich oversees academic excellence across all GES institutions with a focus on innovative curriculum development.',
      education: 'PhD in Curriculum Development, University of Cambridge',
      achievements: ['Excellence in Curriculum Innovation 2023', 'Academic Leadership Award 2020'],
      image: '/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg',
      email: 'john.kiprotich@ges.ac.ug',
      linkedin: 'https://linkedin.com/in/johnkirotich'
    },
    {
      name: 'Ms. Grace Nakato',
      position: 'Head of Student Affairs',
      bio: 'Ms. Nakato ensures student welfare and holistic development across all GES institutions.',
      education: 'Masters in Student Affairs, Makerere University',
      achievements: ['Student Advocacy Excellence 2022', 'Community Service Award 2021'],
      image: '/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg',
      email: 'grace.nakato@ges.ac.ug',
      linkedin: 'https://linkedin.com/in/gracenakato'
    },
    {
      name: 'Mr. Michael Ochieng',
      position: 'Director of Operations',
      bio: 'Mr. Ochieng manages operations and infrastructure development across the GES network.',
      education: 'MBA in Operations Management, IUIU',
      achievements: ['Operational Excellence Award 2023', 'Infrastructure Development Leader 2022'],
      image: '/images/annie-spratt-V-XM4kkWpng-unsplash.jpg',
      email: 'michael.ochieng@ges.ac.ug',
      linkedin: 'https://linkedin.com/in/michaelochieng'
    }
  ];

  const boardMembers = [
    {
      name: 'Hon. Dr. Mary Kitutu',
      position: 'Chairperson, Board of Directors',
      background: 'Former Minister of Education, 25+ years in educational policy',
      image: '/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg'
    },
    {
      name: 'Prof. James Tumusiime',
      position: 'Vice Chairperson',
      background: 'Distinguished Professor of Mathematics, Makerere University',
      image: '/images/topsphere-media-ojBd8yB5KDM-unsplash.jpg'
    },
    {
      name: 'Ms. Patricia Ssemwanga',
      position: 'Board Member',
      background: 'CEO of Leading Financial Institution, Education Advocate',
      image: '/images/happy pupil.jpg'
    }
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
              Our Leadership
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Meet the visionary leaders who drive excellence and innovation across all GES institutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Executive Team
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of educational expertise and vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-ges-navy">{leader.name}</h3>
                        <p className="text-ges-gold font-semibold">{leader.position}</p>
                      </div>
                      <div className="flex space-x-2">
                        <a 
                          href={`mailto:${leader.email}`}
                          className="w-10 h-10 bg-ges-cream hover:bg-ges-gold text-ges-navy rounded-lg flex items-center justify-center transition-colors"
                        >
                          <LuMail className="w-5 h-5" />
                        </a>
                        <a 
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-ges-cream hover:bg-ges-teal hover:text-white text-ges-navy rounded-lg flex items-center justify-center transition-colors"
                        >
                          <LuLinkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <p className="text-ges-slate mb-6 leading-relaxed">{leader.bio}</p>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <LuGraduationCap className="w-5 h-5 text-ges-teal mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-ges-navy">Education</p>
                          <p className="text-sm text-ges-slate">{leader.education}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <LuAward className="w-5 h-5 text-ges-gold mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-ges-navy">Key Achievements</p>
                          <ul className="text-sm text-ges-slate space-y-1">
                            {leader.achievements.map((achievement, idx) => (
                              <li key={idx}>• {achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Board of Directors
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Distinguished professionals who provide strategic guidance and governance oversight
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ges-navy mb-2">{member.name}</h3>
                  <p className="text-ges-gold font-semibold mb-3">{member.position}</p>
                  <p className="text-ges-slate text-sm leading-relaxed">{member.background}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-ges-navy mb-6">
                Our Leadership Philosophy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ges-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ges-navy font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ges-navy mb-2">Collaborative Leadership</h3>
                    <p className="text-ges-slate">We believe in shared leadership that empowers every member of our community to contribute to our collective success.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ges-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ges-navy mb-2">Continuous Innovation</h3>
                    <p className="text-ges-slate">Our leaders embrace change and continuously seek innovative solutions to enhance educational outcomes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-ges-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ges-navy mb-2">Student-Centered Approach</h3>
                    <p className="text-ges-slate">Every decision we make is guided by what is best for our students' growth and development.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/classexam.jpg" 
                alt="Leadership meeting" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-ges-gold rounded-2xl opacity-20"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-ges-teal rounded-full opacity-20"></div>
            </motion.div>
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
              Connect with Our Leadership
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Have questions or want to learn more about our educational approach? Our leadership team is here to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ges-gold text-ges-navy px-12 py-4 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 shadow-lg"
            >
              Contact Leadership
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;