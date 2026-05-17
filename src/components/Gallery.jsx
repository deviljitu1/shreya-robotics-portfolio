import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'STAIRCASE CLIMBING ROBOT',
    category: 'ROBOTICS',
    description: 'Built functional prototype and design of staircase climbing robot using lead screw & rack-and-pinion for smooth vertical/horizontal transitions.',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 2,
    title: 'AUTONOMOUS ROBOT FOR POST FLAT SURFACING OF WELDMENTS',
    category: 'ROBOTICS',
    description: 'Designed and developed a robotic system with a burnishing roller for weld surface finishing. Focused on counterclockwise motion cancellation of force and reduction of vibration.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 3,
    title: 'ADAPTIVE WHEEL CHAIR',
    category: 'CAD DESIGN',
    description: 'TNWISE Hackathon 2025. Designed an adaptive wheelchair with interchangeable seats and additional support features to assist differently-abled users. Focused on ergonomic design and sensor-based movement assistance.',
    images: [
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 4,
    title: 'CNN-BASED LEAF IMAGE ANALYSIS',
    category: 'IoT',
    description: 'Presented a CNN model for plant disease detection using MobilenetV2 pretrained data at the National Conference on AI, IoT & Data-Driven Transformation (NCAIDT 2025).',
    images: [
      'https://images.unsplash.com/photo-1530836369250-ef71a3f5e48d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 5,
    title: 'IoT SOIL MOISTURE SYSTEM',
    category: 'IoT',
    description: 'ESP32 + Blynk-based irrigation automation with real-time monitoring. Implementation of various sensor using Raspberry Pi 4 (Microprocessor) & Arduino Uno (Microcontroller).',
    images: [
      'https://images.unsplash.com/photo-1592484022853-432a52ce4c7a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1592659762303-90081d34b277?auto=format&fit=crop&q=80&w=1200'
    ]
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['ALL', 'ROBOTICS', 'CAD DESIGN', 'IoT'];

  const filteredItems = filter === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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
    <section id="gallery" style={{ backgroundColor: '#0A0A0A', padding: '80px 5%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
            PORTFOLIO
          </h2>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? '#FFB400' : 'transparent',
                color: filter === cat ? '#000000' : '#AAAAAA',
                border: filter === cat ? '1px solid #FFB400' : '1px solid #333',
                padding: '8px 24px',
                borderRadius: '20px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              className={filter !== cat ? 'hover:border-[#FFB400] hover:text-[#FFB400]' : ''}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}
        >
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => openModal(item)}
                style={{
                  position: 'relative',
                  backgroundColor: '#111111',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid #222'
                }}
                className="group hover:border-[#FFB400] transition-colors duration-300"
              >
                <div style={{ width: '100%', paddingTop: '70%', position: 'relative', overflow: 'hidden' }}>
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
                      transition: 'transform 0.5s'
                    }}
                    className="group-hover:scale-110"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s'
                  }} className="group-hover:opacity-100">
                    <Maximize2 color="#FFB400" size={32} />
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#888888' }}>
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
              background: 'rgba(0, 0, 0, 0.95)',
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
                color: '#FFB400',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={40} />
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
                    background: 'rgba(17,17,17,0.5)',
                    border: '1px solid #333',
                    borderRadius: '50%',
                    padding: '12px',
                    color: '#FFB400',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                  className="hover:bg-[#FFB400] hover:text-[#000000] transition-colors"
                >
                  <ChevronLeft size={32} />
                </button>
              )}

              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} variant ${currentImageIndex + 1}`}
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  border: '1px solid #333'
                }}
              />

              {selectedProject.images.length > 1 && (
                <button
                  onClick={nextImage}
                  style={{
                    position: 'absolute',
                    right: '20px',
                    background: 'rgba(17,17,17,0.5)',
                    border: '1px solid #333',
                    borderRadius: '50%',
                    padding: '12px',
                    color: '#FFB400',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                  className="hover:bg-[#FFB400] hover:text-[#000000] transition-colors"
                >
                  <ChevronRight size={32} />
                </button>
              )}
            </div>
            
            <div style={{ marginTop: '20px', color: '#FFFFFF', fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 600 }}>
              {selectedProject.title}
            </div>
            <div style={{ marginTop: '8px', color: '#888888', fontFamily: "'Inter', sans-serif", fontSize: '13px' }}>
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
