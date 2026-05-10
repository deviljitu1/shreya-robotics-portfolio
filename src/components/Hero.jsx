import { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import ParticleField from './ParticleField';
import { personalInfo, stats } from '../data/portfolioData';

const Scene3D = lazy(() => import('./Scene3D'));

function useTypewriter(words, typingSpeed = 80, pauseTime = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout;

    if (!isDeleting && displayText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? word.substring(0, displayText.length - 1)
            : word.substring(0, displayText.length + 1)
        );
      }, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words, typingSpeed, pauseTime]);

  return displayText;
}

export default function Hero() {
  const typewriterText = useTypewriter(personalInfo.typewriterRoles, 80, 2000);

  const letterVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const floatStyles = [
    { animation: 'float-1 4s ease-in-out infinite', top: '15%', right: '42%' },
    { animation: 'float-2 5s ease-in-out infinite', top: '35%', right: '38%' },
    { animation: 'float-3 3.5s ease-in-out infinite', top: '55%', right: '44%' },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', paddingTop: 'clamp(80px, 15vh, 120px)' }}
    >
      {/* Particle canvas — behind everything */}
      <ParticleField count={200} />

      <div
        className="relative z-10 mx-auto px-6 md:px-12 lg:px-20"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          maxWidth: '1400px',
        }}
      >
        {/* On larger screens switch to two-column */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          {/* LEFT COLUMN */}
          <div className="relative">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="section-label"
              style={{ marginBottom: '20px', fontSize: '12px', letterSpacing: '0.3em' }}
            >
              {personalInfo.eyebrow}
            </motion.p>

            {/* Main heading */}
            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex' }}>
                {'SHREYA'.split('').map((letter, i) => (
                  <motion.span
                    key={`shreya-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: 'clamp(2.5rem, 12vw, 6rem)',
                      fontWeight: 900,
                      color: '#E8F4F8',
                      lineHeight: 1,
                      display: 'inline-block',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              <div style={{ display: 'flex', marginTop: '-4px' }}>
                {'ADE'.split('').map((letter, i) => (
                  <motion.span
                    key={`ade-${i}`}
                    custom={i + 6}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-stroke-cyan"
                    style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: 'clamp(2.5rem, 12vw, 6rem)',
                      fontWeight: 900,
                      lineHeight: 1,
                      display: 'inline-block',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Floating stat chips */}
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                  className="hidden md:flex"
                  style={{
                    position: 'absolute',
                    ...floatStyles[i],
                    background: 'rgba(6, 20, 40, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(0,229,255,0.25)',
                    borderRadius: '999px',
                    padding: '6px 14px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '11px',
                    color: '#00E5FF',
                    whiteSpace: 'nowrap',
                    zIndex: 2,
                    animation: floatStyles[i].animation,
                    alignItems: 'center',
                    gap: '6px',
                    boxShadow: '0 0 16px rgba(0,229,255,0.08)',
                  }}
                >
                  <span style={{ color: '#4A7A94', fontSize: '10px' }}>{stat.label}</span>
                  <span>{stat.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Typewriter subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: 'clamp(18px, 4vw, 24px)',
                fontWeight: 600,
                color: '#00E5FF',
                marginTop: '24px',
                minHeight: '36px',
              }}
            >
              {typewriterText}
              <span className="blink-cursor" style={{ color: '#00E5FF' }}>▮</span>
            </motion.div>

            {/* Mobile Stat Chips */}
            <div className="flex md:hidden flex-wrap gap-2 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={`mobile-stat-${stat.id}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  style={{
                    background: 'rgba(6, 20, 40, 0.4)',
                    border: '1px solid rgba(0,229,255,0.15)',
                    borderRadius: '999px',
                    padding: '4px 12px',
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    color: '#00E5FF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ color: '#4A7A94' }}>{stat.label}</span>
                  <span>{stat.value}</span>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                color: '#4A7A94',
                marginTop: '12px',
              }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                marginTop: '36px',
                alignItems: 'center',
              }}
            >
              <button
                className="btn-primary"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects <ArrowRight size={14} />
              </button>
              <button className="btn-outline">
                <Download size={14} /> Download Resume
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hidden md:flex relative items-center justify-center"
            style={{
              minHeight: '450px',
            }}
          >
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2"
        style={{ transform: 'translateX(-50%)', textAlign: 'center' }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #00E5FF, transparent)',
            margin: '0 auto 8px',
          }}
        />
        <span
          style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            color: '#4A7A94',
            letterSpacing: '0.3em',
          }}
        >
          SCROLL
        </span>
      </motion.div>
    </section>
  );
}
