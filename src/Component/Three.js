import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import React, { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import styled from "styled-components";

const ThreePageStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const name = (type) => `PavingStones092_1K_${type}.jpg`;

function Box({ position, imgSrc }) {
  const logoImg = "/logo192.png";
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [imgSrc, imgSrc, imgSrc, imgSrc, imgSrc]
  );
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta));

  const [size, set] = useState(0.5);
  const [hidden, setVisible] = useState(false);

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      // {...props}
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1.3}
      rotateX={200}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[5, 3, 0.02]} />
      <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap} // 칼라 포함해서 사진 그나마 제대로 나옴
        // displacementMap={displacementMap} // 서로 떨어지는 효과?
        // normalMap={normalMap} //얘가 앞면 같고? 근데 색깔이 날아감 흑백같아짐
        // roughnessMap={roughnessMap} // 모임?
        aoMap={aoMap} // 모임?
        // color={"white"}
      />
    </mesh>
  );
}

export default function App({ frontImgSrc, backImgSrc, isHome = false }) {
  return (
    <>
      <ThreePageStyle>
        <div style={{ fontFamily: "TmoneyRoundWindRegular" }}>
          손가락으로 이리저리 돌려보세요!
        </div>
        {/* <img src={frontImgSrc}></img> */}
        <Canvas className={`canvas`} style={{ height: "40vh", width: "100%" }}>
          {/* //앞뒤 다 밝게 나옴 */}
          <ambientLight intensity={isHome ? 20 : 1} />

          {/* //앞만 밝게 나옴 */}
          {/* <directionalLight position={[10, 5, 10]} /> */}

          {/* 가운데 위주로 밝게 뒤는 안나옴  */}
          {/* <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} /> */}

          {/* //한쪽만만 밝게 나옴 */}
          {/* <pointLight position={[10, 10, 10]} /> */}
          <Box imgSrc={frontImgSrc} position={[0, 0, 0.01]} />
          <Box imgSrc={backImgSrc} position={[0, 0, 0]} />
          {/* <Box position={[1.2, 0, 0]} /> */}
          <OrbitControls />
        </Canvas>
      </ThreePageStyle>
    </>
  );
}
