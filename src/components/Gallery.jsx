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
import cycle5 from '../assets/Portfolio Design/Cycle/Img3.jpg';
import cycle6 from '../assets/Portfolio Design/Cycle/Img4.jpg';
import cycle7 from '../assets/Portfolio Design/Cycle/Img5.jpg';
import cycleVid from '../assets/Portfolio Design/Cycle/VID-20260510-WA0016.mp4';

import rc1 from '../assets/Portfolio Design/RC car arena/IMG-20250627-WA0007(1).jpg';

const galleryItems = [
  {
    id: 1,
    title: 'ADAPTIVE WHEEL CHAIR',
    category: 'CAD DESIGN',
    description: 'TNWISE Hackathon 2025. Designed an adaptive wheelchair with interchangeable seats and additional support features to assist differently-abled users. Focused on ergonomic design and sensor-based movement assistance.',
    images: [adapt1, adapt2],
    partOverviews: [
      'Ergonomic Seating & Chassis Layout: 3D model showcasing the lightweight tubular frame, adjustable armrests, and high-support modular seat design designed for maximum comfort and posture correction.',
      'Rear Propulsion & Support Mechanisms: Focus on the large drive wheels, stabilizer caster wheels, and safety anti-tip structures, engineered for enhanced stability and multi-terrain navigation.'
    ]
  },
  {
    id: 2,
    title: 'CYCLE DESIGN & MODELING',
    category: 'CAD DESIGN',
    description: '3D modeling and structural design of a modern bicycle. Showcases detailed front, back, and side profiles along with mechanical integration.',
    images: [cycle1, cycle2, cycle3, cycle4, cycle5, cycle6, cycle7, cycleVid],
    partOverviews: [
      'Full Assembly View: SolidWorks 3D model displaying the complete bicycle frame geometry, mechanical drivetrain integration, front/rear wheel alignment, and premium aerodynamic structural profile.',
      'Drivetrain & Rear Wheel Integration: Detailed rendering of the chainstay, bottom bracket shell, crankset, chainring, and rear cassette interface, showcasing precise gear engagement and structural load paths.',
      'Frame Geometry & Tubing: Focuses on the double-diamond frame structure including the top tube, down tube, and headtube transition, engineered for optimal stiffness-to-weight ratio and mechanical stability.',
      'Steering Column & Front Fork: Displays the front fork design, headset assembly, stem, and handlebar integration, showcasing ergonomic control geometry and precise steering mechanics.',
      'Wheel Profile & Spokes Layout: Highlights the aerodynamic rim profile, hub spacing, and tensioned spoke patterns designed to withstand dynamic shear and radial forces during operation.',
      'Saddle & Seatpost Assembly: Shows the seatpost clamp, seatpost tubing, and aerodynamic saddle integration, optimized for driver ergonomics, center-of-gravity placement, and vibration damping.',
      'Braking System & Cable Routing: Detailed presentation of the caliper mounting points, brake disc rotors, and internal/external routing paths for optimized hydraulic/mechanical braking response.',
      '3D Rotational Simulation: 360-degree mechanical visualization animating the motion of the drivetrain, wheel rotation, and structural aerodynamic stability from multiple viewing angles.'
    ]
  },
  {
    id: 3,
    title: 'ACTUATION MECHANISMS',
    category: 'ROBOTICS',
    description: 'Design and analysis of actuation systems including detailed prototype testing and mechanical movements. Research and design involving rotating screens and horizontal screen movement.',
    images: [act1, act2, actVid],
    partOverviews: [
      'Dual-Axis Rotating Platform: Exploded and assembled views of gears, servo mounts, and structural linkages enabling dynamic dual-axis rotational movement of screens.',
      'Horizontal Linear Actuator: 3D design of linear guide rails, lead screw assembly, and stepping motor bracket, developed for quiet and precise screen sliding navigation.',
      'Dynamic Motion Demonstration: Animation showing the synchronization of horizontal sliding and vertical rotation, validating the structural timing and stress analysis under load.'
    ]
  },
  {
    id: 4,
    title: 'RC CAR ARENA',
    category: 'CAD DESIGN',
    description: 'Arena track design for RC car testing and racing, focusing on track dynamics, physical constraints, and robust pathway modeling.',
    images: [rc1],
    partOverviews: [
      'Arena Layout & Trajectory Optimization: High-fidelity layout model of the RC racing arena, specifying physical barrier constraints, entry-exit gates, and friction-optimized driving trajectories.'
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

  const isVideo = (url) => {
    return url && url.endsWith('.mp4');
  };

  const currentIndex = selectedProject ? galleryItems.findIndex(item => item.id === selectedProject.id) : 0;

  const handlePrevProject = (e) => {
    if (e) e.stopPropagation();
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedProject(galleryItems[prevIndex]);
    setCurrentImageIndex(0);
  };

  const handleNextProject = (e) => {
    if (e) e.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedProject(galleryItems[nextIndex]);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowLeft') {
        if (selectedProject.images.length > 1) {
          setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
      } else if (e.key === 'ArrowRight') {
        if (selectedProject.images.length > 1) {
          setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
      } else if (e.key === 'ArrowUp') {
        handlePrevProject();
      } else if (e.key === 'ArrowDown') {
        handleNextProject();
      } else if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentIndex]);
  return (
    <section id="gallery" style={{ backgroundColor: '#0A0A0A', padding: '100px 5%', minHeight: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
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
            PORTFOLIO
          </h2>
        </motion.div>
        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          <AnimatePresence>
            {galleryItems.map(item => (
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
              padding: '16px',
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
              className="hover:text-[#FFB400] hover:border-[#FFB400] transition-colors"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[1100px] bg-[#111111] rounded-xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-[#333] shadow-2xl relative my-4 md:my-8 max-h-[92vh] md:max-h-[85vh]"
            >
              {/* Left Column - Image Viewer */}
              <div className="w-full md:w-[60%] flex flex-col bg-[#0A0A0A] relative">

                {/* Main Active Image / Video */}
                <div className="relative w-full flex-1 flex items-center justify-center p-4 min-h-[260px] md:min-h-[500px]">

                  {/* Left image arrow navigation */}
                  {selectedProject.images.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
                      }}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(17,17,17,0.85)',
                        border: '1px solid #333',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                      }}
                      className="hover:text-[#FFB400] hover:border-[#FFB400] transition-all duration-300 hover:scale-105"
                      title="Previous Image"
                    >
                      <ChevronLeft size={22} />
                    </button>
                  )}

                  {isVideo(selectedProject.images[currentImageIndex]) ? (
                    <video
                      key={`main-vid-${selectedProject.id}-${currentImageIndex}`}
                      src={selectedProject.images[currentImageIndex]}
                      controls
                      autoPlay
                      loop
                      style={{ maxWidth: '100%', maxHeight: '55vh', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    />
                  ) : (
                    <img
                      key={`main-img-${selectedProject.id}-${currentImageIndex}`}
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} view ${currentImageIndex + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '55vh', borderRadius: '8px', objectFit: 'contain', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    />
                  )}

                  {/* Right image arrow navigation */}
                  {selectedProject.images.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
                      }}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(17,17,17,0.85)',
                        border: '1px solid #333',
                        borderRadius: '50%',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
                      }}
                      className="hover:text-[#FFB400] hover:border-[#FFB400] transition-all duration-300 hover:scale-105"
                      title="Next Image"
                    >
                      <ChevronRight size={22} />
                    </button>
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
                          width: '70px',
                          height: '70px',
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
                              <Play size={20} color="#FFF" />
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
              <div
                className="w-full md:w-[40%] flex flex-col border-t md:border-t-0 md:border-l border-[#333] md:overflow-y-auto"
                style={{
                  padding: '36px 28px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
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
                  fontSize: '36px',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '20px',
                  letterSpacing: '0.02em'
                }}>
                  {selectedProject.title}
                </h2>

                <div style={{
                  width: '40px',
                  height: '3px',
                  backgroundColor: '#FFB400',
                  marginBottom: '24px'
                }} />

                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}>
                  Project Overview
                </h3>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '14px',
                  color: '#AAAAAA',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>
                  {selectedProject.description}
                </p>

                {/* Part Overview Section */}
                {selectedProject.partOverviews && selectedProject.partOverviews[currentImageIndex] && (
                  <div style={{ marginBottom: '28px' }}>
                    <h3 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '14px',
                      fontWeight: 700,
                      color: '#FFB400',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#FFB400'
                      }} />
                      Part Overview
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#E0E0E0',
                      lineHeight: 1.6,
                      backgroundColor: 'rgba(255, 180, 0, 0.04)',
                      borderLeft: '2px solid #FFB400',
                      padding: '12px 16px',
                      borderRadius: '0 8px 8px 0',
                      margin: 0
                    }}>
                      {selectedProject.partOverviews[currentImageIndex]}
                    </p>
                  </div>
                )}

                <div className="mt-auto pt-6 border-t border-[#222]">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: '#666', marginBottom: '16px' }}>
                    Variant {currentImageIndex + 1} of {selectedProject.images.length}
                  </p>

                  {/* Premium Project Switcher Navigation */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      onClick={handlePrevProject}
                      style={{
                        flex: '1 1 120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 16px',
                        backgroundColor: '#161616',
                        border: '1px solid #333',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '16px',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      className="hover:bg-[#FFB400] hover:text-[#000000] hover:border-[#FFB400] active:scale-95"
                    >
                      <ChevronLeft size={16} /> PREV PROJECT
                    </button>
                    <button
                      onClick={handleNextProject}
                      style={{
                        flex: '1 1 120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px 16px',
                        backgroundColor: '#161616',
                        border: '1px solid #333',
                        borderRadius: '8px',
                        color: '#FFFFFF',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '16px',
                        letterSpacing: '0.05em',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      className="hover:bg-[#FFB400] hover:text-[#000000] hover:border-[#FFB400] active:scale-95"
                    >
                      NEXT PROJECT <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Keyboard Switcher Help */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: '#555', letterSpacing: '0.02em', textAlign: 'center' }}>
                      Tip: Use ← / → keys for images, ↑ / ↓ keys for projects
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
