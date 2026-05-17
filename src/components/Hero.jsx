import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: '100vh',
        backgroundColor: '#1E1F22', // Match the dark grey of the reference
      }}
    >
      {/* Top Left Logo and Top Right Links are handled by Navbar, assuming Navbar is transparent and over this */}

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#A0A0A0',
            marginBottom: '20px',
            textTransform: 'uppercase'
          }}
        >
          // PORTFOLIO
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            margin: '0 0 16px 0'
          }}
        >
          SHREYA ADE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#A0A0A0',
            textTransform: 'uppercase'
          }}
        >
          ROBOTICS ENGINEER & DESIGNER
        </motion.p>
      </div>

      {/* Left Social Links (Vertical) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute left-8 md:left-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex md:flex-col gap-6 z-10"
      >
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#A0A0A0', transition: 'color 0.3s' }} className="hover:text-white">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#A0A0A0', transition: 'color 0.3s' }} className="hover:text-white">
          <Linkedin size={16} />
        </a>
        <a href="mailto:shreya@example.com" style={{ color: '#A0A0A0', transition: 'color 0.3s' }} className="hover:text-white">
          <Mail size={16} />
        </a>
      </motion.div>

      {/* Right Scroll Indicator (Vertical) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-8 md:right-12 bottom-12 md:bottom-auto md:top-1/2 md:-translate-y-1/2 flex items-center md:flex-col gap-4 z-10"
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.2em',
            color: '#A0A0A0',
            transform: 'rotate(90deg)',
            transformOrigin: 'right center',
            whiteSpace: 'nowrap',
            display: 'block',
            marginTop: '20px' // offset for rotation
          }}
          className="hidden md:block"
        >
          SCROLL
        </span>
        <div 
          className="hidden md:block"
          style={{
            width: '1px',
            height: '40px',
            background: '#A0A0A0',
            marginTop: '30px'
          }}
        />
        <div 
          className="md:hidden"
          style={{
            width: '40px',
            height: '1px',
            background: '#A0A0A0',
          }}
        />
      </motion.div>
    </section>
  );
}
