import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: '#0A0A0A', padding: '100px 5%', minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="w-full max-w-[1000px] mx-auto">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}
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
            CONTACT
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '16px'
          }}>
            Feel <span style={{ color: '#FFB400' }}>free</span> to contact me!
          </p>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            color: '#AAAAAA',
            lineHeight: 1.8,
            marginBottom: '60px',
            maxWidth: '600px'
          }}>
            Open to internships, collaborations, and full-time roles in design and robotics engineering. Let's connect and build something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 w-full bg-[#111111] p-8 border border-[#222] rounded-lg"
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #333',
                  padding: '16px',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none',
                  borderRadius: '4px'
                }}
                className="focus:border-[#FFB400] transition-colors"
              />
              <input 
                type="email" 
                placeholder="YOUR E-MAIL" 
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #333',
                  padding: '16px',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none',
                  borderRadius: '4px'
                }}
                className="focus:border-[#FFB400] transition-colors"
              />
              <textarea 
                placeholder="YOUR MESSAGE" 
                rows="4"
                style={{
                  background: '#0A0A0A',
                  border: '1px solid #333',
                  padding: '16px',
                  color: '#FFF',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '12px',
                  fontWeight: 600,
                  outline: 'none',
                  resize: 'none',
                  borderRadius: '4px'
                }}
                className="focus:border-[#FFB400] transition-colors"
              />
              
              <button 
                type="button"
                style={{
                  background: '#FFB400',
                  border: 'none',
                  color: '#000000',
                  padding: '16px 32px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  borderRadius: '30px',
                  transition: 'transform 0.3s'
                }}
                className="hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#111111',
                border: '2px solid #FFB400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB400',
                marginBottom: '16px'
              }}>
                <MapPin size={24} />
              </div>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Location</h4>
              <a 
                href="https://maps.google.com/?q=Mumbai, Maharashtra, India" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '13px', 
                  color: '#AAAAAA', 
                  textDecoration: 'none',
                  transition: 'color 0.3s' 
                }}
                className="hover:text-[#FFB400]"
              >
                Mumbai, Maharashtra, India
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#111111',
                border: '2px solid #FFB400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB400',
                marginBottom: '16px'
              }}>
                <Phone size={24} />
              </div>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Phone</h4>
              <a 
                href="tel:+917020690901" 
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '13px', 
                  color: '#AAAAAA', 
                  textDecoration: 'none',
                  transition: 'color 0.3s' 
                }}
                className="hover:text-[#FFB400]"
              >
                +91 7020690901
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gridColumn: '1 / -1' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#111111',
                border: '2px solid #FFB400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB400',
                marginBottom: '16px'
              }}>
                <Mail size={24} />
              </div>
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>Email</h4>
              <a 
                href="mailto:shreyaade2003@gmail.com" 
                style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '13px', 
                  color: '#AAAAAA', 
                  textDecoration: 'none',
                  transition: 'color 0.3s' 
                }}
                className="hover:text-[#FFB400]"
              >
                shreyaade2003@gmail.com
              </a>
            </motion.div>

          </div>
        </div>
        
        {/* Footer Thanks */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: '80px', textAlign: 'center', borderTop: '1px solid #222', paddingTop: '40px' }}
        >
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '32px',
            color: '#FFFFFF',
            letterSpacing: '0.05em'
          }}>
            THANKS FOR <span style={{ color: '#FFB400' }}>PATIENCE!</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
