import { motion } from 'framer-motion';
import SectionWrapper, { childVariants } from './SectionWrapper';
import { technicalSkills, softSkills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

function HexSkill({ skill, index }) {
  return (
    <motion.div
      variants={childVariants}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0px',
      }}
    >
      <div className="hex-shape hoverable" tabIndex={0} aria-label={skill.name}>
        <span style={{ fontSize: '28px', lineHeight: 1 }}>{skill.icon}</span>
        <span style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '10px',
          color: '#E8F4F8',
          marginTop: '6px',
          textAlign: 'center',
          lineHeight: 1.2,
        }}>
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}

function CircularGauge({ skill, isVisible }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * (isVisible ? skill.level : 0)) / 100;

  const colorMap = {
    'Problem Solving': '#00E5FF',
    'Teamwork': '#7B2FFF',
    'Leadership': '#FF9D00',
    'Communication': '#00FF88',
    'Time Management': '#00E5FF',
  };
  const color = colorMap[skill.name] || '#00E5FF';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <div style={{ position: 'relative', width: '90px', height: '90px' }}>
        <svg viewBox="0 0 90 90" style={{ transform: 'rotate(-90deg)' }}>
          {/* Background track */}
          <circle
            cx="45" cy="45" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="4"
          />
          {/* Progress arc */}
          <circle
            cx="45" cy="45" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1.2s ease-out',
              filter: `drop-shadow(0 0 6px ${color}40)`,
            }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Orbitron, monospace',
          fontSize: '16px',
          fontWeight: 700,
          color: '#E8F4F8',
        }}>
          {isVisible ? skill.level : 0}%
        </div>
      </div>
      <span style={{
        fontFamily: 'DM Mono, monospace',
        fontSize: '11px',
        color: '#4A7A94',
        textAlign: 'center',
        lineHeight: 1.2,
      }}>
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const [gaugeRef, gaugeVisible] = useScrollReveal({ threshold: 0.3 });

  return (
    <SectionWrapper id="skills">
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1400px', paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Section header */}
        <motion.div variants={childVariants}>
          <p className="section-label">// 02 SKILLS</p>
          <h2 className="section-title" style={{ marginTop: '8px' }}>TECH STACK</h2>
          <div className="section-line" />
        </motion.div>

        {/* Hex grid */}
        <motion.div
          variants={childVariants}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '64px',
          }}
        >
          {technicalSkills.map((skill, i) => (
            <HexSkill key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Soft skills header */}
        <motion.div variants={childVariants}>
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.3em',
            color: '#4A7A94',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '32px',
          }}>
            Core Competencies
          </p>
        </motion.div>

        {/* Circular gauges */}
        <motion.div
          ref={gaugeRef}
          variants={childVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '24px',
            justifyContent: 'center',
          }}
        >
          {softSkills.map((skill) => (
            <CircularGauge key={skill.name} skill={skill} isVisible={gaugeVisible} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
