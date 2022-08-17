import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, useAnimations, Stage } from "@react-three/drei";
import { useSpring } from "@react-spring/three";

export default function Stacy() {
  return (
    <div style={{ position: "relative", width: 140, height: 240 }}>
      <Canvas
        concurrent
        shadowMap
        camera={{ position: [1, 1.5, 1.5], fov: 50 }}
      >
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <group position={[0, -1, 0]}>
          <Stage preset="rembrandt" intensity={1} environment="city">
            <Model />
          </Stage>
        </group>
        <mesh
          rotation={[-0.5 * Math.PI, 0, 0]}
          position={[0, -1, 0]}
          receiveShadow
        >
          <planeBufferGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
      </Canvas>
    </div>
  );
}

function Model(props) {
  // Fetch model and a separate texture
  const { nodes, animations } = useGLTF("/assets/3d/stacy.glb");
  const texture = useTexture("/assets/3d/stacy.jpg");
  // Extract animation actions
  const { ref, actions, names } = useAnimations(animations);
  // Hover and animation-index states
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(4);
  // Animate the selection halo
  const { color, scale } = useSpring({
    scale: hovered ? [1.15, 1.15, 1] : [0.3, 0.3, 0.3],
    color: hovered ? "hotpink" : "aquamarine",
  });
  // Change cursor on hover-state
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  // Change animation when the index changes
  useEffect(() => {
    // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play();
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5);
  }, [index, actions, names]);
  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.03}>
        <primitive object={nodes.mixamorigHips} />
        <skinnedMesh
          castShadow
          receiveShadow
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => setIndex((index + 1) % names.length)}
          geometry={nodes.stacy.geometry}
          skeleton={nodes.stacy.skeleton}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <meshStandardMaterial map={texture} map-flipY={false} skinning />
        </skinnedMesh>
      </group>
    </group>
  );
}
