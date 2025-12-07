import React from 'react';
import { motion } from 'framer-motion';
import { LuGlobe, LuAward, LuUsers, LuBookOpen, LuArrowRight, LuExternalLink } from 'react-icons/lu';

const Partnerships = () => {
  const partners = [
    {
      name: 'University of Cambridge',
      type: 'Academic Partnership',
      description: 'Collaboration on curriculum development and teacher training programs.',
      logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      benefits: ['Curriculum Development', 'Teacher Exchange', 'Student Programs'],
      established: '2018',
      website: 'https://cambridge.org'
    },
    {
      name: 'UNESCO',
      type: 'Educational Development',
      description: 'Supporting educational development initiatives and quality assurance programs.',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      benefits: ['Quality Assurance', 'Professional Development', 'Research Collaboration'],
      established: '2020',
      website: 'https://unesco.org'
    },
    {
      name: 'British Council',
      type: 'Cultural Exchange',
      description: 'English language programs and cultural exchange initiatives.',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      benefits: ['Language Programs', 'Cultural Exchange', 'Professional Development'],
      established: '2019',
      website: 'https://britishcouncil.org'
    },
    {
      name: 'Microsoft Education',
      type: 'Technology Partnership',
      description: 'Digital transformation and technology integration in education.',
      logo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      benefits: ['Digital Tools', 'Teacher Training', 'Student Certification'],
      established: '2021',
      website: 'https://microsoft.com/education'
    },
    {
      name: 'World Bank Education',
      type: 'Development Partnership',
      description: 'Supporting educational infrastructure and capacity building initiatives.',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      benefits: ['Infrastructure Development', 'Capacity Building', 'Research Support'],
      established: '2017',
      website: 'https://worldbank.org/education'
    },
    {
      name: 'Aga Khan Foundation',
      type: 'Educational Excellence',
      description: 'Promoting educational excellence and community development programs.',
      logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      benefits: ['Community Development', 'Scholarship Programs', 'Leadership Training'],
      established: '2016',
      website: 'https://akdn.org'
    }
  ];

  const partnershipTypes = [
    {
      icon: LuGlobe,
      title: 'International Collaborations',
      description: 'Partnerships with global educational institutions and organizations.',
      count: '15+',
      color: 'text-ges-blue'
    },
    {
      icon: LuAward,
      title: 'Accreditation Bodies',
      description: 'Recognized by leading educational accreditation organizations.',
      count: '8+',
      color: 'text-ges-gold'
    },
    {
      icon: LuUsers,
      title: 'Exchange Programs',
      description: 'Student and teacher exchange programs with partner institutions.',
      count: '25+',
      color: 'text-ges-teal'
    },
    {
      icon: LuBookOpen,
      title: 'Curriculum Partners',
      description: 'Collaborative curriculum development with educational experts.',
      count: '12+',
      color: 'text-ges-purple'
    }
  ];

  const benefits = [
    {
      title: 'Enhanced Curriculum',
      description: 'Access to world-class curriculum and educational resources from our global partners.',
      icon: '📚'
    },
    {
      title: 'Teacher Development',
      description: 'Professional development opportunities for our educators through international programs.',
      icon: '👩‍🏫'
    },
    {
      title: 'Student Exchange',
      description: 'Opportunities for students to participate in exchange programs and global experiences.',
      icon: '✈️'
    },
    {
      title: 'Research Collaboration',
      description: 'Joint research initiatives that contribute to educational innovation and best practices.',
      icon: '🔬'
    },
    {
      title: 'Technology Integration',
      description: 'Access to cutting-edge educational technology and digital learning platforms.',
      icon: '💻'
    },
    {
      title: 'Quality Assurance',
      description: 'International quality standards and accreditation through our partnership network.',
      icon: '⭐'
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
              Global Partnerships
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Building bridges to educational excellence through strategic partnerships with world-renowned institutions and organizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Partnership Categories
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Our diverse partnership portfolio spans across multiple educational sectors and regions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${type.color} bg-opacity-10`}>
                  <type.icon className={`w-8 h-8 ${type.color}`} />
                </div>
                <div className="text-3xl font-bold text-ges-navy mb-2">{type.count}</div>
                <h3 className="text-xl font-bold text-ges-navy mb-4">{type.title}</h3>
                <p className="text-ges-slate leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-20 bg-ges-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              Collaborating with leading organizations to enhance educational quality and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
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
                    src={partner.logo} 
                    alt={partner.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-ges-gold text-ges-navy px-3 py-1 rounded-full text-sm font-medium">
                      Since {partner.established}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-ges-navy">{partner.name}</h3>
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ges-teal hover:text-ges-navy transition-colors"
                    >
                      <LuExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <span className="inline-block bg-ges-teal/10 text-ges-teal px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {partner.type}
                  </span>
                  <p className="text-ges-slate mb-6 leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-ges-navy">Key Benefits:</h4>
                    <div className="space-y-2">
                      {partner.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-ges-slate">
                          <div className="w-2 h-2 bg-ges-gold rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-ges-navy mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-ges-slate max-w-3xl mx-auto">
              How our partnerships directly benefit our students, faculty, and the broader educational community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-ges-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-ges-navy mb-4">{benefit.title}</h3>
                <p className="text-ges-slate leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
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
              Partner With Us
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Join our network of partners and contribute to educational excellence across East Africa and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ges-gold text-ges-navy px-12 py-4 rounded-full font-bold text-xl hover:bg-white transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                Become a Partner <LuArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-ges-navy transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;