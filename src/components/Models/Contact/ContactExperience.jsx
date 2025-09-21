import React, { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <div className="card-border h-full rounded-2xl bg-black-100 p-4 md:p-6">
      <Canvas
        shadows
        camera={{ position: [0, 1.75, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.45} color="#fff6e9" />
        <directionalLight
          position={[6, 8, 6]}
          intensity={1.6}
          color="#ffd9b3"
          castShadow
        />
        <spotLight
          position={[-6, 6, -4]}
          angle={0.3}
          penumbra={0.2}
          intensity={0.8}
          color="#9ad0ff"
        />

        <Suspense fallback={null}>
          <group position={[0, -1.5, 0]} castShadow>
            <mesh
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -0.05, 0]}
            >
              <circleGeometry args={[12, 64]} />
              <meshStandardMaterial color="#141414" />
            </mesh>

            <group scale={0.03} position={[0, 0, 0]}>
              <Computer castShadow />
            </group>
          </group>
          <Environment preset="city" />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ContactExperience;
