import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = elapsedTime * 0.15;
      meshRef.current.rotation.x = elapsedTime * 0.08;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.4}>
      <MeshDistortMaterial
        color="#2563eb"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </Sphere>
  );
}

function FloatingRing() {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(elapsedTime * 0.2) * 0.5;
      ringRef.current.rotation.y = elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} scale={3.2}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.6} />
    </mesh>
  );
}

export const HeroGlobe: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[550px] relative flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#a855f7" intensity={1.5} />
        
        <AnimatedSphere />
        <FloatingRing />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient-hero" />
    </div>
  );
};
