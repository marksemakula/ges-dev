import React from 'react';
import { motion } from 'framer-motion';
import { LuAward, LuTrophy, LuGraduationCap, LuUsers, LuCalendar, LuMapPin } from 'react-icons/lu';
import GJSHeader from '../../components/layout/GJSHeader';
import GJSFooter from '../../components/layout/GJSFooter';

const GJSAbout = () => {
  const brandColors = {
    primary: '#FFD700',
    secondary: '#800E13',
  };

  const milestones = [
    {
      year: '2013',
      title: 'School Founded',
      description: 'Gombe Junior School established as a day & boarding pioneer school under GES',
      icon: LuCalendar,
    },
    {
      year: '2017',
      title: 'First Academic Excellence',
      description: '100% first grades achieved, ranked #4 in Uganda and best in Wakiso District',
      icon: LuTrophy,
    },
    {
      year: '2019',
      title: 'Campus Separation',
      description: 'GJS Kikajjo Day Campus opened to provide customized day scholar services',
      icon: LuMapPin,
    },
    {
      year: '2022',
      title: 'Continued Excellence',
      description: '100% first grades again, ranked #5 in Uganda and best in Wakiso District',
      icon: LuAward,
    },
  ];

  const campusInfo = [
    {
      name: 'Gombe Junior School',
      subtitle: 'Boarding School',
      description: 'Our pioneer school established in 2013 provides comprehensive day & boarding education. With a proven track record of 100% first grades in 2017 & 2022, ranking #4 & #5 in Uganda and best in Wakiso District, this boarding school continues to deliver excellence in holistic education.',
      features: ['Day & Boarding', 'Est. 2013', '100% First Grades', 'Ranked #4 & #5 Uganda'],
      icon: LuGraduationCap,
    },
    {
      name: 'Gombe Junior School Kikajjo',
      subtitle: 'Day School',
      description: 'Established in 2019, GJS-K emerged from the separation of day scholars and boarders to provide customized services for day parents. This entirely day school has brought transformational change to the Kikajjo community, continuing our tradition of academic excellence with specialized attention to day students.',
      features: ['Opened 2019', 'Day Only', 'Community Impact', 'Modern Facilities'],
      icon: LuUsers,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <GJSHeader />

      {/* Hero Section */}
      <section
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: brandColors.secondary }}>
              About Gombe Junior School
            </h1>
            <p className="text-xl mb-4" style={{ color: brandColors.secondary }}>
              Ssosolye bwatafa
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#5c3a2a' }}>
              A legacy of academic excellence and community transformation since 2013
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" style={{ color: brandColors.secondary }}>
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Gombe Junior School is one of our pioneer schools that started in 2013 as day & boarding. 
                It academically excelled with <strong>100% first grades in 2017 & 2022</strong>, emerging 
                best in Wakiso District and ranked <strong>number 4 & 5 in Uganda</strong> respectively.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Due to its growth, the day parents sought customized services which saw the creation of an 
                independent day section.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Gombe Junior School Kikajjo (GJS-K)</strong> was opened in 2019 after the separation 
                of day scholars from boarders to create for them their own school which is entirely day. The 
                school has brought about transformation in the community around its location.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: brandColors.secondary }}>
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our history of excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4" style={{ backgroundColor: `${brandColors.primary}20` }}>
                  <milestone.icon className="w-8 h-8" style={{ color: brandColors.secondary }} />
                </div>
                <div className="text-3xl font-bold mb-2" style={{ color: brandColors.primary }}>
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: brandColors.secondary }}>
                  {milestone.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Campuses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: brandColors.secondary }}>
              Our Campuses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two campuses, one commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {campusInfo.map((campus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: `${brandColors.primary}20` }}>
                  <campus.icon className="w-8 h-8" style={{ color: brandColors.secondary }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: brandColors.secondary }}>
                  {campus.name}
                </h3>
                <p className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>
                  {campus.subtitle}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {campus.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {campus.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: brandColors.primary }}></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Management Section */}
      <section className="py-20" style={{ backgroundColor: brandColors.secondary }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              School Management
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Gombe Junior School operates under the umbrella of the Gombe Educational System (GES), 
              benefiting from over a decade of educational excellence and proven leadership in 
              transforming lives through quality education.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">Part of GES Network</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">Established Leadership</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-semibold">Community Focused</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <GJSFooter />
    </div>
  );
};

export default GJSAbout;
