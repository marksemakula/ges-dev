import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCalendar, LuUsers, LuAward, LuBookOpen, LuHeart, LuMessageCircle, LuShare2, LuFilter, LuSearch } from 'react-icons/lu';
import { useCMS } from '../cms/CMSProvider';

const GESLifeFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  
  const { content } = useCMS();

  // Mock feed data
  const mockFeedItems = [
    {
      id: '1',
      title: 'Science Fair Winners Announced',
      excerpt: 'Congratulations to our brilliant students who excelled in the annual science fair with innovative projects in renewable energy and biotechnology.',
      type: 'achievement',
      institution: 'Gombe High School',
      date: '2024-01-20',
      image: '/images/happy pupil.jpg',
      likes: 124,
      comments: 18,
      author: 'Dr. Sarah Mukasa',
      authorRole: 'Science Department Head'
    },
    {
      id: '2',
      title: 'New Library Wing Opens',
      excerpt: 'The state-of-the-art digital library wing is now open, featuring modern study spaces, digital resources, and collaborative learning areas.',
      type: 'announcement',
      institution: 'GES Consortium',
      date: '2024-01-18',
      image: '/images/schoolgroup.jpg',
      likes: 89,
      comments: 12,
      author: 'John Kiprotich',
      authorRole: 'Head Librarian'
    },
    {
      id: '3',
      title: 'Inter-School Sports Championship',
      excerpt: 'Our athletics team brings home gold medals from the regional championship, showcasing exceptional talent in track and field events.',
      type: 'event',
      institution: 'Scooby Doo International',
      date: '2024-01-15',
      image: '/images/heather-suggitt-AjB5qK2rnbU-unsplash.jpg',
      likes: 156,
      comments: 24,
      author: 'Coach Michael Ochieng',
      authorRole: 'Sports Director'
    },
    {
      id: '4',
      title: 'Student Art Exhibition Success',
      excerpt: 'Our talented artists showcase their creativity in a stunning exhibition featuring paintings, sculptures, and digital art pieces.',
      type: 'achievement',
      institution: 'Gombe Junior School',
      date: '2024-01-12',
      image: '/images/megan-escobosa-photography-_FMi4LTEe6g-unsplash.jpg',
      likes: 78,
      comments: 15,
      author: 'Ms. Grace Nakato',
      authorRole: 'Art Teacher'
    },
    {
      id: '5',
      title: 'Entrepreneurship Workshop',
      excerpt: 'Students participate in hands-on entrepreneurship workshop with successful business leaders sharing insights on startup development.',
      type: 'event',
      institution: 'Jimmy Sekasi Business Institute',
      date: '2024-01-10',
      image: '/images/annie-spratt-V-XM4kkWpng-unsplash.jpg',
      likes: 92,
      comments: 8,
      author: 'Prof. James Sekasi',
      authorRole: 'Director'
    },
    {
      id: '6',
      title: 'Environmental Conservation Project',
      excerpt: 'Students launch tree planting initiative, contributing to environmental sustainability with over 500 trees planted across campus.',
      type: 'announcement',
      institution: 'GES Consortium',
      date: '2024-01-08',
      image: '/images/raissa-lara-lutolf-fasel-ivKWcUFJQtE-unsplash.jpg',
      likes: 143,
      comments: 21,
      author: 'Environmental Club',
      authorRole: 'Student Organization'
    }
  ];

  useEffect(() => {
    // Combine CMS content with mock data
    const cmsItems = Object.values(content)
      .filter(item => item.status === 'published')
      .map(item => ({
        id: item.id,
        title: item.title,
        excerpt: item.content.substring(0, 150) + '...',
        type: item.type === 'blog' ? 'announcement' : 'achievement',
        institution: 'GES Consortium',
        date: item.publishedAt,
        likes: Math.floor(Math.random() * 100) + 20,
        comments: Math.floor(Math.random() * 20) + 5,
        author: item.author || 'GES Admin',
        authorRole: 'Administrator'
      }));
    
    setFeedItems([...mockFeedItems, ...cmsItems]);
  }, [content]);

  const getIcon = (type) => {
    switch (type) {
      case 'event': return <LuCalendar className="w-5 h-5" />;
      case 'achievement': return <LuAward className="w-5 h-5" />;
      default: return <LuBookOpen className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'event': return 'bg-ges-blue text-white';
      case 'achievement': return 'bg-ges-gold text-ges-navy';
      case 'announcement': return 'bg-ges-teal text-white';
      default: return 'bg-ges-slate text-white';
    }
  };

  const handleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const filteredItems = feedItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.institution.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-ges-cream">
      {/* Header */}
      <section className="bg-ges-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-shape absolute top-20 left-10 w-32 h-32 bg-ges-gold/20 rounded-full"></div>
          <div className="floating-shape absolute bottom-20 right-20 w-48 h-48 bg-ges-teal/20 rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              GES Life Feed
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Real-time achievements and activities from across all GES institutions
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-ges-gold focus:ring-2 focus:ring-ges-gold/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'all', label: 'All Posts', icon: LuFilter },
            { key: 'achievement', label: 'Achievements', icon: LuAward },
            { key: 'event', label: 'Events', icon: LuCalendar },
            { key: 'announcement', label: 'Announcements', icon: LuBookOpen }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-ges-gold text-ges-navy shadow-lg scale-105'
                  : 'bg-white text-ges-slate hover:bg-gray-50 hover:scale-105'
              }`}
            >
              <filter.icon className="w-4 h-4 mr-2" />
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                {/* Image */}
                {item.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        {getIcon(item.type)}
                        <span className="ml-2 capitalize">{item.type}</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Institution */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-ges-gold/10 rounded-full flex items-center justify-center">
                      <LuUsers className="w-4 h-4 text-ges-gold" />
                    </div>
                    <span className="text-sm font-medium text-ges-slate">
                      {item.institution}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-ges-navy mb-3 group-hover:text-ges-teal transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-ges-slate mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-4 p-3 bg-ges-cream rounded-lg">
                    <div className="w-10 h-10 bg-ges-gold rounded-full flex items-center justify-center">
                      <span className="text-ges-navy font-semibold text-sm">
                        {item.author?.charAt(0) || 'G'}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-ges-navy text-sm">{item.author}</div>
                      <div className="text-ges-slate text-xs">{item.authorRole}</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <button 
                        onClick={() => handleLike(item.id)}
                        className={`flex items-center space-x-1 transition-colors ${
                          likedPosts.has(item.id) ? 'text-red-500' : 'text-ges-slate hover:text-red-500'
                        }`}
                      >
                        <LuHeart className={`w-5 h-5 ${likedPosts.has(item.id) ? 'fill-current' : ''}`} />
                        <span className="text-sm font-medium">
                          {item.likes + (likedPosts.has(item.id) ? 1 : 0)}
                        </span>
                      </button>
                      <button className="flex items-center space-x-1 text-ges-slate hover:text-ges-teal transition-colors">
                        <LuMessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.comments}</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-ges-slate hover:text-ges-teal hover:bg-ges-cream rounded-lg transition-all">
                        <LuShare2 className="w-4 h-4" />
                      </button>
                      <span className="text-sm text-ges-slate">
                        {new Date(item.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-ges-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <LuUsers className="w-12 h-12 text-ges-teal opacity-50" />
            </div>
            <h3 className="text-2xl font-semibold text-ges-slate mb-2">
              No posts found
            </h3>
            <p className="text-ges-slate">
              {searchTerm ? 'Try adjusting your search terms' : 'Updates from GES institutions will appear here'}
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button className="bg-ges-gold text-ges-navy px-8 py-4 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Load More Posts
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default GESLifeFeed;