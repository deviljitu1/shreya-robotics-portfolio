import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [showRole, setShowRole] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [done, setDone] = useState(false);
  const roleText = 'ROBOTICS & AUTOMATION ENGINEER';
  const letters = ['S', 'H', 'R', 'E', 'Y', 'A'];

  // Progress bar animation
  useEffect(() => {
    const start = performance.now();
    const duration = 2800;
    const raf = (now) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p < 100) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  // Start role typing after letters appear
  useEffect(() => {
    const timer = setTimeout(() => setShowRole(true), letters.length * 120 + 400);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter for role text
  useEffect(() => {
    if (!showRole) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= roleText.length) {
        setTypedText(roleText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [showRole]);

  // Exit after 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const containerVariants = {
    exit: {
      y: '-100%',
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#020810' }}
          variants={containerVariants}
          animate="visible"
          exit="exit"
        >
          {/* Circuit SVG Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.35 }}
          >
            <defs>
              <filter id="glow-line">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
              </filter>
            </defs>
            {/* Radiating circuit lines */}
            {[
              { x1: '50%', y1: '50%', x2: '15%', y2: '35%' },
              { x1: '50%', y1: '50%', x2: '85%', y2: '35%' },
              { x1: '50%', y1: '50%', x2: '20%', y2: '70%' },
              { x1: '50%', y1: '50%', x2: '80%', y2: '70%' },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1} y1={line.y1}
                x2={line.x2} y2={line.y2}
                stroke="#00E5FF"
                strokeWidth="1"
                strokeDasharray="200"
                filter="url(#glow-line)"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: 'easeInOut' }}
              />
            ))}
            {/* Corner dots */}
            {[
              { cx: '15%', cy: '35%' },
              { cx: '85%', cy: '35%' },
              { cx: '20%', cy: '70%' },
              { cx: '80%', cy: '70%' },
            ].map((dot, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={dot.cx} cy={dot.cy} r="3"
                fill="#00E5FF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 + i * 0.05 }}
              />
            ))}
          </svg>

          {/* Main content */}
          <div className="flex flex-col items-center gap-6 relative z-10">
            {/* Name letters */}
            <div className="flex gap-1 md:gap-2">
              {letters.map((letter, i) => (
                <motion.span
                  key={letter}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="glow-pulse"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: 'clamp(3rem, 10vw, 5rem)',
                    fontWeight: 900,
                    color: '#00E5FF',
                    lineHeight: 1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Typewriter role text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showRole ? 1 : 0 }}
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                color: '#4A7A94',
                letterSpacing: '0.3em',
                minHeight: '20px',
              }}
            >
              {typedText}
              <span className="blink-cursor" style={{ color: '#4A7A94' }}>▮</span>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div
            className="absolute bottom-8 left-1/2"
            style={{ transform: 'translateX(-50%)', width: '300px', maxWidth: '80vw' }}
          >
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
              <motion.div
                className="loader-progress"
                style={{ height: '100%', width: `${progress}%`, borderRadius: '2px' }}
              />
            </div>
            <div style={{
              marginTop: '8px',
              textAlign: 'center',
              fontFamily: 'DM Mono, monospace',
              fontSize: '10px',
              color: '#4A7A94',
              letterSpacing: '0.2em',
            }}>
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
