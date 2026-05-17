import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <section id="profile" style={{ backgroundColor: '#1E1F22', padding: '120px 0', borderTop: '1px solid #2A2A2C' }}>
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1200px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
        }}>
          
          {/* Profile Overview */}
          <div>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '24px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.1em',
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}>
              PROFILE
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#A0A0A0',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              I am a Robotics and Automation Engineering student with practical experience in CAD design, IoT,
              and robotics. I adapt easily to new environments and have a keen interest in research and
              problem-solving. I am dedicated to applying my full effort toward developing innovative and
              efficient smart systems.
            </p>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>
              EXPERIENCE
            </h3>
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#FFFFFF' }}>Indroyd Labs Pune</h4>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>1 June - 30 June</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#A0A0A0', letterSpacing: '0.05em', marginBottom: '12px' }}>MECHANICAL INTERN</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#888888', lineHeight: 1.6 }}>
                Research and design of DNA Kinetics (rotating screen), Rotoscope (horizontal screen movement) 
                and on Matrix wall using Solidworks CAD Software.
              </p>
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>
              EDUCATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>Madras Institute of Technology, Anna University</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>2022 - 2026 | BE. Robotics and Automation | 7.68 CGPA (8.41 GPA)</p>
              </div>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>People's Junior College</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>12th Grade | 97.67%</p>
              </div>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '4px' }}>Rani Laxmi Bai Vidyalaya</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>10th Grade | 90.60%</p>
              </div>
            </div>
          </div>

          {/* Skills & Achievements */}
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>
              TECHNICAL SKILLS
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['SOLIDWORKS (ASSEMBLY, ANALYSIS & SIMULATION)', 'PLC', 'CATIA (PART DESIGN)', 'PYTHON', 'RASPBERRY PI', 'ESP32', 'ARDUINO', 'BLYNK', 'SENSOR INTEGRATION', 'IoT', 'EMBEDDED SYSTEMS'].map(skill => (
                <span key={skill} style={{
                  padding: '8px 12px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10px',
                  color: '#A0A0A0',
                  letterSpacing: '0.05em'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>
              ADDITIONAL SKILLS
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['PRESENTATION DESIGN (POWERPOINT, CANVA)', 'MS WORD', 'VIDEO EDITING (CLIPCHAMP)'].map(skill => (
                <span key={skill} style={{
                  padding: '8px 12px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10px',
                  color: '#A0A0A0',
                  letterSpacing: '0.05em'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>
              LANGUAGES
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '40px' }}>
              {['ENGLISH (FLUENT)', 'HINDI (FLUENT)', 'MARATHI (FLUENT)', 'TAMIL (INTERMEDIATE)'].map(skill => (
                <span key={skill} style={{
                  padding: '8px 12px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10px',
                  color: '#A0A0A0',
                  letterSpacing: '0.05em'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>
              ACHIEVEMENTS
            </h3>
            <ul style={{ 
              listStyleType: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '12px' 
            }}>
              {[
                'Winner – TNWISE Hackathon 2025 (Adaptive Wheelchair)',
                'Shortlisted – SIH Internal Hackathon 2024 (Water Cleaning Bot)',
                'NSS Best Volunteer Award 2023',
                '2nd Place – Campaigning Contest (College Club)',
                'Conference Presentation - National Conference on AI, IoT & Data-Driven (NCAIDT)'
              ].map((achievement, i) => (
                <li key={i} style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '12px', 
                  color: '#888888', 
                  lineHeight: 1.6,
                  paddingLeft: '16px',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '4px', height: '4px', background: '#FFFFFF', borderRadius: '50%' }} />
                  {achievement}
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}
