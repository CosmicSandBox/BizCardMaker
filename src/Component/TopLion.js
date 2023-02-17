import React from "react";
import styled, { keyframes } from "styled-components";
const Bar = styled.div`
  width: 90%;
  height: 13px;
  background-color: #96DB85;
  margin: 0 auto;
  position: absolute;
  margin-top: 15px;
`;
const Prograss = styled.img`
  width: 90%;
  height: 65%;
  z-index: 2;
  margin: 0 auto;
  background-color: transparent;
  
`;
function TopLion({ lioncount }) {
  //2rem = name start, 사자 처음값
  const startpos = [
    "1rem",
    "1rem",
    "3.5rem",
    "6rem",
    "8.5rem",
    "11rem",
    "13.5rem",
    "15.5rem",
  ];
  const endpos = [
    "1rem",
    "3.5rem",
    "6rem",
    "8.5rem",
    "11rem",
    "13.5rem",
    "15.5rem",
    "18rem",
  ];
  const Move = keyframes`
        0% {
            left: ${startpos[lioncount]};
        }
        100% {
            left: ${endpos[lioncount]};
        }
    `;
  const Img = styled.img`
    width: 58px;
    height: 64px;
    margin: 0 auto;
    z-index: 3;
    position: absolute;
    background-color: transparent;
    left: ${endpos[lioncount]};
    animation: ${Move} 2s 0s alternate 1;
    top: -0.2rem;
  `;
  return (
    <>
      <Bar></Bar>
      <Prograss src="img/prograss.png" />
      <Img src="img/lion.png" />
    </>
  );
}
export default React.memo(TopLion);