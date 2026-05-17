import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Artificial delay for splash screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'gallery', 'contact'];
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }

      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#FFFFFF', display: 'flex', flexDirection: 'column', lg: { flexDirection: 'row' } }}>
      {loading ? (
        <div style={{
          width: '100vw',
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          background: '#000000',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '32px',
          letterSpacing: '0.1em',
          color: '#FFB400'
        }}>
          LOADING...
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          
          {/* Mobile Header */}
          <div 
            className="lg:hidden flex items-center justify-between p-4 sticky top-0 z-50 border-b"
            style={{ 
              background: 'rgba(10, 10, 10, 0.85)', 
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
            }}
          >
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', color: '#FFFFFF', margin: 0, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
              SHREYA <span style={{ color: '#FFB400', textShadow: '0 0 10px rgba(255, 180, 0, 0.3)' }}>ADE</span>
            </h1>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              style={{ 
                color: '#FFB400',
                background: 'rgba(255, 180, 0, 0.1)',
                border: '1px solid rgba(255, 180, 0, 0.2)',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              className="hover:scale-105 active:scale-95"
            >
              <motion.div
                key={mobileMenuOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </button>
          </div>

          {/* Desktop Sidebar (Only hidden on mobile) */}
          <div className="hidden lg:block w-64 flex-shrink-0 lg:sticky lg:top-0 lg:h-screen z-40 bg-[#000]">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>

          {/* Cool Animated Mobile Menu Overlay */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'fixed',
                  top: '67px', // Match mobile header height
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 49,
                  background: 'rgba(5, 5, 5, 0.96)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '40px 30px 60px 30px',
                  overflow: 'hidden'
                }}
              >
                {/* Glowing decorative background orb */}
                <div style={{
                  position: 'absolute',
                  top: '25%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(255,180,0,0.08) 0%, rgba(255,180,0,0) 70%)',
                  pointerEvents: 'none',
                  zIndex: 0
                }} />

                {/* Navigation Links */}
                <div className="flex flex-col gap-6 justify-center items-center flex-grow z-10">
                  {[
                    { id: 'hero', label: 'HOME' },
                    { id: 'about', label: 'ABOUT ME' },
                    { id: 'resume', label: 'RESUME' },
                    { id: 'gallery', label: 'PORTFOLIO' },
                    { id: 'contact', label: 'CONTACT' },
                  ].map((item, idx) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.08, type: 'spring', stiffness: 100 }}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileMenuOpen(false);
                          const el = document.getElementById(item.id);
                          if (el) {
                            el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '36px',
                          letterSpacing: '0.1em',
                          color: isActive ? '#FFB400' : '#FFFFFF',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          position: 'relative',
                          padding: '4px 20px',
                          textTransform: 'uppercase'
                        }}
                      >
                        {isActive && (
                          <motion.span 
                            layoutId="activeMobileDot"
                            style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              backgroundColor: '#FFB400',
                              boxShadow: '0 0 10px #FFB400'
                            }}
                          />
                        )}
                        <span className="hover:text-[#FFB400] transition-colors duration-200">
                          {item.label}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Footer Section in Mobile Menu */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center gap-6 z-10"
                >
                  {/* Subtle Separator */}
                  <div style={{ width: '80px', height: '1px', background: 'rgba(255, 255, 255, 0.1)' }} />

                  {/* Social Buttons */}
                  <div className="flex gap-6">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFF',
                        transition: 'all 0.3s'
                      }}
                      className="hover:border-[#FFB400] hover:text-[#FFB400] hover:scale-110 active:scale-95"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFF',
                        transition: 'all 0.3s'
                      }}
                      className="hover:border-[#FFB400] hover:text-[#FFB400] hover:scale-110 active:scale-95"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a 
                      href="mailto:shreyaade2003@gmail.com"
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFF',
                        transition: 'all 0.3s'
                      }}
                      className="hover:border-[#FFB400] hover:text-[#FFB400] hover:scale-110 active:scale-95"
                    >
                      <Mail size={18} />
                    </a>
                  </div>

                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    color: '#888',
                    textTransform: 'uppercase'
                  }}>
                    Robotics & Automation Engineer
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <main className="flex-1 w-full" style={{ position: 'relative' }}>
            <Hero />
            <About />
            <Resume />
            <Gallery />
            <Contact />
          </main>
        </div>
      )}
    </div>
  );
}
