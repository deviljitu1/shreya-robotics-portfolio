import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Settings, Cpu, MapPin, Download } from 'lucide-react';
import profileImg from '../assets/shreya-profile.jpeg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        padding: 'clamp(100px, 15vh, 160px) 5% clamp(60px, 8vh, 100px) 5%'
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '48px',
              color: '#FFB400',
              lineHeight: 1,
              marginBottom: '16px',
              letterSpacing: '0.05em'
            }}
          >
            HI THERE!
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(4rem, 8vw, 7rem)',
              color: '#FFFFFF',
              lineHeight: 1,
              marginBottom: '24px',
              letterSpacing: '0.05em'
            }}
          >
            I'M <span style={{ color: 'transparent', WebkitTextStroke: '2px #FFB400' }}>SHREYA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: '#FFB400',
              color: '#000000',
              padding: '8px 16px',
              display: 'inline-block',
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '32px'
            }}
          >
            ROBOTICS AND AUTOMATION ENGINEER
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '14px',
              color: '#AAAAAA',
              lineHeight: 1.8,
              maxWidth: '500px',
              marginBottom: '40px'
            }}
          >
            I am a Robotics and Automation Engineering student with practical experience in CAD design, IoT, and robotics. I adapt easily to new environments and have a keen interest in research and problem-solving. I am dedicated to applying my full effort toward developing innovative and efficient smart systems.
          </motion.p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                display: 'inline-block',
                background: '#111111',
                color: '#FFFFFF',
                border: '2px solid #FFB400',
                padding: '16px 36px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '30px',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              className="hover:bg-[#FFB400] hover:text-[#000000]"
            >
              MORE ABOUT ME
            </motion.a>

            <motion.a
              href="/assets/Shreya_Ade_Resume.pdf"
              download="Shreya_Ade_Resume.pdf"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FFB400',
                color: '#000000',
                border: '2px solid #FFB400',
                padding: '16px 36px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '30px',
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
              className="hover:bg-[#111111] hover:text-[#FFFFFF]"
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </motion.a>
          </div>
        </div>

        {/* Right Circle Image & Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 relative flex justify-center items-center"
          style={{ minHeight: '500px' }}
        >
          {/* Circular image */}
          <div style={{
            width: 'clamp(240px, 65vw, 400px)',
            height: 'clamp(240px, 65vw, 400px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #111111',
            boxShadow: '0 0 40px rgba(255, 180, 0, 0.1)',
            position: 'relative',
            zIndex: 2
          }}>
            <img 
              src={profileImg} 
              alt="Shreya Ade" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Decorative semi-circle ring */}
          <div style={{
            position: 'absolute',
            width: 'clamp(290px, 78vw, 480px)',
            height: 'clamp(290px, 78vw, 480px)',
            border: '2px solid #FFB400',
            borderRadius: '50%',
            borderLeftColor: 'transparent',
            borderBottomColor: 'transparent',
            transform: 'rotate(45deg)',
            zIndex: 1
          }}></div>

          {/* Icons on the ring */}
          <div style={{
            position: 'absolute',
            width: 'clamp(290px, 78vw, 480px)',
            height: 'clamp(290px, 78vw, 480px)',
            zIndex: 3,
            pointerEvents: 'none'
          }}>
            <div style={{ position: 'absolute', top: '10%', right: '15%', background: '#111111', padding: '12px', borderRadius: '50%', color: '#FFB400', border: '1px solid #333' }}><Settings size={20} /></div>
            <div style={{ position: 'absolute', top: '45%', right: '-5%', background: '#111111', padding: '12px', borderRadius: '50%', color: '#FFB400', border: '1px solid #333' }}><Cpu size={20} /></div>
            <div style={{ position: 'absolute', bottom: '15%', right: '10%', background: '#111111', padding: '12px', borderRadius: '50%', color: '#FFB400', border: '1px solid #333' }}><MapPin size={20} /></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
