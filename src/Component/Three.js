import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { ThreePageStyle } from "../styles/threeJsStyle";

function Box({ position, imgSrc }) {
  const [colorMap, aoMap] = useLoader(TextureLoader, [
    imgSrc,
    imgSrc,
    imgSrc,
    imgSrc,
    imgSrc,
  ]);

  const ref = useRef();
  return (
    <mesh position={position} ref={ref} scale={1.3} rotateX={200}>
      <boxGeometry args={[5, 3, 0.02]} />
      <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap}
        aoMap={aoMap}
        opacity={0.5}
      />
    </mesh>
  );
}

export default function App({ frontImgSrc, backImgSrc, isHome = false }) {
  return (
    <ThreePageStyle>
      <Canvas className={`canvas`} style={{ height: "40vh", width: "100%" }}>
        <ambientLight intensity={isHome ? 20 : 0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box imgSrc={frontImgSrc} position={[0, 0, 0.01]} />
        <Box imgSrc={backImgSrc} position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
      <div
        className={`comment`}
        style={{
          fontFamily: "TmoneyRoundWindRegular",
          marginTop: "2px",
          marginBottom: "10px",
        }}
      >
        손가락으로 이리저리 돌려보세요!
      </div>
    </ThreePageStyle>
  );
}
