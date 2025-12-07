import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCalendar, LuUser, LuTag, LuSearch, LuFilter, LuArrowRight } from 'react-icons/lu';
import { useCMS } from '../cms/CMSProvider';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const { getPublishedContent, getContentByType } = useCMS();

  // Mock blog posts
  const mockPosts = [
    {
      id: 'post-1',
      title: 'The Future of Education: Embracing Digital Learning',
      excerpt: 'Exploring how digital transformation is reshaping the educational landscape and preparing students for tomorrow\'s challenges.',
      content: 'Full content here...',
      author: 'Dr. Sarah Mukasa',
      publishedAt: '2024-01-20T00:00:00Z',
      category: 'Innovation',
      tags: ['digital learning', 'technology', 'future'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    },
    {
      id: 'post-2',
      title: 'Building Character Through Education',
      excerpt: 'How GES integrates character development into our curriculum to nurture well-rounded individuals.',
      content: 'Full content here...',
      author: 'Prof. John Kiprotich',
      publishedAt: '2024-01-18T00:00:00Z',
      category: 'Character Development',
      tags: ['character', 'values', 'education'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '4 min read'
    },
    {
      id: 'post-3',
      title: 'STEM Education Excellence at GES',
      excerpt: 'Discover how our STEM programs are preparing students for careers in science, technology, engineering, and mathematics.',
      content: 'Full content here...',
      author: 'Ms. Grace Nakato',
      publishedAt: '2024-01-15T00:00:00Z',
      category: 'STEM',
      tags: ['STEM', 'science', 'technology'],
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '6 min read'
    },
    {
      id: 'post-4',
      title: 'International Partnerships and Global Opportunities',
      excerpt: 'Learn about our international collaborations and how they benefit our students through exchange programs and global exposure.',
      content: 'Full content here...',
      author: 'Mr. Michael Ochieng',
      publishedAt: '2024-01-12T00:00:00Z',
      category: 'Global Education',
      tags: ['partnerships', 'international', 'opportunities'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '7 min read'
    },
    {
      id: 'post-5',
      title: 'Supporting Student Mental Health and Wellbeing',
      excerpt: 'Our comprehensive approach to supporting student mental health and creating a positive learning environment.',
      content: 'Full content here...',
      author: 'Dr. Patricia Ssemwanga',
      publishedAt: '2024-01-10T00:00:00Z',
      category: 'Student Welfare',
      tags: ['mental health', 'wellbeing', 'support'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      readTime: '5 min read'
    }
  ];

  useEffect(() => {
    // Combine CMS content with mock posts
    const cmsContent = getPublishedContent().filter(item => item.type === 'blog');
    const cmsPosts = cmsContent.map(item => ({
      ...item,
      excerpt: item.content.substring(0, 150) + '...',
      category: 'GES News',
      tags: item.metadata?.keywords || [],
      readTime: Math.ceil(item.content.split(' ').length / 200) + ' min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }));
    
    const allPosts = [...mockPosts, ...cmsPosts];
    setPosts(allPosts);
    setFilteredPosts(allPosts);
  }, [getPublishedContent]);

  useEffect(() => {
    let filtered = posts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchTerm]);

  const categories = ['all', ...new Set(posts.map(post => post.category))];

  const getCategoryColor = (category) => {
    const colors = {
      'Innovation': 'bg-ges-blue text-white',
      'Character Development': 'bg-ges-gold text-ges-navy',
      'STEM': 'bg-ges-teal text-white',
      'Global Education': 'bg-ges-purple text-white',
      'Student Welfare': 'bg-ges-green text-white',
      'GES News': 'bg-ges-burgundy text-white'
    };
    return colors[category] || 'bg-ges-slate text-white';
  };

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
              GES Blog
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Insights, stories, and updates from the world of education at GES
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <LuSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:border-ges-gold focus:ring-2 focus:ring-ges-gold/20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-ges-gold text-ges-navy shadow-lg scale-105'
                  : 'bg-white text-ges-slate hover:bg-gray-50 hover:scale-105'
              }`}
            >
              <LuFilter className="w-4 h-4 mr-2" />
              {category === 'all' ? 'All Articles' : category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title} 
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${getCategoryColor(filteredPosts[0].category)}`}>
                      Featured
                    </span>
                    <span className="text-ges-slate text-sm">{filteredPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-ges-navy mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-lg text-ges-slate mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-ges-gold rounded-full flex items-center justify-center">
                        <LuUser className="w-5 h-5 text-ges-navy" />
                      </div>
                      <div>
                        <div className="font-medium text-ges-navy">{filteredPosts[0].author}</div>
                        <div className="text-sm text-ges-slate flex items-center">
                          <LuCalendar className="w-4 h-4 mr-1" />
                          {new Date(filteredPosts[0].publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <button className="bg-ges-gold text-ges-navy px-6 py-3 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 flex items-center group">
                      Read More <LuArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ges-card-hover"
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-ges-navy font-medium">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ges-navy mb-3 group-hover:text-ges-teal transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-ges-slate mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center px-2 py-1 bg-ges-cream text-ges-navy rounded-full text-xs font-medium"
                      >
                        <LuTag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-ges-gold rounded-full flex items-center justify-center">
                        <span className="text-ges-navy font-semibold text-xs">
                          {post.author?.charAt(0) || 'A'}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-ges-navy text-sm">{post.author}</div>
                        <div className="text-ges-slate text-xs">
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <button className="text-ges-teal hover:text-ges-navy transition-colors font-medium text-sm flex items-center group">
                      Read <LuArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-ges-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <LuSearch className="w-12 h-12 text-ges-teal opacity-50" />
            </div>
            <h3 className="text-2xl font-semibold text-ges-slate mb-2">
              No articles found
            </h3>
            <p className="text-ges-slate">
              Try adjusting your search terms or browse all categories
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="mt-6 bg-ges-gold text-ges-navy px-6 py-3 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300"
            >
              Show All Articles
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredPosts.length > 9 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button className="bg-ges-gold text-ges-navy px-8 py-4 rounded-full font-semibold hover:bg-ges-teal hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Load More Articles
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blog;