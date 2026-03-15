"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PerspectiveCamera, PresentationControls, Float } from "@react-three/drei";
import * as THREE from "three";

function TechStructure() {
  const group = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!group.current || !coreRef.current || !ringRef1.current || !ringRef2.current) return;
    const t = state.clock.getElapsedTime();
    
    // Core breathing effect
    const scale = 1 + Math.sin(t * 2) * 0.05;
    coreRef.current.scale.set(scale, scale, scale);
    
    // Rings rotation
    ringRef1.current.rotation.x = t * 0.5;
    ringRef1.current.rotation.y = t * 0.8;
    
    ringRef2.current.rotation.x = -t * 0.6;
    ringRef2.current.rotation.z = t * 0.4;
  });

  return (
    <group ref={group} position={[0, -0.5, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        {/* Core Inner Shape */}
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial 
            color="#c2a4ff" 
            emissive="#a87cff"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>

        {/* Outer Orbit Ring 1 */}
        <mesh ref={ringRef1}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshBasicMaterial color="#eae5ec" opacity={0.3} transparent />
        </mesh>

        {/* Outer Orbit Ring 2 */}
        <mesh ref={ringRef2}>
          <torusGeometry args={[2.4, 0.01, 16, 100]} />
          <meshBasicMaterial color="#c2a4ff" opacity={0.15} transparent />
        </mesh>
        
        {/* Abstract Data Nodes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.sin((i / 12) * Math.PI * 2) * 1.8,
              Math.cos((i / 12) * Math.PI * 2) * 1.8,
              Math.sin(i) * 0.5
            ]}
          >
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function InteractiveAvatar() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      {/* Background glow behind 3D object */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
      
      <Canvas
        shadows
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#c2a4ff" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a87cff" />
        
        {/* Interaction Controls */}
        <PresentationControls
          global
          rotation={[0.1, -0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          <TechStructure />
        </PresentationControls>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
