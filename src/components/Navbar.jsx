import { motion } from 'framer-motion';

export default function Navbar() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-8 md:px-12 md:py-10 flex justify-between items-center mix-blend-difference"
      aria-label="Main navigation"
    >
      <div 
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '18px',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '0.05em',
          cursor: 'pointer'
        }}
        onClick={(e) => handleNavClick(e, 'hero')}
      >
        SA
        <div style={{ fontSize: '9px', fontWeight: 400, color: '#A0A0A0', marginTop: '2px', letterSpacing: '0.1em' }}>
          PORTFOLIO
        </div>
      </div>

      <div className="flex gap-8">
        <a
          href="#gallery"
          onClick={(e) => handleNavClick(e, 'gallery')}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'opacity 0.3s'
          }}
          className="hover:opacity-60"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'opacity 0.3s'
          }}
          className="hover:opacity-60"
        >
          CONTACT
        </a>
      </div>
    </motion.nav>
  );
}
