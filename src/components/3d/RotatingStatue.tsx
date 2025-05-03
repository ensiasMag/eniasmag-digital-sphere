
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useHelper } from '@react-three/drei';
import * as THREE from 'three';

function ENSIASMAGLogo() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Main animation for subtle movement
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.4}>
      {/* Red circular background */}
      <mesh position={[0, 0, -0.25]} receiveShadow>
        <cylinderGeometry args={[2, 2, 0.1, 64]} />
        <meshStandardMaterial color="#c11414" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* White circular border pattern */}
      <mesh position={[0, 0, -0.2]} receiveShadow>
        <torusGeometry args={[1.8, 0.1, 16, 64]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
      </mesh>
      
      {/* Inner geometric pattern in white */}
      <group position={[0, 0.5, -0.15]}>
        {/* Horizontal line top */}
        <mesh position={[0, 0.7, 0]} receiveShadow>
          <boxGeometry args={[1, 0.1, 0.05]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Vertical lines */}
        <mesh position={[-0.5, 0.45, 0]} receiveShadow>
          <boxGeometry args={[0.1, 0.6, 0.05]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.5, 0.45, 0]} receiveShadow>
          <boxGeometry args={[0.1, 0.6, 0.05]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Horizontal line bottom */}
        <mesh position={[0, 0.2, 0]} receiveShadow>
          <boxGeometry args={[1, 0.1, 0.05]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Aristotle figure */}
      <group position={[0, 0.15, 0]}>
        {/* Head */}
        <mesh position={[-0.5, 0, 0]} castShadow>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.5} />
        </mesh>
        
        {/* Beard */}
        <mesh position={[-0.6, -0.25, 0.2]} castShadow>
          <coneGeometry args={[0.3, 0.8, 32]} />
          <meshStandardMaterial color="#f0f0f0" roughness={0.7} />
        </mesh>
        
        {/* Hair */}
        <group position={[-0.5, 0.2, 0]}>
          {Array(30).fill(null).map((_, i) => (
            <mesh 
              key={i} 
              position={[
                (Math.random() - 0.5) * 0.6, 
                (Math.random() - 0.3) * 0.4, 
                (Math.random() - 0.5) * 0.6
              ]}
              castShadow
            >
              <sphereGeometry args={[0.1 + Math.random() * 0.05, 8, 8]} />
              <meshStandardMaterial color="#f0f0f0" roughness={0.8} />
            </mesh>
          ))}
        </group>
        
        {/* Robe */}
        <mesh position={[0, -0.6, 0]} castShadow>
          <cylinderGeometry args={[0.8, 1, 1.2, 32]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.6} />
        </mesh>
        
        {/* Face features - subtle indications */}
        <mesh position={[-0.65, 0, 0.3]} castShadow>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
        
        {/* Shoulder drape */}
        <mesh position={[-0.2, -0.4, 0.3]} rotation={[0.2, 0.3, 0.1]} castShadow>
          <boxGeometry args={[0.6, 0.1, 0.8]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.7} />
        </mesh>
      </group>
      
      {/* Open book */}
      <group position={[0.3, -0.7, 0.2]}>
        {/* Left page */}
        <mesh position={[-0.25, 0, 0]} rotation={[0, 0.2, 0]} castShadow>
          <boxGeometry args={[0.5, 0.05, 0.7]} />
          <meshStandardMaterial color="#f8f8f8" roughness={0.5} />
        </mesh>
        
        {/* Right page */}
        <mesh position={[0.25, 0, 0]} rotation={[0, -0.2, 0]} castShadow>
          <boxGeometry args={[0.5, 0.05, 0.7]} />
          <meshStandardMaterial color="#f8f8f8" roughness={0.5} />
        </mesh>
        
        {/* Book lines - simulating text */}
        <group position={[0, 0.03, 0]}>
          {Array(6).fill(null).map((_, i) => (
            <mesh 
              key={`left-${i}`}
              position={[-0.25, 0, -0.25 + i * 0.1]}
              castShadow
            >
              <boxGeometry args={[0.35, 0.01, 0.02]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
          ))}
          {Array(6).fill(null).map((_, i) => (
            <mesh 
              key={`right-${i}`}
              position={[0.25, 0, -0.25 + i * 0.1]}
              castShadow
            >
              <boxGeometry args={[0.35, 0.01, 0.02]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
          ))}
        </group>
      </group>
      
      {/* Horizontal line below the book */}
      <mesh position={[0, -1.1, 0]} castShadow>
        <boxGeometry args={[3, 0.08, 0.08]} />
        <meshStandardMaterial color="#c11414" roughness={0.4} />
      </mesh>
      
      {/* "ENSIASMAG" text - stylized as 3D letters */}
      <group position={[0, -1.5, 0.1]}>
        {/* E */}
        <mesh position={[-1.4, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.2, 0)
                .lineTo(0.2, 0.1)
                .lineTo(0.05, 0.1)
                .lineTo(0.05, 0.15)
                .lineTo(0.15, 0.15)
                .lineTo(0.15, 0.25)
                .lineTo(0.05, 0.25)
                .lineTo(0.05, 0.3)
                .lineTo(0.2, 0.3)
                .lineTo(0.2, 0.4)
                .lineTo(0, 0.4)
                .lineTo(0, 0),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* N */}
        <mesh position={[-1.1, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.05, 0)
                .lineTo(0.05, 0.4)
                .lineTo(0, 0.4)
                .lineTo(0, 0)
                .moveTo(0.05, 0.3)
                .lineTo(0.15, 0)
                .lineTo(0.2, 0)
                .lineTo(0.2, 0.4)
                .lineTo(0.15, 0.4)
                .lineTo(0.15, 0.1)
                .lineTo(0.05, 0.4),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* S */}
        <mesh position={[-0.8, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.2, 0)
                .lineTo(0.2, 0.1)
                .lineTo(0.05, 0.1)
                .lineTo(0.05, 0.15)
                .lineTo(0.2, 0.15)
                .lineTo(0.2, 0.4)
                .lineTo(0, 0.4)
                .lineTo(0, 0.3)
                .lineTo(0.15, 0.3)
                .lineTo(0.15, 0.25)
                .lineTo(0, 0.25)
                .lineTo(0, 0),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* Rest of letters simplified */}
        {/* I */}
        <mesh position={[-0.5, 0, 0]} castShadow>
          <boxGeometry args={[0.05, 0.4, 0.05]} />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* A */}
        <mesh position={[-0.3, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.05, 0)
                .lineTo(0.1, 0.4)
                .lineTo(0.05, 0.4)
                .lineTo(0.05, 0.2)
                .lineTo(0.15, 0.2)
                .lineTo(0.15, 0.4)
                .lineTo(0.1, 0.4)
                .lineTo(0.15, 0)
                .lineTo(0.2, 0)
                .lineTo(0.15, 0.4),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* S */}
        <mesh position={[0, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.2, 0)
                .lineTo(0.2, 0.1)
                .lineTo(0.05, 0.1)
                .lineTo(0.05, 0.15)
                .lineTo(0.2, 0.15)
                .lineTo(0.2, 0.4)
                .lineTo(0, 0.4)
                .lineTo(0, 0.3)
                .lineTo(0.15, 0.3)
                .lineTo(0.15, 0.25)
                .lineTo(0, 0.25)
                .lineTo(0, 0),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* M */}
        <mesh position={[0.3, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.05, 0)
                .lineTo(0.05, 0.4)
                .lineTo(0, 0.4)
                .lineTo(0, 0)
                .moveTo(0.05, 0.4)
                .lineTo(0.1, 0.2)
                .lineTo(0.15, 0.4)
                .lineTo(0.15, 0)
                .lineTo(0.2, 0)
                .lineTo(0.2, 0.4)
                .lineTo(0.15, 0.4),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* A */}
        <mesh position={[0.6, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0, 0)
                .lineTo(0.05, 0)
                .lineTo(0.1, 0.4)
                .lineTo(0.05, 0.4)
                .lineTo(0.05, 0.2)
                .lineTo(0.15, 0.2)
                .lineTo(0.15, 0.4)
                .lineTo(0.1, 0.4)
                .lineTo(0.15, 0)
                .lineTo(0.2, 0)
                .lineTo(0.15, 0.4),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
        
        {/* G */}
        <mesh position={[0.9, 0, 0]} castShadow>
          <extrudeGeometry 
            args={[
              new THREE.Shape()
                .moveTo(0.2, 0.15)
                .lineTo(0.1, 0.15)
                .lineTo(0.1, 0.1)
                .lineTo(0.2, 0.1)
                .lineTo(0.2, 0)
                .lineTo(0, 0)
                .lineTo(0, 0.4)
                .lineTo(0.2, 0.4)
                .lineTo(0.2, 0.3)
                .lineTo(0.05, 0.3)
                .lineTo(0.05, 0.1),
              { depth: 0.05, bevelEnabled: false }
            ]}
          />
          <meshStandardMaterial color="#c11414" />
        </mesh>
      </group>
    </group>
  );
}

const RotatingStatue = () => {
  return (
    <div className="w-full h-full min-h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }}
        shadows
      >
        {/* Enhanced lighting for better 3D effect */}
        <ambientLight intensity={0.6} />
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
        
        {/* ENSIASMAG Logo component */}
        <ENSIASMAGLogo />
        
        {/* Subtle environment lighting */}
        <Environment preset="sunset" />
        
        {/* Controls with slight auto-rotation */}
        <OrbitControls 
          enableZoom={true}
          autoRotate 
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};

export default RotatingStatue;
