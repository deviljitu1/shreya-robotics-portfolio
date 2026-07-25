import { motion } from 'framer-motion';

export default function Resume() {
  const education = [
    {
      period: '2022 - 2026',
      title: 'BE. Robotics and Automation',
      school: 'Madras Institute of Technology, Anna University',
      desc: '7.68 CGPA | 8.41 GPA'
    },
    {
      period: '12th Grade',
      title: 'Higher Secondary',
      school: "People's Junior College",
      desc: '97.67%'
    },
    {
      period: '10th Grade',
      title: 'Secondary',
      school: 'Rani Laxmi Bai Vidyalaya',
      desc: '90.60%'
    }
  ];

  const experience = [
    {
      period: 'Jun 2026 - Present',
      title: 'Junior Design and Project Engineer',
      company: 'Tesseract',
      desc: 'Contributing to end-to-end product development across design and manufacturing. Involved in 3D modeling and assembly design (Fusion 360), 3D scanning, reverse engineering, 3D printing, and engineering drawings.'
    },
    {
      period: '1 June - 30 June',
      title: 'Mechanical Intern',
      company: 'Indroyd Labs Pune',
      desc: 'Research and design of DNA Kinetics (rotating screen), Rotoscope (horizontal screen movement) and on Matrix wall using Solidworks CAD Software.'
    },
    {
      period: 'Jul 2022 - Jun 2024',
      title: 'Volunteer',
      company: 'National Service Scheme',
      desc: 'Dedicated 2 years to volunteering, contributing to social and community services.'
    }
  ];

  const renderTimeline = (title, items) => (
    <div className="flex-1">
      <motion.h4 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          display: 'inline-block',
          backgroundColor: '#FFB400',
          color: '#000000',
          padding: '6px 20px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          fontWeight: 800,
          borderRadius: '20px',
          marginBottom: '32px'
        }}
      >
        {title}
      </motion.h4>
      <div style={{ position: 'relative', paddingLeft: '30px' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '7px',
          top: '0',
          bottom: '0',
          width: '2px',
          backgroundColor: '#333'
        }} />
        
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            style={{ position: 'relative', marginBottom: '40px' }}
          >
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-31px',
              top: '5px',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#FFB400',
              border: '4px solid #0A0A0A'
            }} />
            
            <div style={{
              display: 'inline-block',
              backgroundColor: '#111111',
              color: '#AAAAAA',
              padding: '4px 12px',
              borderRadius: '20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              marginBottom: '12px'
            }}>
              {item.period}
            </div>
            
            <h5 style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
              {item.title}
            </h5>
            <h6 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 500, color: '#FFB400', marginBottom: '12px' }}>
              {item.school || item.company}
            </h6>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#888888', lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
  return (
    <section id="resume" style={{ backgroundColor: '#000000', padding: '100px 5%', minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="w-full max-w-[1000px] mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}
        >
          <div style={{ width: '40px', height: '2px', backgroundColor: '#555', marginRight: '16px', position: 'relative' }}>
            <div style={{ position: 'absolute', right: '-4px', top: '-3px', width: '8px', height: '8px', borderTop: '2px solid #555', borderRight: '2px solid #555', transform: 'rotate(45deg)' }}></div>
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '56px',
            color: '#FFFFFF',
            letterSpacing: '0.05em',
            margin: 0,
            lineHeight: 1
          }}>
            RESUME
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {renderTimeline('EDUCATION', education)}
          {renderTimeline('EXPERIENCE', experience)}
        </div>

        {/* Skills Section (Using dark shiny blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h4 style={{
              display: 'inline-block',
              backgroundColor: '#FFB400',
              color: '#000000',
              padding: '6px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              borderRadius: '20px',
              marginBottom: '24px'
            }}>
              TECHNICAL SKILLS
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                'SOLIDWORKS (ASSEMBLY, ANALYSIS & SIMULATION)', 
                'PLC', 
                'CATIA ( PART DESIGN )', 
                'PYTHON (PROBLEM SOLVING)', 
                'Embedded Systems & IoT - Raspberry Pi, ESP32, Arduino, Blynk, Sensor Integration',
                'FUSION 360 (3D MODELING & ASSEMBLY DESIGN)',
                '3D SCANNING & REVERSE ENGINEERING',
                '3D PRINTING',
                'ENGINEERING DRAWINGS'
              ].map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, borderColor: '#FFB400', color: '#FFB400' }}
                  key={skill} 
                  style={{
                    backgroundColor: '#111111',
                    border: '1px solid #333',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    cursor: 'default',
                    transition: 'border-color 0.3s, color 0.3s'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
            <h4 style={{
              display: 'inline-block',
              backgroundColor: '#FFB400',
              color: '#000000',
              padding: '6px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              borderRadius: '20px',
              marginTop: '32px',
              marginBottom: '24px'
            }}>
              ADDITIONAL SKILLS
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                'PRESENTATION DESIGN (POWERPOINT, CANVA)', 
                'MS WORD', 
                'VIDEO EDITING (CLIPCHAMP)'
              ].map(skill => (
                <motion.span 
                  whileHover={{ scale: 1.05, borderColor: '#FFB400', color: '#FFB400' }}
                  key={skill} 
                  style={{
                    backgroundColor: '#111111',
                    border: '1px solid #333',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    cursor: 'default',
                    transition: 'border-color 0.3s, color 0.3s'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 style={{
              display: 'inline-block',
              backgroundColor: '#FFB400',
              color: '#000000',
              padding: '6px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              borderRadius: '20px',
              marginBottom: '24px'
            }}>
              LANGUAGES
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '32px' }}>
              {[
                'ENGLISH (fluent)', 
                'HINDI (fluent)', 
                'MARATHI (fluent)', 
                'TAMIL (intermediate)'
              ].map(lang => (
                <motion.span 
                  whileHover={{ scale: 1.05, borderColor: '#FFB400', color: '#FFB400' }}
                  key={lang} 
                  style={{
                    backgroundColor: '#111111',
                    border: '1px solid #333',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    cursor: 'default',
                    transition: 'border-color 0.3s, color 0.3s'
                  }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>

            <h4 style={{
              display: 'inline-block',
              backgroundColor: '#FFB400',
              color: '#000000',
              padding: '6px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              borderRadius: '20px',
              marginBottom: '24px'
            }}>
              CERTIFICATES & ACHIEVEMENTS
            </h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Winner – TNWISE Hackathon 2025 (Adaptive Wheelchair)',
                'Shortlisted – SIH Internal Hackathon 2024 (Water Cleaning Bot)',
                'NSS Best Volunteer Award 2023',
                '2nd Place – Campaigning Contest (College Club)',
                'Conference Presentation - National Conference on AI, IoT & Data-Driven (NCAIDT)',
                'Industrial Automation with PLC - Techgyan (Feb 2025)',
                'MS-CIT (Microsoft Office) - MSBTE (Sep 2017)'
              ].map((achievement, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: '14px', 
                    color: '#AAAAAA', 
                    lineHeight: 1.6,
                    paddingLeft: '24px',
                    position: 'relative'
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, top: '6px', color: '#FFB400' }}>▹</span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
