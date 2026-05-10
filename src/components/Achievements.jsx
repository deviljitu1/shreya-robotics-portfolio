import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionWrapper, { childVariants } from './SectionWrapper';
import GlowCard from './GlowCard';
import { achievements } from '../data/portfolioData';

const colorMap = {
  amber: { accent: '#FF9D00', bg: 'rgba(255,157,0,0.08)', border: 'rgba(255,157,0,0.3)' },
  cyan: { accent: '#00E5FF', bg: 'rgba(0,229,255,0.08)', border: 'rgba(0,229,255,0.3)' },
  violet: { accent: '#7B2FFF', bg: 'rgba(123,47,255,0.08)', border: 'rgba(123,47,255,0.3)' },
};

function TimelineNode({ achievement, index, isLeft }) {
  const colors = colorMap[achievement.color] || colorMap.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        display: 'flex',
        flexDirection: isLeft ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '48px',
        width: '100%',
      }}
    >
      {/* Card side */}
      <div style={{ flex: 1, display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
        <GlowCard
          amber={achievement.color === 'amber'}
          style={{ maxWidth: '420px', width: '100%' }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            {/* Icon */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: colors.bg,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              flexShrink: 0,
            }}>
              {achievement.icon}
            </div>

            <div style={{ flex: 1 }}>
              {/* Year chip */}
              <span style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '10px',
                color: colors.accent,
                background: colors.bg,
                border: `1px solid ${colors.border}`,
                padding: '2px 8px',
                borderRadius: '4px',
                letterSpacing: '0.1em',
              }}>
                {achievement.year}
              </span>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '20px',
                fontWeight: 700,
                color: '#E8F4F8',
                marginTop: '8px',
                lineHeight: 1.2,
              }}>
                {achievement.title}
              </h3>

              {/* Subtitle */}
              <p style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '12px',
                color: '#4A7A94',
                marginTop: '4px',
                lineHeight: 1.5,
              }}>
                {achievement.subtitle}
              </p>
            </div>
          </div>
        </GlowCard>
      </div>

      {/* Node dot */}
      <div style={{
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: colors.accent,
        border: `3px solid ${colors.bg}`,
        boxShadow: `0 0 16px ${colors.accent}60, 0 0 32px ${colors.accent}20`,
        flexShrink: 0,
        zIndex: 2,
      }} />

      {/* Empty side (spacing) — hidden on mobile */}
      <div style={{ flex: 1 }} className="hidden md:block" />
    </motion.div>
  );
}

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionWrapper id="achievements">
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1400px', paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Section header */}
        <motion.div variants={childVariants}>
          <p className="section-label">// 04 ACHIEVEMENTS</p>
          <h2 className="section-title" style={{ marginTop: '8px' }}>MISSION LOG</h2>
          <div className="section-line" />
        </motion.div>

        {/* Timeline */}
        <div
          ref={containerRef}
          style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {/* Center vertical line */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              transform: 'translateX(-50%)',
              width: '2px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              className="timeline-line"
              style={{
                height: '100%',
                scaleY: lineScale,
                transformOrigin: 'top',
              }}
            />
          </div>

          {/* Mobile line (left-aligned) */}
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              left: '7px',
              top: 0,
              bottom: 0,
              width: '2px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              className="timeline-line"
              style={{
                height: '100%',
                scaleY: lineScale,
                transformOrigin: 'top',
              }}
            />
          </div>

          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {/* Desktop: alternating layout */}
              <div className="hidden md:block" style={{ width: '100%' }}>
                <TimelineNode
                  achievement={achievement}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              </div>

              {/* Mobile: left-aligned */}
              <div className="md:hidden" style={{ width: '100%', paddingLeft: '32px' }}>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  style={{ marginBottom: '32px', position: 'relative' }}
                >
                  {/* Node dot for mobile */}
                  <div style={{
                    position: 'absolute',
                    left: '-32px',
                    top: '24px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: colorMap[achievement.color]?.accent || '#00E5FF',
                    boxShadow: `0 0 12px ${colorMap[achievement.color]?.accent || '#00E5FF'}60`,
                    zIndex: 2,
                  }} />

                  <GlowCard amber={achievement.color === 'amber'}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div style={{
                        fontSize: '24px',
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: colorMap[achievement.color]?.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        {achievement.icon}
                      </div>
                      <div>
                        <span style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '10px',
                          color: colorMap[achievement.color]?.accent,
                        }}>
                          {achievement.year}
                        </span>
                        <h3 style={{
                          fontFamily: 'Rajdhani, sans-serif',
                          fontSize: '18px',
                          fontWeight: 700,
                          color: '#E8F4F8',
                          marginTop: '4px',
                        }}>
                          {achievement.title}
                        </h3>
                        <p style={{
                          fontFamily: 'DM Mono, monospace',
                          fontSize: '11px',
                          color: '#4A7A94',
                          marginTop: '4px',
                        }}>
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
