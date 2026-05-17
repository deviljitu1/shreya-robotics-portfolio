import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Gallery from './components/Gallery';

export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  // Smooth scroll with Lenis
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      {/* Loader overlay */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Custom cursor (hidden on mobile via CSS) */}
      <CustomCursor />

      {/* Main content */}
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Gallery />
            <Projects />
            <Achievements />
            <Contact />
          </main>
        </>
      )}
    </>
  );
}
