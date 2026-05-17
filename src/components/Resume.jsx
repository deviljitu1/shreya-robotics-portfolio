import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" style={{ backgroundColor: '#1E1F22', padding: '120px 0', borderTop: '1px solid #2A2A2C' }}>
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1200px' }}>
        
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '0.1em',
          marginBottom: '60px',
          textTransform: 'uppercase'
        }}>
          RESUME
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
        }}>
          
          {/* Column 1: Experience & Education */}
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
              EXPERIENCE
            </h3>
            <div style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#FFFFFF' }}>Indroyd Labs Pune</h4>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>1 June - 30 June</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#A0A0A0', letterSpacing: '0.05em', marginBottom: '12px' }}>MECHANICAL INTERN</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#888888', lineHeight: 1.6 }}>
                Research and design of DNA Kinetics (rotating screen), Rotoscope (horizontal screen movement) 
                and on Matrix wall using Solidworks CAD Software.
              </p>
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
              EDUCATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>Madras Institute of Technology, Anna University</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>2022 - 2026 | BE. Robotics and Automation | 7.68 CGPA (8.41 GPA)</p>
              </div>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>People's Junior College</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>12th Grade | 97.67%</p>
              </div>
              <div>
                <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>Rani Laxmi Bai Vidyalaya</h4>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#888888' }}>10th Grade | 90.60%</p>
              </div>
            </div>
          </div>

          {/* Column 2: Skills & Achievements */}
          <div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
              TECHNICAL SKILLS
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '60px' }}>
              {['SOLIDWORKS', 'PLC', 'CATIA', 'PYTHON', 'RASPBERRY PI', 'ESP32', 'ARDUINO', 'BLYNK', 'SENSOR INTEGRATION', 'IoT', 'EMBEDDED SYSTEMS'].map(skill => (
                <span key={skill} style={{
                  padding: '8px 16px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  color: '#A0A0A0',
                  letterSpacing: '0.05em'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
              ADDITIONAL SKILLS
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '60px' }}>
              {['PRESENTATION DESIGN', 'CANVA', 'MS WORD', 'VIDEO EDITING (CLIPCHAMP)'].map(skill => (
                <span key={skill} style={{
                  padding: '8px 16px',
                  border: '1px solid #333',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  color: '#A0A0A0',
                  letterSpacing: '0.05em'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '12px' }}>
              ACHIEVEMENTS
            </h3>
            <ul style={{ 
              listStyleType: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px' 
            }}>
              {[
                'Winner – TNWISE Hackathon 2025 (Adaptive Wheelchair)',
                'Shortlisted – SIH Internal Hackathon 2024 (Water Cleaning Bot)',
                'NSS Best Volunteer Award 2023',
                '2nd Place – Campaigning Contest (College Club)',
                'Conference Presentation - NCAIDT'
              ].map((achievement, i) => (
                <li key={i} style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '13px', 
                  color: '#888888', 
                  lineHeight: 1.6,
                  paddingLeft: '20px',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0, top: '8px', width: '6px', height: '1px', background: '#FFFFFF' }} />
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
