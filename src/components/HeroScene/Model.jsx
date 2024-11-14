import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("assets/models/physcene.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.planet002.geometry}
        material={materials.scene}
        position={[0, -6.33, -0.02]}
        rotation={[-1.33, -0.55, 0.56]}
        scale={7}
      />
    </group>
  );
}

useGLTF.preload("assets/models/physcene.glb");
