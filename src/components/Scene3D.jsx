import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function WireframeIcosphere() {
  const meshRef = useRef();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2.2, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#FFFFFF"
        wireframe
        emissive="#FFFFFF"
        emissiveIntensity={0.3}
        transparent
        opacity={0.7}
      />
    </Icosahedron>
  );
}

function OrbitingSphere({ radius, speed, offset, size = 0.08 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.7) * (radius * 0.3);
    }
  });

  return (
    <Sphere ref={ref} args={[size, 16, 16]}>
      <meshStandardMaterial
        color="#FFFFFF"
        emissive="#FFFFFF"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </Sphere>
  );
}

export default function Scene3D() {
  return (
    <div style={{ width: '100%', height: '450px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight color="#FFFFFF" intensity={0.2} />
        <pointLight position={[5, 5, 5]} color="#FFFFFF" intensity={0.8} />
        <pointLight position={[-3, -2, 4]} color="#E0E0E0" intensity={0.4} />

        <WireframeIcosphere />

        <OrbitingSphere radius={3.2} speed={0.5} offset={0} size={0.1} />
        <OrbitingSphere radius={3.8} speed={0.35} offset={2.1} size={0.07} />
        <OrbitingSphere radius={2.8} speed={0.65} offset={4.2} size={0.06} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          dampingFactor={0.05}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}
