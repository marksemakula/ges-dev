import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Blog from './pages/Blog';
import Partnerships from './pages/Partnerships';
import GESLifeFeed from './pages/GESLifeFeed';
import MentorshipPortal from './pages/MentorshipPortal';
import GombeHighSchool from './pages/institutions/GombeHighSchool';
import ScoobyDooInternational from './pages/institutions/ScoobyDooInternational';
import AdminPanel from './cms/AdminPanel';
import AcademicCalendarPage from './pages/AcademicCalendar';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-ges-cream">
      <Header />
      
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/ges-life" element={<GESLifeFeed />} />
          <Route path="/mentorship" element={<MentorshipPortal />} />
          <Route path="/institutions/gombe-high-school" element={<GombeHighSchool />} />
          <Route path="/institutions/scooby-doo" element={<ScoobyDooInternational />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;