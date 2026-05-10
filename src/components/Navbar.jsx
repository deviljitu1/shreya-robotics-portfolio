import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Update active section based on scroll
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed z-50"
        style={{
          top: '24px',
          left: '50%',
          transform: `translateX(-50%) ${scrolled ? 'scale(0.97)' : 'scale(1)'}`,
          transition: 'transform 0.3s ease',
        }}
        aria-label="Main navigation"
        role="navigation"
      >
        <div
          style={{
            background: 'rgba(6, 20, 40, 0.75)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(0,229,255,0.15)',
            borderRadius: '999px',
            padding: '6px 8px',
            boxShadow: scrolled
              ? '0 0 60px rgba(0,229,255,0.12), 0 4px 30px rgba(0,0,0,0.6)'
              : '0 0 40px rgba(0,229,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            position: 'relative',
          }}
        >
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            const isHovered = hoveredLink === id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
                className="hidden md:block"
                style={{
                  position: 'relative',
                  padding: '8px 16px',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: isActive || isHovered ? '#00E5FF' : '#4A7A94',
                  textDecoration: 'none',
                  borderRadius: '999px',
                  transition: 'color 0.2s ease',
                  zIndex: 1,
                }}
                tabIndex={0}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,229,255,0.1)',
                      border: '1px solid rgba(0,229,255,0.3)',
                      borderRadius: '999px',
                      boxShadow: isHovered ? '0 0 12px rgba(0,229,255,0.2)' : 'none',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00E5FF',
              cursor: 'pointer',
              padding: '8px 12px',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* SA Logo */}
          <div
            style={{
              marginLeft: '8px',
              marginRight: '4px',
              fontFamily: 'Orbitron, monospace',
              fontSize: '13px',
              fontWeight: 700,
              color: '#00E5FF',
              padding: '4px 12px',
              borderLeft: '1px solid rgba(0,229,255,0.2)',
              letterSpacing: '0.05em',
            }}
          >
            SA
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center"
            style={{
              background: 'rgba(2, 8, 16, 0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6"
              style={{ background: 'transparent', border: 'none', color: '#00E5FF', cursor: 'pointer' }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <nav>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: i * 0.07 }}
                  style={{
                    display: 'block',
                    padding: '16px 0',
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '28px',
                    fontWeight: 700,
                    color: activeSection === link.href.replace('#', '') ? '#00E5FF' : '#E8F4F8',
                    textDecoration: 'none',
                    textAlign: 'center',
                    letterSpacing: '0.05em',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
