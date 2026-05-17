import { Cpu, Monitor, PenTool } from 'lucide-react';

export default function About() {
  const whatIDo = [
    { title: 'ROBOTICS', desc: 'Designing and building functional prototypes including staircase climbers and autonomous weldment robots.', icon: Cpu },
    { title: 'CAD DESIGN', desc: 'Expertise in SolidWorks and CATIA for assembly, analysis, and simulation of mechanical parts.', icon: PenTool },
    { title: 'IoT & EMBEDDED', desc: 'Integrating sensors with Raspberry Pi, ESP32, and Arduino for smart automation systems.', icon: Monitor },
  ];

  const funFacts = [
    { count: '4+', label: 'YEARS STUDY' },
    { count: '10+', label: 'PROJECTS DONE' },
    { count: '15+', label: 'TECH SKILLS' },
    { count: '3+', label: 'AWARDS WON' }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#0A0A0A', padding: '80px 5%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="w-full max-w-[1000px]">
        
        {/* Section Title */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
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
            ABOUT ME
          </h2>
        </div>

        {/* Bio */}
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '20px',
          fontWeight: 600,
          color: '#FFFFFF',
          marginBottom: '16px'
        }}>
          I'm <span style={{ color: '#FFB400' }}>Shreya Ade</span>, Robotics & Automation Engineer
        </h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '14px',
          color: '#AAAAAA',
          lineHeight: 1.8,
          marginBottom: '48px',
          maxWidth: '800px'
        }}>
          I am a Robotics and Automation Engineering student with practical experience in CAD design, IoT,
          and robotics. I adapt easily to new environments and have a keen interest in research and
          problem-solving. I am dedicated to applying my full effort toward developing innovative and
          efficient smart systems.
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          
          {/* What I Do */}
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
              What I Do!
            </h4>
            
            <div className="flex flex-col gap-6">
              {whatIDo.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    border: '2px solid #FFB400',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: '#FFB400'
                  }}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h5 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>{item.title}</h5>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#888888', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
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
              Fun Facts
            </h4>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              justifyItems: 'center'
            }}>
              {funFacts.map((fact, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#111111',
                  borderRadius: '50%',
                  width: '130px',
                  height: '130px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #222',
                  transition: 'border-color 0.3s'
                }} className="hover:border-[#FFB400]">
                  <span style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '32px',
                    color: '#FFFFFF',
                    lineHeight: 1,
                    marginBottom: '4px'
                  }}>{fact.count}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#FFB400',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    padding: '0 8px'
                  }}>{fact.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
