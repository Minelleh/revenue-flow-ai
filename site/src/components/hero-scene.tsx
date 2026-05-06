"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";

function FocalMesh() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    // Slow drift rotation
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
    // Subtle breathing scale
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <group ref={ref}>
      <mesh>
        {/* TorusKnot args: radius, tube radius, tubular segments, radial segments */}
        <torusKnotGeometry args={[1, 0.35, 128, 64]} />
        <meshPhysicalMaterial 
          color="#C08457" 
          metalness={0.7} 
          roughness={0.25} 
          envMapIntensity={0.5} 
          clearcoat={0.1}
        />
      </mesh>
    </group>
  );
}

function KeyLight() {
  const ref = useRef<THREE.SpotLight>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.intensity = 4 + Math.sin(t * 0.4) * 0.5; // subtle breathing
  });

  return (
    <spotLight
      ref={ref}
      position={[4, 5, 3]}
      angle={0.5}
      penumbra={0.8}
      intensity={4}
      color="#FFF5E6"
      castShadow
    />
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.5], fov: 36 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      style={{ background: "#FAF7F2" }}
    >
      <ambientLight intensity={0.4} color="#FFF5E6" />
      <KeyLight />
      <FocalMesh />
      <EffectComposer>
        <Vignette offset={0.3} darkness={0.4} />
      </EffectComposer>
    </Canvas>
  );
}
