export default function Resume() {
  const education = [
    {
      period: '2022 - 2026',
      title: 'BE. Robotics and Automation',
      school: 'Madras Institute of Technology',
      desc: '7.68 CGPA (8.41 GPA)'
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
      period: '1 June - 30 June',
      title: 'Mechanical Intern',
      company: 'Indroyd Labs Pune',
      desc: 'Research and design of DNA Kinetics, Rotoscope, and Matrix wall using Solidworks CAD Software.'
    }
  ];

  const renderTimeline = (title, items) => (
    <div className="flex-1">
      <h4 style={{
        display: 'inline-block',
        backgroundColor: '#FFB400',
        color: '#000000',
        padding: '6px 20px',
        fontFamily: "'Inter', sans-serif",
        fontSize: '14px',
        fontWeight: 800,
        borderRadius: '20px',
        marginBottom: '32px'
      }}>
        {title}
      </h4>
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
          <div key={idx} style={{ position: 'relative', marginBottom: '40px' }}>
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
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="resume" style={{ backgroundColor: '#000000', padding: '80px 5%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="w-full max-w-[1000px]">
        
        {/* Section Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
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
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {renderTimeline('EDUCATION', education)}
          {renderTimeline('EXPERIENCE', experience)}
        </div>

        {/* Skills Section (Using dark shiny blocks) */}
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h4 style={{
              display: 'inline-block',
              backgroundColor: '#FFB400',
              color: '#000000',
              padding: '6px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              borderRadius: '20px',
              marginBottom: '32px'
            }}>
              TECHNICAL SKILLS
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['SOLIDWORKS', 'PLC', 'CATIA', 'PYTHON', 'RASPBERRY PI', 'ESP32', 'ARDUINO', 'BLYNK', 'SENSOR INTEGRATION', 'IoT'].map(skill => (
                <span key={skill} style={{
                  backgroundColor: '#111111',
                  border: '1px solid #333',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  color: '#FFFFFF',
                  fontWeight: 500
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h4 style={{
              display: 'inline-block',
              backgroundColor: '#FFB400',
              color: '#000000',
              padding: '6px 20px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              borderRadius: '20px',
              marginBottom: '32px'
            }}>
              ACHIEVEMENTS
            </h4>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Winner – TNWISE Hackathon 2025 (Adaptive Wheelchair)',
                'Shortlisted – SIH Internal Hackathon 2024 (Water Cleaning Bot)',
                'NSS Best Volunteer Award 2023',
                'Conference Presentation - NCAIDT'
              ].map((achievement, i) => (
                <li key={i} style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '14px', 
                  color: '#AAAAAA', 
                  lineHeight: 1.6,
                  paddingLeft: '24px',
                  position: 'relative'
                }}>
                  <span style={{ position: 'absolute', left: 0, top: '6px', color: '#FFB400' }}>▹</span>
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
