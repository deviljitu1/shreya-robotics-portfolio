import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Phone, Mail } from 'lucide-react';
import SectionWrapper, { childVariants } from './SectionWrapper';
import { personalInfo, education, languages } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function TerminalLine({ label, value, delay, isVisible }) {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    if (!isVisible) return;
    const fullText = `${value}`;
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i <= fullText.length) {
          setTyped(fullText.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <span style={{ color: '#4A7A94' }}>&gt;</span>
      <span style={{ color: '#4A7A94' }}>{label}:</span>
      <span style={{ color: '#00FF88' }}>"{typed}"</span>
    </div>
  );
}

function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="hoverable"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px 16px',
        background: 'rgba(6,20,40,0.6)',
        border: '1px solid rgba(0,229,255,0.15)',
        borderRadius: '8px',
        color: '#E8F4F8',
        fontFamily: 'DM Mono, monospace',
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        width: '100%',
      }}
      aria-label={`Copy ${label}`}
    >
      {label === 'Phone' ? <Phone size={14} color="#4A7A94" /> : <Mail size={14} color="#4A7A94" />}
      <span style={{ flex: 1, textAlign: 'left' }}>{text}</span>
      {copied ? <Check size={14} color="#00FF88" /> : <Copy size={14} color="#4A7A94" />}
    </button>
  );
}

function LanguageBar({ lang, isVisible }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
      <span style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '12px',
        color: '#4A7A94',
        width: '70px',
      }}>
        {lang.name}
      </span>
      <div style={{ display: 'flex', gap: '3px' }}>
        {Array.from({ length: lang.max }).map((_, i) => (
          <div
            key={i}
            className={`lang-cell ${isVisible && i < lang.proficiency ? `filled-${lang.color}` : ''}`}
            style={{
              transitionDelay: isVisible ? `${i * 80}ms` : '0ms',
            }}
          />
        ))}
      </div>
      <span style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '10px',
        color: '#4A7A94',
      }}>
        {lang.proficiency}/{lang.max}
      </span>
    </div>
  );
}

export default function About() {
  const [termRef, termVisible] = useScrollReveal({ threshold: 0.3 });
  const [langRef, langVisible] = useScrollReveal({ threshold: 0.3 });

  const terminalData = [
    { label: 'name', value: 'Shreya Ade', delay: 0 },
    { label: 'role', value: 'Robotics & Automation Engineer', delay: 200 },
    { label: 'university', value: 'Anna University (MIT)', delay: 400 },
    { label: 'gpa', value: '8.05', delay: 600 },
    { label: 'batch', value: '2022–2026', delay: 800 },
    { label: 'status', value: 'Available for Opportunities ✓', delay: 1000 },
  ];

  return (
    <SectionWrapper id="about">
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1400px', paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Section header */}
        <motion.div variants={childVariants}>
          <p className="section-label">// 01 ABOUT</p>
          <h2 className="section-title" style={{ marginTop: '8px' }}>SYSTEM PROFILE</h2>
          <div className="section-line" />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* LEFT: Avatar + contact chips */}
          <motion.div variants={childVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            {/* Hexagonal avatar */}
            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
              {/* Outer rotating dashed ring */}
              <svg
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  animation: 'spin-slow 12s linear infinite',
                }}
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100" cy="100" r="96"
                  fill="none"
                  stroke="#00E5FF"
                  strokeWidth="1"
                  strokeDasharray="8 6"
                  opacity="0.4"
                />
              </svg>
              {/* Inner ring */}
              <svg
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  animation: 'spin-reverse 8s linear infinite',
                }}
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100" cy="100" r="86"
                  fill="none"
                  stroke="#7B2FFF"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
              </svg>
              {/* Hex with initials */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '140px',
                height: '161px',
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                background: 'linear-gradient(135deg, #060D18, #0a1628)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '42px',
                  fontWeight: 900,
                  color: '#00E5FF',
                  opacity: 0.8,
                }}>
                  SA
                </span>
              </div>

              <style>{`
                @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
              `}</style>
            </div>

            {/* Contact chips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%', maxWidth: '320px' }}>
              <CopyButton text={personalInfo.phone} label="Phone" />
              <CopyButton text={personalInfo.email} label="Email" />
            </div>
          </motion.div>

          {/* RIGHT: Terminal + Languages */}
          <motion.div variants={childVariants} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Terminal card */}
            <div ref={termRef} className="terminal-card">
              <div className="terminal-topbar">
                <div className="terminal-dot" style={{ background: '#FF5F56' }} />
                <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                <div className="terminal-dot" style={{ background: '#27C93F' }} />
                <span style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  color: '#4A7A94',
                  marginLeft: '8px',
                }}>
                  shreya@portfolio:~$
                </span>
              </div>
              <div className="terminal-body">
                {terminalData.map((item) => (
                  <TerminalLine
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    delay={item.delay}
                    isVisible={termVisible}
                  />
                ))}
                <div style={{ marginTop: '4px' }}>
                  <span style={{ color: '#4A7A94' }}>&gt; </span>
                  <span className="blink-cursor">▮</span>
                </div>
              </div>
            </div>

            {/* Language bars */}
            <div ref={langRef}>
              <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '11px',
                color: '#4A7A94',
                letterSpacing: '0.2em',
                marginBottom: '16px',
                textTransform: 'uppercase',
              }}>
                Language Proficiency
              </p>
              {languages.map((lang) => (
                <LanguageBar key={lang.name} lang={lang} isVisible={langVisible} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
