import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay for splash screen
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#1E1F22', minHeight: '100vh', color: '#FFFFFF' }}>
      {loading ? (
        <div style={{
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          background: '#1E1F22',
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          letterSpacing: '0.2em',
          color: '#FFFFFF'
        }}>
          LOADING...
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Resume />
            <Gallery />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
