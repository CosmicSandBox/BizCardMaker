import { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useTexture, Html } from "@react-three/drei";
import React, { Suspense } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

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
      scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
    >
      //TODO 1번쨰
      {/* <boxGeometry args={[2, 2, 2]} /> {[4, 2, 0.03]}
     
      <meshStandardMaterial
        displacementScale={0.2}
        // map={colorMap}
        // displacementMap={displacementMap}
        // normalMap={normalMap} //얘가 앞면 같고?
        // // roughnessMap={roughnessMap}
        // aoMap={aoMap} //얘가 뒷면 같고
        color={"white"}
      /> */}
      <boxGeometry args={[5, 3, 0.02]} />
      {/* <meshStandardMaterial normalMap={normalMap} aoMap={aoMap} /> */}
      <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap} // 칼라 포함해서 사진 그나마 제대로 나옴
        // displacementMap={displacementMap} // 서로 떨어지는 효과?
        // normalMap={normalMap} //얘가 앞면 같고? 근데 색깔이 날아감 흑백같아짐
        // roughnessMap={roughnessMap} // 모임?
        aoMap={aoMap} // 모임?
        // color={"white"}
      />
      <Html
        style={{
          transition: "all 0.2s",
          opacity: hidden ? 0 : 1,
          transform: `scale(${hidden ? 0.5 : 1})`,
        }}
        distanceFactor={0.5}
        position={[0, 0, 0.03]}
        transform
        occlude
        // onOcclude={setVisible}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "150px",
            background: "pink",
            width: "240rem",
            height: "140rem",
            display: "flex",
            backgroundColor: "black",
          }}
        >
          <img
            style={{
              width: "40rem",
              height: "40rem",
            }}
            src="/logo192.png"
          ></img>
          {/* Size hi */}
        </div>
      </Html>
    </mesh>
  );
}

export default function App({ imgSrc }) {
  return (
    <>
      <Canvas className={`canvas`} style={{ height: "50vh" }}>
        {/* //앞뒤 다 밝게 나옴 */}
        <ambientLight intensity={25} />

        {/* //앞만 밝게 나옴 */}
        {/* <directionalLight position={[10, 5, 10]} /> */}

        {/* 가운데 위주로 밝게 뒤는 안나옴  */}
        {/* <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} /> */}

        {/* //한쪽만만 밝게 나옴 */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Box imgSrc={imgSrc} />
        {/* <Box position={[1.2, 0, 0]} /> */}
        <OrbitControls />
      </Canvas>
    </>
  );
}
