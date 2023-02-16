import { useState, useRef } from "react";
import GlobalStyle from "./GlobalStyle";
import TopLion from "./TopLion";
import Slide from "./Slide";
import {
  Container,
  TopContainer,
  Playground,
  Btn,
} from "../styles/basicStyles";
import { useLocation } from "react-router";


const SelectTamplate = ({}) => {
  const { userInfo } = useLocation();

  const [side, setSide] = useState("front"); //'front', 'back'
  const [selectedTemplate, setSelectedTemplate] = useState({
    front: null,
    back: null,
  });
  const [selectedBackColor, setSelectedBackColor] = useState(null);
  const backSideColor = [
    "#F51212",
    "#FF7A00",
    "#FFE600",
    "#06C755",
    "#1877F2",
    "#142745",
    "#7000FF",
  ];
  const select = (templateIndex) => {
    setSide("back");
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <TopContainer>
          <TopLion lioncount={6} />
        </TopContainer>
        <Playground>
          <div style={{ height: "50vh" }}>
            <Slide
              photos={
                side === "front"
                  ? [
                      <h3 style={{ height: "30%" }}>1</h3>,
                      <h3 style={{ height: "30%" }}>2</h3>,
                      <h3 style={{ height: "30%" }}>3</h3>,
                    ]
                  : [<h3 style={{ height: "30%" }}>1</h3>]
              }
              pickEvent={(index) => {
                setSelectedTemplate({ ...selectedTemplate, side: index });
              }}
            ></Slide>
          </div>

          {side === "back" && (
            <div>
              <div>
                <div>색상을 선택해주세요</div>
                <div>(로고 주변 배경 색에 적용됩니다)</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {backSideColor.map((color) => {
                  return (
                    <div
                      style={{
                        width: "1.75rem",
                        height: "1.75rem",
                        borderRadius: "50%",
                        background: color,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedBackColor(color);
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}

          <Btn type="button" onClick={select} color={"#FF7A00"}>
            다음 단계
          </Btn>
        </Playground>
      </Container>
    </>
  );
};

export default SelectTamplate;
