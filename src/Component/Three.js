// import { Canvas } from "@react-three/fiber";
// import React from "react";

// const Three = () => {
//   return (
//     <div id="canvas-container">
//       <Canvas>
//         <ambientLight intensity={0.1} />
//         <directionalLight color="red" position={[0, 0, 5]} />
//         <mesh>
//           <boxGeometry />
//           <meshStandardMaterial />
//         </mesh>
//       </Canvas>
//     </div>
//   );
// };

// export default Three;
import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import React, { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const name = (type) => `PavingStones092_1K_${type}.jpg`;

function Box(props) {
  // const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
  //   TextureLoader,
  //   [
  //     name("Color"),
  //     name("Displacement"),
  //     name("Normal"),
  //     name("Roughness"),
  //     name("AmbientOcclusion"),
  //   ]
  // );
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    ["logo512.png", "logo512.png", "logo512.png", "logo512.png", "logo512.png"]
  );
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[4, 2, 0.03]} />
      <meshStandardMaterial
        displacementScale={0.2}
        // map={colorMap}
        // displacementMap={displacementMap}
        normalMap={normalMap}
        // roughnessMap={roughnessMap}
        // aoMap={aoMap}
        // color={hovered ? "hotpink" : "orange"}
      />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas className={`canvas`} style={{ height: "50vh" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0, 0, 0]} />
      {/* <Box position={[1.2, 0, 0]} /> */}
      <OrbitControls />
    </Canvas>
  );
}
