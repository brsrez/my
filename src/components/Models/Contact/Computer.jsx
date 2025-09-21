import React from "react";
import { useGLTF } from "@react-three/drei";

const Computer = (props) => {
  const { scene } = useGLTF("/models/computer-optimized.glb");

  return <primitive object={scene} {...props} />;
};

useGLTF.preload("/models/computer-optimized.glb");

export default Computer;
