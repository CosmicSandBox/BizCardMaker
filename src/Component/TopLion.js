import React from "react";
import styled, { keyframes } from "styled-components";
const Bar = styled.div`
  width: 90%;
  height: 19%;
  background-color: #96DB85;
  margin: 0 auto;
  position: absolute;
  margin-top: 16.1px;
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
    "4%",
    "4%",
    "15.5%",
    "27%",
    "38.5%",
    "50%",
    "61.5%",
    "73%",
  ];
  const endpos = [
    "4%",
    "15.5%",
    "27%",
    "38.5%",
    "50%",
    "61.5%",
    "73%",
    "85%",
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
    width: 7vh;
    height: 8vh;
    padding-bottom: 1vh;
    margin: 0 auto;
    z-index: 3;
    position: absolute;
    background-color: transparent;
    left: ${endpos[lioncount]};
    animation: ${Move} 2s 0s alternate 1;
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