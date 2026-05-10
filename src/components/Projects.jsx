import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionWrapper, { childVariants } from './SectionWrapper';
import GlowCard from './GlowCard';
import { projects } from '../data/portfolioData';

const accentColors = {
  cyan: '#00E5FF',
  violet: '#7B2FFF',
  amber: '#FF9D00',
  green: '#00FF88',
};

function ProjectCard({ project, featured }) {
  const accent = accentColors[project.accentColor] || '#00E5FF';

  return (
    <motion.div
      variants={childVariants}
      style={{
        gridColumn: featured ? 'span 2' : 'span 1',
      }}
      className={featured ? 'col-span-full md:col-span-2' : ''}
    >
      <GlowCard
        amber={project.winner}
        topGradient={project.topGradient}
        style={{ height: '100%', position: 'relative' }}
      >
        {/* Winner badge */}
        {project.winner && (
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(255,157,0,0.15)',
            border: '1px solid #FF9D00',
            color: '#FF9D00',
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            fontWeight: 500,
            padding: '4px 12px',
            borderRadius: '999px',
            letterSpacing: '0.05em',
            zIndex: 2,
          }}>
            🏆 HACKATHON WINNER
          </div>
        )}

        {/* Watermark number */}
        <span style={{
          position: 'absolute',
          top: '16px',
          left: '20px',
          fontFamily: 'Orbitron, monospace',
          fontSize: featured ? '72px' : '48px',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.04)',
          lineHeight: 1,
          zIndex: 0,
          pointerEvents: 'none',
        }}>
          {project.id}
        </span>

        <div style={{ position: 'relative', zIndex: 1, paddingTop: '12px' }}>
          {/* Title */}
          <h3 style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: featured ? '24px' : '20px',
            fontWeight: 700,
            color: '#E8F4F8',
            marginBottom: '4px',
            lineHeight: 1.2,
          }}>
            {project.title}
          </h3>

          {/* Subtitle */}
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '12px',
            color: '#4A7A94',
            marginBottom: '12px',
          }}>
            {project.subtitle}
          </p>

          {/* Mechanism tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
            {project.mechanisms.map((m) => (
              <span
                key={m}
                style={{
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '10px',
                  color: accent,
                  background: `${accent}15`,
                  border: `1px solid ${accent}30`,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  letterSpacing: '0.05em',
                }}
              >
                [{m}]
              </span>
            ))}
          </div>

          {/* Description */}
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '13px',
            color: '#4A7A94',
            lineHeight: 1.7,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: featured ? 4 : 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project.description}
          </p>

          {/* Bottom: Tags + link */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'DM Mono, monospace',
                    fontSize: '10px',
                    color: '#E8F4F8',
                    background: 'rgba(255,255,255,0.06)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    letterSpacing: '0.03em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="hoverable"
              style={{
                fontFamily: 'DM Mono, monospace',
                fontSize: '12px',
                color: '#4A7A94',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00E5FF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4A7A94')}
              tabIndex={0}
              role="button"
              aria-label={`View details of ${project.title}`}
            >
              View Details <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1400px', paddingTop: '100px', paddingBottom: '80px' }}>
        {/* Section header */}
        <motion.div variants={childVariants}>
          <p className="section-label">// 03 PROJECTS</p>
          <h2 className="section-title" style={{ marginTop: '8px' }}>ENGINEERING BUILDS</h2>
          <div className="section-line" />
        </motion.div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: '20px',
          }}
        >
          {/* Featured card — full width */}
          {featured && (
            <motion.div variants={childVariants} style={{ gridColumn: '1 / -1' }}>
              <GlowCard
                amber
                topGradient={featured.topGradient}
                style={{ position: 'relative' }}
              >
                {/* Winner badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255,157,0,0.15)',
                  border: '1px solid #FF9D00',
                  color: '#FF9D00',
                  fontFamily: 'DM Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 500,
                  padding: '4px 12px',
                  borderRadius: '999px',
                  letterSpacing: '0.05em',
                  zIndex: 2,
                }}>
                  🏆 HACKATHON WINNER
                </div>

                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '20px',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '72px',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.04)',
                  lineHeight: 1,
                  zIndex: 0,
                }}>
                  {featured.id}
                </span>

                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  paddingTop: '12px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                }}>
                  <div>
                    <h3 style={{
                      fontFamily: 'Rajdhani, sans-serif',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#E8F4F8',
                      marginBottom: '4px',
                    }}>
                      {featured.title}
                    </h3>
                    <p style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '12px',
                      color: '#FF9D00',
                      marginBottom: '14px',
                    }}>
                      {featured.subtitle}
                    </p>
                    <p style={{
                      fontFamily: 'DM Mono, monospace',
                      fontSize: '13px',
                      color: '#4A7A94',
                      lineHeight: 1.7,
                    }}>
                      {featured.description}
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                      {featured.mechanisms.map((m) => (
                        <span
                          key={m}
                          style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '10px',
                            color: '#FF9D00',
                            background: 'rgba(255,157,0,0.1)',
                            border: '1px solid rgba(255,157,0,0.3)',
                            padding: '4px 10px',
                            borderRadius: '4px',
                          }}
                        >
                          [{m}]
                        </span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '10px',
                            color: '#E8F4F8',
                            background: 'rgba(255,255,255,0.06)',
                            padding: '4px 12px',
                            borderRadius: '999px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          )}

          {/* Other project cards */}
          {others.map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
