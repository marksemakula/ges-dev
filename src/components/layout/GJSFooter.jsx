import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu';

const brandColors = {
  primary: '#FFD700',
  secondary: '#800E13',
};

const campuses = [
  { name: 'Kikajjo Campus', contact: '+256 700 000 004', path: '/institutions/gjs-kikajjo' },
  { name: 'Gulu Campus', contact: '+256 700 000 005', path: '/institutions/gjs-gulu' },
  { name: 'Boarding Campus', contact: '+256 700 000 006', path: '/institutions/gjs-boarding' },
];

const GJSFooter = () => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: brandColors.secondary }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 left-10 w-40 h-40 rounded-full" style={{ backgroundColor: brandColors.primary }} />
        <div className="absolute bottom-0 right-24 w-56 h-56 rounded-full" style={{ backgroundColor: brandColors.primary }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-4 mb-4">
              <img src="/images/GombeBadge.png" alt="Gombe Junior School" className="h-14 w-auto" />
              <div className="leading-tight">
                <div className="text-xl font-bold">Gombe Junior School</div>
                <div className="text-sm font-semibold" style={{ color: brandColors.primary }}>
                  Ssosolye bwatafa
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Nurturing learners through academic excellence, character formation, and a caring community across our campuses.
            </p>
          </motion.div>

          {/* Campuses */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}>
            <h4 className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>Our Campuses</h4>
            <ul className="space-y-3">
              {campuses.map((campus) => (
                <li key={campus.path}>
                  <Link
                    to={campus.path}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="font-semibold">{campus.name}</span>
                    <span className="text-sm" style={{ color: brandColors.primary }}>{campus.contact}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="text-lg font-semibold mb-4" style={{ color: brandColors.primary }}>Contact Us</h4>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start gap-3">
                <LuMapPin className="w-5 h-5 mt-1" style={{ color: brandColors.primary }} />
                <p>Wakiso District, Uganda<br />P.O. Box 71523, Kampala</p>
              </div>
              <div className="flex items-start gap-3">
                <LuPhone className="w-5 h-5 mt-1" style={{ color: brandColors.primary }} />
                <div>
                  <p>+256 700 000 004 (Kikajjo)</p>
                  <p>+256 700 000 005 (Gulu)</p>
                  <p>+256 700 000 006 (Boarding)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <LuMail className="w-5 h-5 mt-1" style={{ color: brandColors.primary }} />
                <div>
                  <p>info@gjs.ges.ac.ug</p>
                  <p>admissions@gjs.ges.ac.ug</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-white/80 gap-3">
          <span>© 2025 Gombe Junior School. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white" aria-label="Privacy Policy">Privacy</Link>
            <Link to="/terms" className="hover:text-white" aria-label="Terms of Service">Terms</Link>
            <Link to="/cookies" className="hover:text-white" aria-label="Cookie Policy">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GJSFooter;
