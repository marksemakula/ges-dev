import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const brandColors = {
  primary: '#FFD700',
  secondary: '#800E13',
};

const campuses = [
  { name: 'Kawaala Campus', path: '/institutions/sakghs-kawaala', contact: '+256 700 000 000', location: 'Kawaala, Kampala' },
  { name: 'Bujuuko Campus', path: '/institutions/sakghs-bujuuko', contact: '+256 700 000 001', location: 'Bujuuko, Wakiso' },
];

const SAKFooter = () => {
  return (
    <footer className="text-white pt-10 pb-8" style={{ backgroundColor: '#708090' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center overflow-hidden">
                <img src="/images/StAndrewLogo.png" alt="St. Andrew Kaggwa Gombe HS" className="h-full w-full object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-bold">St. Andrew Kaggwa Gombe HS</div>
                <div className="text-xs font-semibold" style={{ color: brandColors.primary }}>Excellence & Character</div>
              </div>
            </div>
            <p className="text-sm text-white leading-relaxed">
              Two campuses delivering exceptional secondary education with a balance of academics, character formation, and university readiness.
            </p>
            <div className="flex space-x-3 text-white">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
                <motion.a key={idx} whileHover={{ scale: 1.1 }} href="#" className="hover:text-[#FFD700] transition-colors duration-300">
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold" style={{ color: brandColors.primary }}>Campuses</h3>
            <ul className="space-y-2">
              {campuses.map((campus) => (
                <li key={campus.path}>
                  <Link to={campus.path} className="text-white hover:text-[#FFD700] transition-colors duration-300 text-sm block">
                    {campus.name}
                  </Link>
                  <div className="text-xs text-white/80">{campus.location}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold" style={{ color: brandColors.primary }}>Contact</h3>
            <div className="flex items-center space-x-3 text-sm text-white">
              <LuPhone className="w-4 h-4" style={{ color: brandColors.primary }} />
              <span>+256 700 000 000 / 001</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-white">
              <LuMail className="w-4 h-4" style={{ color: brandColors.primary }} />
              <span>info@sakghs.ges.ac.ug</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-white">
              <LuMapPin className="w-4 h-4" style={{ color: brandColors.primary }} />
              <span>Kawaala & Bujuuko Campuses</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-4 text-center text-xs text-white">
          © {new Date().getFullYear()} St. Andrew Kaggwa Gombe High School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SAKFooter;
