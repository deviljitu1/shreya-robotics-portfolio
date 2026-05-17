import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import SectionWrapper, { childVariants } from './SectionWrapper';

const galleryItems = [
  {
    id: 1,
    title: 'STAIRCASE CLIMBING ROBOT',
    description: 'Built functional prototype and design of staircase climbing robot using lead screw & rack-and-pinion for smooth vertical/horizontal transitions.',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 2,
    title: 'AUTONOMOUS WELDMENT ROBOT',
    description: 'Designed and developed a robotic system with a burnishing roller for weld surface finishing in shipbuilding/repairing. Focused on counterclockwise motion cancellation of force and reduction of vibration.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1565439390118-cbf165c90d54?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 3,
    title: 'ADAPTIVE WHEELCHAIR',
    description: 'TNWISE Hackathon 2025 Winner. Designed an adaptive wheelchair with interchangeable seats and additional support features to assist differently-abled users. Focused on ergonomic design and sensor-based movement assistance.',
    images: [
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 4,
    title: 'CNN LEAF IMAGE ANALYSIS',
    description: 'Presented a CNN model for plant disease detection using MobilenetV2 pretrained data at the National Conference on AI, IoT & Data-Driven Transformation (NCAIDT 2025).',
    images: [
      'https://images.unsplash.com/photo-1530836369250-ef71a3f5e48d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 5,
    title: 'IoT SOIL MOISTURE SYSTEM',
    description: 'ESP32 + Blynk-based irrigation automation with real-time monitoring. Implementation of various sensors using Raspberry Pi 4 (Microprocessor) & Arduino Uno (Microcontroller).',
    images: [
      'https://images.unsplash.com/photo-1592484022853-432a52ce4c7a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export default function Gallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section id="gallery" style={{ backgroundColor: '#1E1F22', padding: '120px 0' }}>
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1200px' }}>
        
        {galleryItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            {/* Images Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                width: '100%',
                marginBottom: '40px'
              }}
            >
              {item.images.slice(0, 3).map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  onClick={() => openModal(item)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '100%',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    background: '#000'
                  }}
                  className="group"
                >
                  <img
                    src={img}
                    alt={`${item.title} ${idx + 1}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.8,
                      transition: 'opacity 0.3s, transform 0.5s'
                    }}
                    className="group-hover:opacity-100 group-hover:scale-105"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.4)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }} className="group-hover:opacity-100">
                    <Maximize2 color="#FFFFFF" size={24} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Title & Desc */}
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '0.05em',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}>
              {item.title}
            </h2>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px',
              color: '#A0A0A0',
              maxWidth: '600px',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              {item.description}
            </p>

            <button style={{
              background: 'transparent',
              border: '1px solid #333',
              color: '#FFFFFF',
              padding: '16px 40px',
              fontFamily: "'Inter', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'background 0.3s, border-color 0.3s'
            }}
            className="hover:bg-white hover:text-black hover:border-white"
            >
              VIEW PROJECT
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 16, 18, 0.98)',
              zIndex: 99999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '40px',
                right: '40px',
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={32} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1200px',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {selectedProject.images.length > 1 && (
                <button
                  onClick={prevImage}
                  style={{
                    position: 'absolute',
                    left: '20px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                  className="hover:opacity-60 transition-opacity"
                >
                  <ChevronLeft size={48} strokeWidth={1} />
                </button>
              )}

              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} variant ${currentImageIndex + 1}`}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain'
                }}
              />

              {selectedProject.images.length > 1 && (
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    color: '#FFFFFF',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                  className="hover:opacity-60 transition-opacity"
                >
                  <ChevronRight size={48} strokeWidth={1} />
                </button>
              )}
            </div>
            
            <div style={{ marginTop: '30px', color: '#A0A0A0', fontFamily: "'Inter', sans-serif", fontSize: '12px', letterSpacing: '0.2em' }}>
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
