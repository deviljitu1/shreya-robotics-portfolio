import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import SectionWrapper, { childVariants } from './SectionWrapper';

const galleryItems = [
  {
    id: 1,
    title: 'Industrial Automation Dashboard',
    category: 'UI/UX Design',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 2,
    title: 'Robotics Control Interface',
    category: 'System Design',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 3,
    title: 'Smart Factory Concept',
    category: 'Web Design',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1565439390118-cbf165c90d54?auto=format&fit=crop&q=80&w=1200'
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
    <SectionWrapper id="gallery">
      <div className="mx-auto px-6 md:px-12 lg:px-20" style={{ maxWidth: '1400px', paddingTop: 'clamp(60px, 10vh, 100px)', paddingBottom: '80px' }}>
        <motion.div variants={childVariants}>
          <p className="section-label">// 03 DESIGN SHOWCASE</p>
          <h2 className="section-title" style={{ marginTop: '8px' }}>GALLERY</h2>
          <div className="section-line" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'start'
        }}>
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={childVariants}
              whileHover={{ y: -8 }}
              onClick={() => openModal(item)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#2C2D30',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
              className="group"
            >
              <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  className="group-hover:scale-105"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.5)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }} className="group-hover:opacity-100">
                  <Maximize2 color="#FFFFFF" size={32} />
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <h3 style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontSize: '18px', fontWeight: 600, color: '#FFFFFF' }}>{item.title}</h3>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#999999', marginTop: '4px' }}>{item.category}</p>
                {item.images.length > 1 && (
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#666666', marginTop: '8px' }}>
                    {item.images.length} Variants
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
              background: 'rgba(26, 27, 31, 0.95)',
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
                top: '30px',
                right: '40px',
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={36} />
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
                    left: '0',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '16px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                >
                  <ChevronLeft size={32} />
                </button>
              )}

              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} variant ${currentImageIndex + 1}`}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                  borderRadius: '4px'
                }}
              />

              {selectedProject.images.length > 1 && (
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '0',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    color: '#FFFFFF',
                    padding: '16px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                >
                  <ChevronRight size={32} />
                </button>
              )}
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center', color: '#FFFFFF' }}>
              <h3 style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", fontSize: '20px', fontWeight: 600 }}>{selectedProject.title}</h3>
              {selectedProject.images.length > 1 && (
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '14px', color: '#999999', marginTop: '8px' }}>
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
