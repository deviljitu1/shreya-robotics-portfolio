import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
          <div className="lg:hidden flex items-center justify-between p-4 bg-[#111111] sticky top-0 z-50 border-b border-[#333]">
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#FFFFFF', margin: 0 }}>
              SHREYA <span style={{ color: '#FFB400' }}>ADE</span>
            </h1>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: '#FFB400' }}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Sidebar / Mobile Menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-0 lg:h-screen z-40 fixed inset-0 mt-[65px] lg:mt-0 bg-[#000]`}>
            <Sidebar activeSection={activeSection} setActiveSection={(s) => { setActiveSection(s); setMobileMenuOpen(false); }} />
          </div>
          
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
