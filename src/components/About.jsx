import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#1E1F22', padding: '120px 0', borderTop: '1px solid #2A2A2C', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="mx-auto px-6 md:px-12 lg:px-20 w-full" style={{ maxWidth: '1200px' }}>
        <h2 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '24px',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '0.1em',
          marginBottom: '40px',
          textTransform: 'uppercase'
        }}>
          ABOUT ME
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
          alignItems: 'center'
        }}>
          
          {/* Text Content */}
          <div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: '#A0A0A0',
              lineHeight: 1.8,
              marginBottom: '24px'
            }}>
              I am a Robotics and Automation Engineering student with practical experience in CAD design, IoT,
              and robotics. I adapt easily to new environments and have a keen interest in research and
              problem-solving.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: '#A0A0A0',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              I am dedicated to applying my full effort toward developing innovative and
              efficient smart systems.
            </p>

            <a 
              href="/assets/Shreya_Ade_Resume.pdf" 
              download="Shreya_Ade_Resume.pdf" 
              style={{
                display: 'inline-block',
                background: 'transparent',
                border: '1px solid #333',
                color: '#FFFFFF',
                padding: '16px 40px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s, border-color 0.3s'
              }}
              className="hover:bg-white hover:text-black hover:border-white"
            >
              DOWNLOAD RESUME
            </a>
          </div>

          {/* Profile Image placeholder (styled minimally) */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '400px',
            aspectRatio: '1/1',
            background: '#18191B',
            border: '1px solid #2A2A2C',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/src/assets/shreya-profile.jpeg" 
              alt="Shreya Ade"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.8,
                filter: 'grayscale(100%)',
                transition: 'filter 0.5s ease'
              }}
              className="hover:filter-none"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
