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
import BasicCardOne from "./business-card/BasicCardOne";
import BasicCardTwo from "./business-card/BasicCardTwo";
import BasicCardThree from "./business-card/BasicCardThree";
import CardBackSide from "./business-card/CardBackSide";

const SelectTamplate = ({}) => {
  const { userInfo } = useLocation();

  const [side, setSide] = useState("front"); //'front', 'back'
  const [selectedTemplate, setSelectedTemplate] = useState({
    front: null,
    back: null,
  });

  const [selectedFrontCard, setSelectedFrontCard] = useState(null);
  const [selectedBackColor, setSelectedBackColor] = useState("#F51212");
  const [selectedBackLogo, setSelectedBackLogo] = useState(null);
  // console.log(selectedBackLogo);

  const backSideColor = [
    "#F51212",
    "#FF7A00",
    "#FFE600",
    "#06C755",
    "#1877F2",
    "#142745",
    "#7000FF",
  ];
  const backLogo = [
    "logo01.png",
    "logo02.png",
    "logo03.png",
    "logo04.png",
    "logo05.png",
    "logo06.png",
    "logo07.png",
    "logo08.png",
  ];
  const renderBackCard = () => {
    const result = [];
    for (let i = 0; i < backLogo.length; i++) {
      result.push(
        <CardBackSide
          bgColor={selectedBackColor}
          icon={backLogo[i]}
          pickedEvent={(e) => {
            setSelectedBackLogo(e);
          }}
        />
      );
    }
    return result;
  };

  const select = (templateIndex) => {
    setSide("back");
  };

  return (
    <>
      <GlobalStyle />

      <Container>
        <TopContainer>
          <TopLion lioncount={side === "front" ? 6 : 7} />
        </TopContainer>
        <Playground>
          <div style={{ height: "50vh" }}>
            <Slide
              photos={
                side === "front"
                  ? [
                      <BasicCardOne
                        pickedEvent={(e) => {
                          setSelectedFrontCard(e);
                        }}
                      />,
                      <BasicCardTwo
                        pickedEvent={(e) => {
                          setSelectedFrontCard(e);
                        }}
                      />,
                      <BasicCardThree
                        pickedEvent={(e) => {
                          setSelectedFrontCard(e);
                        }}
                      />,
                    ]
                  : renderBackCard()
              }
              pickEvent={(index) => {
                setSelectedTemplate({ ...selectedTemplate, side: index });
              }}
            ></Slide>
          </div>{" "}
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
