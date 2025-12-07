import React, { createContext, useContext, useState, useEffect } from 'react';

export const CMSContext = createContext(null);

// Sample CMS content structure
const sampleContent = {
  'welcome-post': {
    id: 'welcome-post',
    type: 'blog',
    title: 'Welcome to GES Life Feed',
    content: 'We are excited to launch our new GES Life Feed where you can stay updated with all the latest happenings across our educational institutions. From student achievements to campus events, this is your one-stop destination for all GES news.',
    metadata: {
      description: 'Introduction to GES Life Feed',
      keywords: ['ges', 'education', 'news', 'students'],
    },
    author: 'GES Administration',
    publishedAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    status: 'published'
  },
  'academic-excellence': {
    id: 'academic-excellence',
    type: 'blog',
    title: 'Commitment to Academic Excellence',
    content: 'At GES, we maintain the highest standards of academic excellence. Our comprehensive curriculum, experienced faculty, and modern facilities ensure that every student receives quality education that prepares them for future success.',
    metadata: {
      description: 'GES commitment to quality education',
      keywords: ['academic', 'excellence', 'education', 'curriculum'],
    },
    author: 'Dr. Academic Dean',
    publishedAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
    status: 'published'
  }
};

export const CMSProvider = ({ children }) => {
  const [content, setContent] = useState({});
  const [institutions, setInstitutions] = useState([
    {
      id: 'ghs',
      name: 'Gombe High School',
      subdomain: 'gombehighschool',
      type: 'high-school',
      location: 'Gombe District, Uganda',
      curriculum: ['National Curriculum', 'Sciences', 'Arts'],
      contact: {
        email: 'info@gombehighschool.ges.ac.ug',
        phone: '+256 700 123 456',
        address: 'Gombe District, Uganda'
      },
      features: ['Science Labs', 'Library', 'Sports Complex']
    },
    {
      id: 'gjs',
      name: 'Gombe Junior School',
      subdomain: 'gombejuniorschool',
      type: 'junior-school',
      location: 'Gombe District, Uganda',
      curriculum: ['Primary Education', 'Foundation Skills'],
      contact: {
        email: 'info@gombejuniorschool.ges.ac.ug',
        phone: '+256 700 123 457',
        address: 'Gombe District, Uganda'
      },
      features: ['Playground', 'Computer Lab', 'Art Studio']
    }
  ]);
  // Academic calendar events state
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Load calendar events from localStorage
  useEffect(() => {
    const storedEvents = localStorage.getItem('ges-calendar-events');
    if (storedEvents) {
      try {
        setCalendarEvents(JSON.parse(storedEvents));
      } catch (error) {
        setCalendarEvents([]);
      }
    }
  }, []);

  // Save calendar events to localStorage
  const saveCalendarEvents = (events) => {
    setCalendarEvents(events);
    localStorage.setItem('ges-calendar-events', JSON.stringify(events));
  };

  // Fetch events (for API, here just reloads from localStorage)
  const fetchCalendarEvents = () => {
    const storedEvents = localStorage.getItem('ges-calendar-events');
    if (storedEvents) {
      setCalendarEvents(JSON.parse(storedEvents));
    }
  };

  // Add event
  const addCalendarEvent = (event) => {
    const newEvent = { ...event, id: `event-${Date.now()}` };
    const updated = [...calendarEvents, newEvent];
    saveCalendarEvents(updated);
  };

  // Update event
  const updateCalendarEvent = (id, updates) => {
    const updated = calendarEvents.map(ev => ev.id === id ? { ...ev, ...updates } : ev);
    saveCalendarEvents(updated);
  };

  // Delete event
  const deleteCalendarEvent = (id) => {
    const updated = calendarEvents.filter(ev => ev.id !== id);
    saveCalendarEvents(updated);
  };
// Removed leftover invalid object literals

  useEffect(() => {
    // Load content from localStorage or initialize with sample content
    const storedContent = localStorage.getItem('ges-cms-content');
    if (storedContent) {
      try {
        setContent(JSON.parse(storedContent));
      } catch (error) {
        console.error('Error loading CMS content:', error);
        setContent(sampleContent);
      }
    } else {
      setContent(sampleContent);
      localStorage.setItem('ges-cms-content', JSON.stringify(sampleContent));
    }
  }, []);

  const saveContent = async (newContent) => {
    const updated = { ...content, [newContent.id]: newContent };
    setContent(updated);
    localStorage.setItem('ges-cms-content', JSON.stringify(updated));
    return newContent;
  };

  const deleteContent = async (id) => {
    const { [id]: deleted, ...remaining } = content;
    setContent(remaining);
    localStorage.setItem('ges-cms-content', JSON.stringify(remaining));
    return deleted;
  };

  const publishContent = async (id) => {
    const item = content[id];
    if (item) {
      const published = { ...item, status: 'published', publishedAt: new Date().toISOString() };
      await saveContent(published);
      return published;
    }
    return null;
  };

  const getContentByType = (type) => {
    return Object.values(content).filter(item => item.type === type);
  };

  const getPublishedContent = () => {
    return Object.values(content).filter(item => item.status === 'published');
  };

  const contextValue = {
    content,
    institutions,
    saveContent,
    deleteContent,
    publishContent,
    getContentByType,
    getPublishedContent,
    // Academic calendar methods
    calendarEvents,
    addCalendarEvent,
    updateCalendarEvent,
    deleteCalendarEvent,
    fetchCalendarEvents,
    // Helper methods
    createContent: (type, data) => {
      const newContent = {
        id: `${type}-${Date.now()}`,
        type,
        ...data,
        publishedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'draft'
      };
      return saveContent(newContent);
    },
    updateContent: (id, updates) => {
      const existing = content[id];
      if (existing) {
        const updated = {
          ...existing,
          ...updates,
          updatedAt: new Date().toISOString()
        };
        return saveContent(updated);
      }
      return null;
    }
  };

  return (
    <CMSContext.Provider value={contextValue}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within CMSProvider');
  }
  return context;
};

export default CMSProvider;