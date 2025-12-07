import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LuUsers, 
  LuBookOpen, 
  LuTarget, 
  LuCalendar, 
  LuMessageCircle, 
  LuVideo, 
  LuAward, 
  LuTrendingUp, 
  LuClock, 
  LuStar, 
  LuArrowRight, 
  LuFilter, 
  LuSearch 
} from 'react-icons/lu';

const MentorshipPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Mukasa',
      title: 'Executive Director',
      expertise: ['Leadership', 'Educational Management', 'Strategic Planning'],
      experience: '20+ years',
      rating: 4.9,
      sessions: 156,
      image: '/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg',
      bio: 'Dr. Mukasa brings over two decades of educational leadership experience, helping students develop strategic thinking and leadership skills.',
      availability: 'Weekdays 2-5 PM',
      specialties: ['Career Planning', 'Leadership Development', 'Academic Excellence']
    },
    {
      id: 2,
      name: 'Prof. John Kiprotich',
      title: 'Academic Director',
      expertise: ['STEM Education', 'Research Methods', 'Curriculum Development'],
      experience: '15+ years',
      rating: 4.8,
      sessions: 132,
      image: '/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg',
      bio: 'Prof. Kiprotich specializes in STEM education and research, guiding students through academic and research challenges.',
      availability: 'Monday & Wednesday 3-6 PM',
      specialties: ['Research Guidance', 'STEM Careers', 'Academic Writing']
    },
    {
      id: 3,
      name: 'Ms. Grace Nakato',
      title: 'Student Affairs Director',
      expertise: ['Student Development', 'Career Counseling', 'Personal Growth'],
      experience: '12+ years',
      rating: 4.9,
      sessions: 198,
      image: '/images/bright-kwabena-kyere-rxB0L6nrP5M-unsplash.jpg',
      bio: 'Ms. Nakato focuses on holistic student development, helping students navigate personal and academic challenges.',
      availability: 'Tuesday & Thursday 1-4 PM',
      specialties: ['Personal Development', 'Career Guidance', 'Study Skills']
    },
    {
      id: 4,
      name: 'Mr. Michael Ochieng',
      title: 'Business Director',
      expertise: ['Entrepreneurship', 'Business Development', 'Innovation'],
      experience: '18+ years',
      rating: 4.7,
      sessions: 89,
      image: '/images/annie-spratt-V-XM4kkWpng-unsplash.jpg',
      bio: 'Mr. Ochieng mentors aspiring entrepreneurs and business-minded students in developing innovative solutions.',
      availability: 'Friday 10 AM - 1 PM',
      specialties: ['Entrepreneurship', 'Business Planning', 'Innovation']
    }
  ];

  const programs = [
    {
      title: 'Academic Excellence Program',
      description: 'One-on-one mentoring for academic improvement and study strategies',
      duration: '6 months',
      sessions: '12 sessions',
      participants: 45,
      icon: LuBookOpen,
      color: 'bg-ges-blue'
    },
    {
      title: 'Leadership Development',
      description: 'Develop leadership skills and prepare for future leadership roles',
      duration: '8 months',
      sessions: '16 sessions',
      participants: 32,
      icon: LuTarget,
      color: 'bg-ges-gold'
    },
    {
      title: 'Career Guidance Program',
      description: 'Explore career paths and develop professional skills',
      duration: '4 months',
      sessions: '8 sessions',
      participants: 67,
      icon: LuTrendingUp,
      color: 'bg-ges-teal'
    },
    {
      title: 'Entrepreneurship Track',
      description: 'Learn to develop and launch innovative business ideas',
      duration: '10 months',
      sessions: '20 sessions',
      participants: 28,
      icon: LuAward,
      color: 'bg-ges-purple'
    }
  ];

  const upcomingSessions = [
    {
      mentor: 'Dr. Sarah Mukasa',
      topic: 'Strategic Planning for Academic Success',
      date: '2024-01-25',
      time: '2:00 PM',
      type: 'Group Session',
      spots: 5
    },
    {
      mentor: 'Prof. John Kiprotich',
      topic: 'Research Methodology Workshop',
      date: '2024-01-26',
      time: '3:30 PM',
      type: 'Workshop',
      spots: 12
    },
    {
      mentor: 'Ms. Grace Nakato',
      topic: 'Personal Development Planning',
      date: '2024-01-27',
      time: '1:00 PM',
      type: '1-on-1',
      spots: 1
    }
  ];

  const stats = [
    { label: 'Active Mentors', value: '25+', icon: LuUsers, color: 'text-ges-blue' },
    { label: 'Students Mentored', value: '500+', icon: LuTarget, color: 'text-ges-gold' },
    { label: 'Sessions Completed', value: '1,200+', icon: LuCalendar, color: 'text-ges-teal' },
    { label: 'Success Rate', value: '94%', icon: LuAward, color: 'text-ges-purple' }
  ];

  return (
    <div className="min-h-screen bg-ges-cream">
      {/* Hero Section */}
      <section className="bg-ges-gradient text-white py-20 relative overflow-hidden">
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
              Mentorship Portal
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Connect with experienced mentors who will guide you on your journey to academic and personal excellence
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ges-gold text-ges-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg"
            >
              Find Your Mentor
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'overview', label: 'Overview', icon: LuTarget },
            { key: 'mentors', label: 'Find Mentors', icon: LuUsers },
            { key: 'programs', label: 'Programs', icon: LuBookOpen },
            { key: 'sessions', label: 'My Sessions', icon: LuCalendar }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-ges-gold text-ges-navy shadow-lg scale-105'
                  : 'bg-white text-ges-slate hover:bg-gray-50 hover:scale-105'
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              {/* Programs Overview */}
              <div>
                <h2 className="text-3xl font-bold text-ges-navy mb-8 text-center">Mentorship Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {programs.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
                    >
                      <div className={`w-12 h-12 ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-ges-navy mb-2">{program.title}</h3>
                      <p className="text-ges-slate text-sm mb-4">{program.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-ges-slate">Duration:</span>
                          <span className="font-medium text-ges-navy">{program.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ges-slate">Sessions:</span>
                          <span className="font-medium text-ges-navy">{program.sessions}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ges-slate">Participants:</span>
                          <span className="font-medium text-ges-teal">{program.participants}</span>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-ges-cream text-ges-navy py-2 rounded-lg font-medium hover:bg-ges-gold transition-colors">
                        Learn More
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div>
                <h2 className="text-3xl font-bold text-ges-navy mb-8 text-center">Upcoming Sessions</h2>
                <div className="space-y-4">
                  {upcomingSessions.map((session, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-ges-gold rounded-full flex items-center justify-center">
                          <LuCalendar className="w-6 h-6 text-ges-navy" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-ges-navy">{session.topic}</h3>
                          <p className="text-ges-slate">with {session.mentor}</p>
                          <div className="flex items-center space-x-4 text-sm text-ges-slate mt-1">
                            <span>{new Date(session.date).toLocaleDateString()}</span>
                            <span>{session.time}</span>
                            <span className="bg-ges-teal/10 text-ges-teal px-2 py-1 rounded">{session.type}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-ges-slate mb-2">{session.spots} spots available</div>
                        <button className="bg-ges-teal text-white px-4 py-2 rounded-lg font-medium hover:bg-ges-navy transition-colors">
                          Register
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'mentors' && (
            <motion.div
              key="mentors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ges-navy mb-4 text-center">Find Your Perfect Mentor</h2>
                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                    <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Search mentors by name or expertise..." 
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ges-gold"
                    />
                  </div>
                  <button className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <LuFilter className="w-5 h-5 mr-2 text-ges-slate" />
                    Filter
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {mentors.map((mentor, index) => (
                  <motion.div
                    key={mentor.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
                  >
                    <div className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <img src={mentor.image} alt={mentor.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-ges-navy">{mentor.name}</h3>
                          <p className="text-ges-gold font-semibold">{mentor.title}</p>
                          <div className="flex items-center mt-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <LuStar 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(mentor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-ges-slate ml-2">
                              {mentor.rating} ({mentor.sessions} sessions)
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-ges-slate mb-4 leading-relaxed">{mentor.bio}</p>
                      <div className="space-y-3 mb-6">
                        <div>
                          <h4 className="font-semibold text-ges-navy mb-2">Specialties:</h4>
                          <div className="flex flex-wrap gap-2">
                            {mentor.specialties.map((specialty, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1 bg-ges-cream text-ges-navy rounded-full text-sm font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-ges-slate">
                          <LuClock className="w-4 h-4 mr-2" />
                          {mentor.availability}
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-ges-gold text-ges-navy py-2 rounded-lg font-medium hover:bg-ges-teal hover:text-white transition-all duration-300">
                          Book Session
                        </button>
                        <button 
                          onClick={() => setSelectedMentor(mentor)}
                          className="px-4 py-2 border border-ges-slate text-ges-slate rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'programs' && (
            <motion.div
              key="programs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-3xl font-bold text-ges-navy mb-8 text-center">Mentorship Programs</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-ges-navy mb-2">{program.title}</h3>
                        <p className="text-ges-slate leading-relaxed">{program.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-ges-cream rounded-lg">
                        <div className="text-2xl font-bold text-ges-navy">{program.duration}</div>
                        <div className="text-sm text-ges-slate">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-ges-cream rounded-lg">
                        <div className="text-2xl font-bold text-ges-navy">{program.sessions}</div>
                        <div className="text-sm text-ges-slate">Sessions</div>
                      </div>
                      <div className="text-center p-3 bg-ges-cream rounded-lg">
                        <div className="text-2xl font-bold text-ges-teal">{program.participants}</div>
                        <div className="text-sm text-ges-slate">Active</div>
                      </div>
                    </div>
                    <button className="w-full bg-ges-gold text-ges-navy py-3 rounded-lg font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 flex items-center justify-center group">
                      Apply to Program <LuArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'sessions' && (
            <motion.div
              key="sessions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-3xl font-bold text-ges-navy mb-8 text-center">My Mentorship Sessions</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 bg-ges-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <LuMessageCircle className="w-12 h-12 text-ges-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-ges-navy mb-4">
                  Start Your Mentorship Journey
                </h3>
                <p className="text-ges-slate mb-8 max-w-2xl mx-auto">
                  You haven't booked any mentorship sessions yet. Connect with our experienced mentors to accelerate your personal and academic growth.
                </p>
                <button 
                  onClick={() => setActiveTab('mentors')}
                  className="bg-ges-gold text-ges-navy px-8 py-4 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Find a Mentor
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mentor Profile Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMentor(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <img src={selectedMentor.image} alt={selectedMentor.name} className="w-20 h-20 rounded-full object-cover" />
                  <div>
                    <h3 className="text-2xl font-bold text-ges-navy">{selectedMentor.name}</h3>
                    <p className="text-ges-gold font-semibold">{selectedMentor.title}</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <LuStar 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(selectedMentor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-ges-slate ml-2">
                        {selectedMentor.rating} ({selectedMentor.sessions} sessions)
                      </span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedMentor(null)}
                  className="text-ges-slate hover:text-ges-navy"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-ges-navy mb-2">About</h4>
                  <p className="text-ges-slate leading-relaxed">{selectedMentor.bio}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ges-navy mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.expertise.map((area, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-ges-teal/10 text-ges-teal rounded-full text-sm font-medium"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-ges-navy mb-2">Availability</h4>
                  <div className="flex items-center text-ges-slate">
                    <LuClock className="w-4 h-4 mr-2" />
                    {selectedMentor.availability}
                  </div>
                </div>

                <div className="flex space-x-4 pt-6 border-t border-gray-200">
                  <button className="flex-1 bg-ges-gold text-ges-navy py-3 rounded-lg font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 flex items-center justify-center">
                    <LuVideo className="w-5 h-5 mr-2" /> Book Video Call
                  </button>
                  <button className="flex-1 border border-ges-gold text-ges-gold py-3 rounded-lg font-semibold hover:bg-ges-gold hover:text-ges-navy transition-all duration-300 flex items-center justify-center">
                    <LuMessageCircle className="w-5 h-5 mr-2" /> Send Message
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MentorshipPortal;