import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import * as THREE from "three";

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model?.name === "Interactive Developer" && scene?.scene) {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          // правки: THREE (а не Three) + MeshStandardMaterial (а не MeshStandrdMaterial)
          child.material = new THREE.MeshStandardMaterial({ color: "silver" });
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene, model?.name]); // чтобы не гонять на каждый рендер

  return (
    <Canvas /* при необходимости добавь размеры контейнеру снаружи */>
      <ambientLight intensity={0.3} />
      {/* правка: position должен быть массивом */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        {/* предполагаю, что rotation/scale — массивы чисел */}
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcons;
