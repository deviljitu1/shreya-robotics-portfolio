import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Play } from 'lucide-react';

// Import new assets
import act1 from '../assets/Portfolio Design/Actuation/IMG-20250617-WA0069.jpg';
import act2 from '../assets/Portfolio Design/Actuation/IMG-20260510-WA0008.jpg';
import actVid from '../assets/Portfolio Design/Actuation/VID-20260510-WA0007.mp4';

import adapt1 from '../assets/Portfolio Design/Adaptive wheel chair/IMG-20260510-WA0000.jpg';
import adapt2 from '../assets/Portfolio Design/Adaptive wheel chair/IMG-20260510-WA0002.jpg';

import cycle1 from '../assets/Portfolio Design/Cycle/IMG-20260510-WA0012.jpg';
import cycle2 from '../assets/Portfolio Design/Cycle/IMG-20260510-WA0013(1).jpg';
import cycle3 from '../assets/Portfolio Design/Cycle/IMG-20260510-WA0014(1).jpg';
import cycle4 from '../assets/Portfolio Design/Cycle/IMG-20260510-WA0015(1).jpg';
import cycleVid from '../assets/Portfolio Design/Cycle/VID-20260510-WA0016.mp4';

import rc1 from '../assets/Portfolio Design/RC car arena/IMG-20250627-WA0007(1).jpg';

const galleryItems = [
  {
    id: 1,
    title: 'ADAPTIVE WHEEL CHAIR',
    category: 'CAD DESIGN',
    description: 'TNWISE Hackathon 2025. Designed an adaptive wheelchair with interchangeable seats and additional support features to assist differently-abled users. Focused on ergonomic design and sensor-based movement assistance.',
    images: [adapt1, adapt2]
  },
  {
    id: 2,
    title: 'CYCLE DESIGN & MODELING',
    category: 'CAD DESIGN',
    description: '3D modeling and structural design of a modern bicycle. Showcases detailed front, back, and side profiles along with mechanical integration.',
    images: [cycle1, cycle2, cycle3, cycle4, cycleVid]
  },
  {
    id: 3,
    title: 'ACTUATION MECHANISMS',
    category: 'ROBOTICS',
    description: 'Design and analysis of actuation systems including detailed prototype testing and mechanical movements. Research and design involving rotating screens and horizontal screen movement.',
    images: [act1, act2, actVid]
  },
  {
    id: 4,
    title: 'RC CAR ARENA',
    category: 'CAD DESIGN',
    description: 'Arena track design for RC car testing and racing, focusing on track dynamics, physical constraints, and robust pathway modeling.',
    images: [rc1]
  },
  {
    id: 5,
    title: 'STAIRCASE CLIMBING ROBOT',
    category: 'ROBOTICS',
    description: 'Built functional prototype and design of staircase climbing robot using lead screw & rack-and-pinion for smooth vertical/horizontal transitions.',
    images: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 6,
    title: 'AUTONOMOUS ROBOT FOR POST FLAT SURFACING',
    category: 'ROBOTICS',
    description: 'Designed and developed a robotic system with a burnishing roller for weld surface finishing. Focused on counterclockwise motion cancellation of force and reduction of vibration.',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 7,
    title: 'CNN-BASED LEAF IMAGE ANALYSIS',
    category: 'IoT',
    description: 'Presented a CNN model for plant disease detection using MobilenetV2 pretrained data at the National Conference on AI, IoT & Data-Driven Transformation (NCAIDT 2025).',
    images: [
      'https://images.unsplash.com/photo-1530836369250-ef71a3f5e48d?auto=format&fit=crop&q=80&w=1200'
    ]
  },
  {
    id: 8,
    title: 'IoT SOIL MOISTURE SYSTEM',
    category: 'IoT',
    description: 'ESP32 + Blynk-based irrigation automation with real-time monitoring. Implementation of various sensor using Raspberry Pi 4 (Microprocessor) & Arduino Uno (Microcontroller).',
    images: [
      'https://images.unsplash.com/photo-1592484022853-432a52ce4c7a?auto=format&fit=crop&q=80&w=1200'
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

  const isVideo = (url) => {
    return url && url.endsWith('.mp4');
  };

  return (
    <section id="gallery" style={{ backgroundColor: '#0A0A0A', padding: '80px 5%', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="w-full max-w-[1000px] mx-auto">
        
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
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
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
                className="group hover:border-[#FFB400] transition-colors duration-300 flex flex-col"
              >
                <div style={{ width: '100%', paddingTop: '70%', position: 'relative', overflow: 'hidden' }}>
                  {isVideo(item.images[0]) ? (
                    <video 
                      src={item.images[0]}
                      muted
                      loop
                      playsInline
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
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
                  )}
                  {/* Overlay */}
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
                  {/* Badge if multiple images/videos exist */}
                  {item.images.length > 1 && (
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.7)',
                      color: '#FFB400',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      fontWeight: 700
                    }}>
                      {item.images.length} Variants
                    </div>
                  )}
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: '#FFB400', marginBottom: '12px' }}>
                    {item.category}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#888888', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* E-commerce Style Lightbox Modal */}
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
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                background: 'rgba(17,17,17,0.8)',
                border: '1px solid #333',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer',
                zIndex: 100000
              }}
              className="hover:text-[#FFB400] transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[1100px] bg-[#111111] rounded-xl overflow-hidden flex flex-col md:flex-row border border-[#333] shadow-2xl relative my-8"
              style={{ maxHeight: '90vh' }}
            >
              {/* Left Column - Image Viewer */}
              <div className="w-full md:w-[60%] flex flex-col bg-[#0A0A0A]">
                
                {/* Main Active Image / Video */}
                <div className="relative w-full flex-1 flex items-center justify-center p-4 min-h-[300px] md:min-h-[500px]">
                  {isVideo(selectedProject.images[currentImageIndex]) ? (
                    <video
                      key={`main-vid-${currentImageIndex}`}
                      src={selectedProject.images[currentImageIndex]}
                      controls
                      autoPlay
                      loop
                      style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    />
                  ) : (
                    <img
                      key={`main-img-${currentImageIndex}`}
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} view ${currentImageIndex + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    />
                  )}
                </div>

                {/* Thumbnail Variants Strip */}
                {selectedProject.images.length > 1 && (
                  <div className="w-full p-4 border-t border-[#222] bg-[#111111] flex gap-3 overflow-x-auto items-center justify-center sm:justify-start scrollbar-hide">
                    {selectedProject.images.map((mediaUrl, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        style={{
                          width: '80px',
                          height: '80px',
                          flexShrink: 0,
                          borderRadius: '8px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: currentImageIndex === idx ? '2px solid #FFB400' : '2px solid transparent',
                          opacity: currentImageIndex === idx ? 1 : 0.6,
                          position: 'relative',
                          transition: 'all 0.3s'
                        }}
                        className="hover:opacity-100 bg-[#000]"
                      >
                        {isVideo(mediaUrl) ? (
                          <>
                            <video src={mediaUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <Play size={24} color="#FFF" />
                            </div>
                          </>
                        ) : (
                          <img src={mediaUrl} alt={`Thumb ${idx}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column - Project Details */}
              <div className="w-full md:w-[40%] p-8 flex flex-col border-t md:border-t-0 md:border-l border-[#333] overflow-y-auto">
                <span style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '12px', 
                  fontWeight: 800, 
                  letterSpacing: '0.1em',
                  color: '#FFB400',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                  display: 'inline-block'
                }}>
                  {selectedProject.category}
                </span>
                
                <h2 style={{ 
                  fontFamily: "'Bebas Neue', sans-serif", 
                  fontSize: '40px', 
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '24px',
                  letterSpacing: '0.02em'
                }}>
                  {selectedProject.title}
                </h2>

                <div style={{
                  width: '40px',
                  height: '3px',
                  backgroundColor: '#FFB400',
                  marginBottom: '32px'
                }} />

                <h3 style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  color: '#FFFFFF',
                  marginBottom: '16px'
                }}>
                  Project Overview
                </h3>
                
                <p style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '15px', 
                  color: '#AAAAAA',
                  lineHeight: 1.8,
                  marginBottom: '40px'
                }}>
                  {selectedProject.description}
                </p>

                <div className="mt-auto pt-8 border-t border-[#222]">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#666' }}>
                    Variant {currentImageIndex + 1} of {selectedProject.images.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
