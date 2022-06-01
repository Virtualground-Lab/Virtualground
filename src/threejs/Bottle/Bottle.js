import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls } from '@react-three/drei';

function Ramen(props) {
  const { scene } = useGLTF('/assets/3d/bowl.gltf');
  return <primitive object={scene} {...props} />
};

function Soda(props) {
  const { scene } = useGLTF('/assets/3d/bottle.gltf');
  return <primitive object={scene} {...props} />
};


function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight position={[20, 30, 10]} />
      <pointLight position={[-10, -10, -10]} color="blue" />
    </>
  );
}

export default function Bottle() {
  const controls = useRef();
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 4, 8], fov: 25, zoom: 0.6 }}>
      <Lights />
      <Suspense fallback={null}>
        <Stage controls={controls} contactShadow={{ blur: 2, far: 0.2, resolution: 1024 }}>
          <Ramen scale={4} position={[-1, 0, 2]} />
          <Soda scale={5} position={[1, 0, 3]} />
        </Stage>
      </Suspense>
      <OrbitControls ref={controls} />
    </Canvas>
  )
}
