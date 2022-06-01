import * as THREE from 'three';
import { BakeShadows, OrbitControls, Stage, Suspense } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Model({ color, ...props }) {
  const { nodes, materials } = useGLTF('/assets/3d/shoepair.gltf');
  // The following is a read-out of the models contents, all of its
  // meshes, groups and so on.
  return (
    <group {...props} dispose={null}>
      {/* We can alter materials by piercing into them: materia-property={...} */}
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} material-envMapIntensity={0.8} />
      {/* Or, we define new materials, which now allows full re-use */}
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color={color}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-envMapIntensity={0.8} />
    </group>
  )
}

export default function ShoePair() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 40 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Model color="tomato" position={[0, 0, 0]} />
          <Model color="orange" scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -2]} />
        </Stage>
        <BakeShadows />
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  )
}


