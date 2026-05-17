import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, FileText, Briefcase, Mail } from 'lucide-react';

export default function Sidebar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'hero', label: 'HOME', icon: Home },
    { id: 'about', label: 'ABOUT ME', icon: User },
    { id: 'resume', label: 'RESUME', icon: FileText },
    { id: 'gallery', label: 'PORTFOLIO', icon: Briefcase },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed top-0 left-0 h-full z-50 flex flex-col w-64 shadow-2xl"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Top section with avatar */}
      <div 
        style={{ 
          height: '250px', 
          backgroundColor: '#1A1A1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '2px solid #333'
        }}
      >
        <div 
          style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '50%', 
            overflow: 'hidden',
            border: '4px solid #FFB400',
            boxShadow: '0 0 20px rgba(255, 180, 0, 0.2)'
          }}
        >
          <img 
            src="/src/assets/shreya-profile.jpeg" 
            alt="Shreya Ade" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>

      {/* Bottom section with Navigation */}
      <div 
        style={{ 
          flex: 1, 
          backgroundColor: '#0A0A0A',
          padding: '40px 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '16px 0',
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: activeSection === item.id ? '#FFB400' : '#FFFFFF',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              position: 'relative'
            }}
            className="hover:text-[#FFB400]"
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNav"
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: '#FFB400'
                }}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
