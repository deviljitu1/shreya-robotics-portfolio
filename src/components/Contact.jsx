import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Download, Phone, Mail } from 'lucide-react';
import SectionWrapper, { childVariants } from './SectionWrapper';
import { personalInfo } from '../data/portfolioData';

function ContactField({ icon: Icon, label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const t = document.createElement('textarea');
      t.value = value;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 20px',
        background: 'rgba(6,20,40,0.5)',
        border: '1px solid rgba(0,229,255,0.12)',
        borderRadius: '8px',
        fontFamily: 'DM Mono, monospace',
        transition: 'border-color 0.2s',
      }}
    >
      <Icon size={16} color="#4A7A94" />
      <span style={{ fontSize: '11px', color: '#4A7A94', width: '60px', letterSpacing: '0.1em' }}>
        {label}
      </span>
      <span style={{ flex: 1, fontSize: '13px', color: '#E8F4F8' }}>{value}</span>
      <button
        onClick={handleCopy}
        className="hoverable"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          color: copied ? '#00FF88' : '#4A7A94',
          transition: 'color 0.2s',
        }}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
    </div>
  );
}

export default function Contact() {
  const [toast, setToast] = useState(false);

  return (
    <SectionWrapper id="contact">
      <div
        style={{
          position: 'relative',
          paddingTop: '100px',
          paddingBottom: '60px',
          overflow: 'hidden',
        }}
      >
        {/* Radar background rings */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '200px',
                height: '200px',
                marginTop: '-100px',
                marginLeft: '-100px',
                borderRadius: '50%',
                border: '1px solid rgba(0,229,255,0.12)',
                animation: `radarPulse ${3 + i}s ease-out infinite`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
          {/* Crosshair center */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            marginTop: '-10px',
            marginLeft: '-10px',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: '1px',
              background: 'rgba(0,229,255,0.3)',
            }} />
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '1px',
              height: '100%',
              background: 'rgba(0,229,255,0.3)',
            }} />
          </div>
        </div>

        <div className="mx-auto px-6 md:px-12 lg:px-20 relative z-10" style={{ maxWidth: '700px' }}>
          {/* Section header */}
          <motion.div variants={childVariants} style={{ textAlign: 'center' }}>
            <p className="section-label">// 05 CONTACT</p>

            {/* Terminal header */}
            <h2 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 700,
              color: '#E8F4F8',
              marginTop: '16px',
              marginBottom: '12px',
            }}>
              {'> '}INITIATE CONTACT<span className="blink-cursor" style={{ color: '#00E5FF' }}>_</span>
            </h2>

            <p style={{
              fontFamily: 'DM Mono, monospace',
              fontSize: '14px',
              color: '#4A7A94',
              marginBottom: '40px',
            }}>
              Open to internships, collaborations, and full-time roles.
            </p>
          </motion.div>

          {/* Contact fields */}
          <motion.div variants={childVariants} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
            <ContactField icon={Phone} label="PHONE" value={personalInfo.phone} />
            <ContactField icon={Mail} label="EMAIL" value={personalInfo.email} />
          </motion.div>

          {/* Download CTA */}
          <motion.div variants={childVariants} style={{ textAlign: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hoverable"
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                background: 'transparent',
                color: '#00E5FF',
                border: '2px solid #00E5FF',
                borderRadius: '6px',
                padding: '16px 40px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00E5FF';
                e.currentTarget.style.color = '#020810';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(0,229,255,0.5), 0 0 80px rgba(0,229,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00E5FF';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </motion.button>
          </motion.div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: '80px',
            paddingTop: '24px',
            borderTop: '1px solid',
            borderImage: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), rgba(123,47,255,0.3), transparent) 1',
            textAlign: 'center',
          }}
        >
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '12px',
            color: '#4A7A94',
            letterSpacing: '0.1em',
          }}>
            SHREYA ADE © 2025
          </p>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            color: 'rgba(74,122,148,0.5)',
            marginTop: '6px',
            letterSpacing: '0.05em',
          }}>
            Built with React + Three.js + Framer Motion
          </p>
        </div>

        {/* Toast notification */}
        <AnimatePresence>
          {toast && (
            <motion.div
              className="toast"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              COPIED ✓
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
