import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCalendar, LuUsers, LuAward, LuBookOpen, LuHeart, LuMessageCircle, LuShare2, LuFilter, LuSearch, LuSparkles } from 'react-icons/lu';
import { useCMS } from '../cms/CMSProvider';
import { galleryImages } from './gesLifeGalleryImages';

const GESLifeFeed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [shuffledTiles, setShuffledTiles] = useState([]);
  
  const { content } = useCMS();

  // Initialize shuffled tiles for background with card flip animation
  useEffect(() => {
    const tiles = [];
    const rows = 6;
    const cols = 8;
    
    for (let i = 0; i < rows * cols; i++) {
      tiles.push({
        id: i,
        image: galleryImages[i % galleryImages.length].src,
        nextImage: galleryImages[(i + 1) % galleryImages.length].src,
        isFlipping: false,
      });
    }
    
    setShuffledTiles(tiles);
    
    // Randomly flip individual tiles at different intervals
    const flipTile = () => {
      const randomIndex = Math.floor(Math.random() * tiles.length);
      
      setShuffledTiles(prev => {
        const newTiles = [...prev];
        if (!newTiles[randomIndex].isFlipping) {
          // Start flip
          newTiles[randomIndex] = { ...newTiles[randomIndex], isFlipping: true };
          
          // After flip completes (0.6s), update image and reset flip state
          setTimeout(() => {
            setShuffledTiles(current => {
              const updated = [...current];
              const randomNewImage = galleryImages[Math.floor(Math.random() * galleryImages.length)].src;
              updated[randomIndex] = {
                ...updated[randomIndex],
                image: updated[randomIndex].nextImage,
                nextImage: randomNewImage,
                isFlipping: false,
              };
              return updated;
            });
          }, 300); // Change image at middle of flip
        }
        return newTiles;
      });
    };
    
    // Trigger random flips at intervals
    const intervals = [];
    for (let i = 0; i < tiles.length; i++) {
      const randomDelay = Math.random() * 2000 + 1000; // 1-3 seconds
      const interval = setInterval(() => {
        flipTile();
      }, randomDelay + Math.random() * 3000); // Each tile flips every 4-6 seconds
      intervals.push(interval);
    }
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

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
      {/* Enhanced Hero Section with Shuffling Tiles Background - Merged with Navbar */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-ges-navy via-ges-blue to-ges-teal">
        {/* Animated Tile Grid Background with Card Flip */}
        <div className="absolute inset-0 opacity-20" style={{ perspective: '1000px' }}>
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {shuffledTiles.map((tile) => (
              <motion.div
                key={tile.id}
                className="relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateY: tile.isFlipping ? 180 : 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                <div className="w-full h-full relative" style={{ backfaceVisibility: 'hidden' }}>
                  <img
                    src={tile.image}
                    alt=""
                    className="w-full h-full object-cover blur-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ges-navy/80 via-ges-navy/70 to-ges-navy/90"></div>
        
        {/* Animated Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${
                i % 3 === 0 ? 'bg-ges-gold/20' : i % 3 === 1 ? 'bg-ges-teal/20' : 'bg-white/10'
              }`}
              style={{
                width: `${Math.random() * 150 + 100}px`,
                height: `${Math.random() * 150 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center min-h-screen pt-24 sm:pt-28 md:pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
            <div className="text-center">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <LuSparkles className="w-5 h-5 text-ges-gold" />
                </motion.div>
                <span className="text-white font-medium">Live Updates from GES Community</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-ges-gold to-white">
                  GES Life
                </span>
                <motion.span 
                  className="block text-4xl sm:text-5xl md:text-6xl mt-4 text-ges-gold"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Celebrating Excellence
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Real-time achievements, events, and milestones from across all GES institutions
              </motion.p>

              {/* Enhanced Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative max-w-2xl mx-auto"
              >
                <div className="relative group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-ges-gold via-ges-teal to-ges-gold rounded-full opacity-50 blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <div className="relative flex items-center bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full overflow-hidden shadow-2xl">
                    <LuSearch className="absolute left-6 text-gray-300 w-6 h-6 z-10" />
                    <input
                      type="text"
                      placeholder="Search posts, institutions, achievements..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-16 pr-6 py-5 bg-transparent text-white placeholder-gray-300 focus:outline-none text-lg"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-2 px-8 py-3 bg-gradient-to-r from-ges-gold to-ges-teal text-white font-semibold rounded-full shadow-lg"
                    >
                      Search
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Enhanced Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center mb-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-ges-navy mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Latest from Our Community
            </motion.h2>
            <motion.p 
              className="text-ges-slate text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Filter by category to find what matters to you
            </motion.p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'All Posts', icon: LuFilter },
              { key: 'achievement', label: 'Achievements', icon: LuAward },
              { key: 'event', label: 'Events', icon: LuCalendar },
              { key: 'announcement', label: 'Announcements', icon: LuBookOpen }
            ].map((filter, index) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-ges-gold to-ges-teal text-white shadow-xl'
                    : 'bg-white text-ges-slate hover:bg-gray-50 hover:shadow-xl'
                }`}
              >
                {activeFilter === filter.key && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-ges-gold to-ges-teal rounded-2xl"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <filter.icon className="w-5 h-5 mr-2" />
                {filter.label}
                {activeFilter === filter.key && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs"
                  >
                    {filteredItems.length}
                  </motion.span>
                )}
              </motion.button>
            ))}
          </div>
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