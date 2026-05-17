import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#1E1F22', padding: '120px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="mx-auto px-6 md:px-12 lg:px-20 w-full" style={{ maxWidth: '1200px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
        }}>
          
          {/* Left Column - Info */}
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
              CONTACT
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              color: '#888888',
              lineHeight: 1.8,
              marginBottom: '48px',
              maxWidth: '400px'
            }}>
              Open to internships, collaborations, and full-time roles in design and robotics engineering. Let's connect and build something amazing together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>Address</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#888888' }}>Pune, Maharashtra, India</p>
              </div>
              
              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>Phone</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#888888' }}>+91 91584 76249</p>
              </div>

              <div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>E-mail</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#888888' }}>adeshreya2211@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            background: '#18191B', // slightly darker box
            padding: '40px',
            borderRadius: '4px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.1em',
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}>
              CONTACT FORM
            </h2>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input 
                type="text" 
                placeholder="Your name" 
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '12px 0',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
              <input 
                type="text" 
                placeholder="Your phone" 
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '12px 0',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
              <input 
                type="email" 
                placeholder="Your e-mail" 
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '12px 0',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  outline: 'none'
                }}
              />
              <textarea 
                placeholder="Message" 
                rows="3"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #333',
                  padding: '12px 0',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  outline: 'none',
                  resize: 'none'
                }}
              />
              
              <button 
                type="button"
                style={{
                  background: '#2A2A2C',
                  border: 'none',
                  color: '#FFFFFF',
                  padding: '16px 24px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  marginTop: '16px',
                  transition: 'background 0.3s'
                }}
                className="hover:bg-white hover:text-black"
              >
                SEND MESSAGE &gt;
              </button>
            </form>
          </div>

        </div>

        {/* Footer Text directly inside Contact section to match layout */}
        <div style={{ marginTop: '120px', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '9px',
            color: '#888888',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}>
            THE END
          </p>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            THANKS FOR WATCHING!
          </h2>
        </div>
      </div>
    </section>
  );
}
