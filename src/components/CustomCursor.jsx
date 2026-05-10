import { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  // Lerp the ring position for smooth trailing
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, y, 0.15);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [x, y]);

  // Listen for hoverable elements
  useEffect(() => {
    const handleOver = (e) => {
      if (e.target.closest('a, button, [role="button"], .hoverable')) {
        setHovering(true);
      }
    };
    const handleOut = (e) => {
      if (e.target.closest('a, button, [role="button"], .hoverable')) {
        setHovering(false);
      }
    };
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);
    return () => {
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          opacity: hovering ? 0 : 1,
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${hovering ? 'hovering' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
