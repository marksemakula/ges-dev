import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Blog from './pages/Blog';
import Partnerships from './pages/Partnerships';
import GESLifeFeed from './pages/GESLifeFeed';
import MentorshipPortal from './pages/MentorshipPortal';
import GombeHighSchool from './pages/institutions/GombeHighSchool';
import ScoobyDooInternational from './pages/institutions/ScoobyDooInternational';
import SAKGHSKawaala from './pages/institutions/SAKGHSKawaala';
import SAKGHSBujuuko from './pages/institutions/SAKGHSBujuuko';
import ScoobyKatale from './pages/institutions/ScoobyKatale';
import ScoobyGulu from './pages/institutions/ScoobyGulu';
import GJSKikajjo from './pages/institutions/GJSKikajjo';
import GJSBoarding from './pages/institutions/GJSBoarding';
import GJSAbout from './pages/institutions/GJSAbout';
import JSBI from './pages/institutions/JSBI';
import AdminPanel from './cms/AdminPanel';
import AcademicCalendarPage from './pages/AcademicCalendar';
import './App.css';

function App() {
  const location = useLocation();
  
  // Hide GES header/footer for pages with their own brand (Scooby, GJS & JSBI)
  const isBrandedInstitution =
    location.pathname.includes('/institutions/scooby') ||
    location.pathname.includes('/institutions/gjs') ||
    location.pathname.includes('/institutions/sakghs') ||
    location.pathname.includes('/institutions/jsbi');
  
  return (
    <div className="min-h-screen bg-ges-cream">
      <ScrollToTop />
      {!isBrandedInstitution && <Header />}
      
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
          <Route path="/institutions/sakghs-kawaala" element={<SAKGHSKawaala />} />
          <Route path="/institutions/sakghs-bujuuko" element={<SAKGHSBujuuko />} />
          <Route path="/institutions/scooby-katale" element={<ScoobyKatale />} />
          <Route path="/institutions/scooby-gulu" element={<ScoobyGulu />} />
          <Route path="/institutions/gjs-boarding" element={<GJSBoarding />} />
          <Route path="/institutions/gjs-kikajjo" element={<GJSKikajjo />} />
          <Route path="/institutions/gjs-about" element={<GJSAbout />} />
          <Route path="/institutions/jsbi" element={<JSBI />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
        </Routes>
      </AnimatePresence>
      
      {!isBrandedInstitution && <Footer />}
    </div>
  );
}

export default App;