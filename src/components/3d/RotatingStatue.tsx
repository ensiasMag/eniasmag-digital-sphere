
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Box } from '@react-three/drei';
import * as THREE from 'three';

function AristotleHead() {
  const meshRef = useRef<THREE.Group>(null);
  
  // Simple animation for the bust
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  // We'll create a stylized bust using basic Three.js geometries
  return (
    <group ref={meshRef} position={[0, -0.5, 0]}>
      {/* Base of the bust */}
      <mesh position={[0, -1.2, 0]} castShadow>
        <cylinderGeometry args={[0.7, 0.9, 0.4, 32]} />
        <meshStandardMaterial color="#d9d9d9" roughness={0.7} />
      </mesh>
      
      {/* Neck and shoulders */}
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.7, 0.6, 32]} />
        <meshStandardMaterial color="#e5e5e5" roughness={0.6} />
      </mesh>
      
      {/* Head base */}
      <mesh position={[0, -0.2, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#f0f0f0" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* Beard - using multiple small meshes to create the curly beard texture */}
      <group position={[0, -0.4, 0.5]}>
        {Array(40).fill(null).map((_, i) => (
          <mesh 
            key={i} 
            position={[
              (Math.random() - 0.5) * 0.8, 
              (Math.random() - 0.5) * 0.6 - 0.1, 
              (Math.random() - 0.5) * 0.4 + 0.3
            ]}
            castShadow
          >
            <sphereGeometry args={[0.12 + Math.random() * 0.05, 8, 8]} />
            <meshStandardMaterial color="#d0d0d0" roughness={0.9} />
          </mesh>
        ))}
      </group>
      
      {/* Hair - using multiple spheres with varying positions */}
      <group position={[0, 0.3, 0]}>
        {Array(60).fill(null).map((_, i) => (
          <mesh 
            key={i} 
            position={[
              (Math.random() - 0.5) * 1.2, 
              (Math.random() - 0.5) * 0.6 + 0.2, 
              (Math.random() - 0.5) * 1.2
            ]}
            castShadow
          >
            <sphereGeometry args={[0.15 + Math.random() * 0.1, 8, 8]} />
            <meshStandardMaterial color="#c0c0c0" roughness={0.8} />
          </mesh>
        ))}
      </group>
      
      {/* Face features */}
      <group position={[0, -0.2, 0.4]}>
        {/* Eyes */}
        <mesh position={[-0.25, 0.1, 0.3]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </mesh>
        <mesh position={[0.25, 0.1, 0.3]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.5} />
        </mesh>
        
        {/* Nose */}
        <mesh position={[0, 0, 0.4]} castShadow>
          <coneGeometry args={[0.12, 0.4, 16]} />
          <meshStandardMaterial color="#e0e0e0" roughness={0.6} />
        </mesh>
        
        {/* Mouth */}
        <mesh position={[0, -0.15, 0.3]} rotation={[0.2, 0, 0]} castShadow>
          <boxGeometry args={[0.3, 0.05, 0.05]} />
          <meshStandardMaterial color="#c0c0c0" roughness={0.7} />
        </mesh>
      </group>
      
      {/* Robe collar */}
      <mesh position={[0, -1.2, 0]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.6, 0.2, 16, 32, Math.PI * 0.8]} />
        <meshStandardMaterial color="#d0d0d0" roughness={0.8} />
      </mesh>
    </group>
  );
}

const RotatingStatue = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas 
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        shadows
      >
        {/* Enhanced lighting for better 3D effect */}
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[5, 5, 5]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <directionalLight 
          position={[0, 5, 5]} 
          intensity={0.8}
          castShadow
        />
        
        {/* Aristotle bust component */}
        <AristotleHead />
        
        {/* Subtle environment lighting */}
        <Environment preset="sunset" />
        
        {/* Controls with slight auto-rotation */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};

export default RotatingStatue;
