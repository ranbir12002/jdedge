import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import "./ThreeHero.css";

function FloatingMark() {
  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.7}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[0.75, 0.22, 140, 18]} />
        <meshStandardMaterial metalness={0.55} roughness={0.28} />
      </mesh>
    </Float>
  );
}

export default function ThreeHero() {
  return (
    <div className="threeWrap" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [2.5, 1.8, 3.2], fov: 45 }}
        shadows
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <FloatingMark />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="threeGlow" />
    </div>
  );
}
