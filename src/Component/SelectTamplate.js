import { useState, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopLion from "./TopLion";
import Slide from "./Slide";
import {
  Container,
  TopContainer,
  Playground,
  Btn,
} from "../styles/basicStyles";
import BasicCardOne from "./business-card/BasicCardOne";
import BasicCardTwo from "./business-card/BasicCardTwo";
import BasicCardThree from "./business-card/BasicCardThree";
import CardBackSide from "./business-card/CardBackSide";
import html2canvas from "html2canvas";

const backSideColor = [
  "#FFFFFF",
  "#FF9933",
  "#66ccff",
  "#9966FF",
  "#142745",
  "#000000",
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

const TopText = styled.div`
  width: 100%;
  height: 68px;
  text-align: center;
  line-height: 160%;
  color: #412917;
  border-radius: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  margin-top: 2rem;

  font-family: "yg-jalnan";
`;

const SelectTamplate = ({}) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [side, setSide] = useState("front"); //'front', 'back'
  const [selectedFrontCard, setSelectedFrontCard] = useState(1);
  const [selectedBackColor, setSelectedBackColor] = useState("#000000");
  const [selectedBackLogo, setSelectedBackLogo] = useState(1);
  const [finalFrontUrl, sefFinalFrontUrl] = useState(null);

  const frontRef = useRef(null);

  const renderBackCard = () => {
    const result = [];
    for (let i = 0; i < backLogo.length; i++) {
      result.push(
        <CardBackSide
          bgColor={selectedBackColor}
          icon={backLogo[i]}
          index={i}
        />
      );
    }
    return result;
  };
  const select = useCallback(async () => {
    let imgSrc;
    let className;
    if (side === "front") {
      if (selectedFrontCard === 1) {
        className = ".basic-one";
      } else if (selectedFrontCard === 2) {
        className = ".basic-two";
      } else {
        className = ".basic-three";
      }
      await html2canvas(document.querySelector(className), { scale: 10 }).then(
        (canvas) => {
          imgSrc = canvas.toDataURL("/a");
        }
      );

      sefFinalFrontUrl(imgSrc);
      setSide("back");
    } else {
      className = `.card-back-side-${selectedBackLogo - 1}`;
      await html2canvas(document.querySelector(className), { scale: 10 }).then(
        (canvas) => {
          imgSrc = canvas.toDataURL("/a");
        }
      );

      navigate("/result", {
        state: {
          userInfo: state,
          frontCardIndex: selectedFrontCard,
          backLogoIndex: selectedBackLogo - 1,
          backColor: selectedBackColor,
          frontImgUrl: finalFrontUrl,
          backImgUrl: imgSrc,
        },
      });
    }
  }, [selectedFrontCard, side, selectedBackLogo]);

  return (
    <>
      <Container>
        <TopContainer>
          <TopLion lioncount={side === "front" ? 6 : 7} />
        </TopContainer>

        {side === "front" ? (
          <TopText>
            이제 가장 마음에 드는<br></br> 명함 디자인을 골라주세요
          </TopText>
        ) : (
          <TopText>
            명함 뒷 면에 쓰일 마음에 드는 <br></br>
            로고와 색을 선택해주세요
          </TopText>
        )}

        <Playground>
          <div className={`content`}>
            <div style={{ height: "50vh" }}>
              <Slide
                photos={
                  side === "front"
                    ? [
                        <BasicCardOne ref={frontRef} />,
                        <BasicCardTwo />,
                        <BasicCardThree />,
                      ]
                    : renderBackCard()
                }
                pickEvent={(index) => {
                  if (side === "front") {
                    setSelectedFrontCard(index);
                  } else {
                    setSelectedBackLogo(index);
                  }
                }}
                side={side}
              ></Slide>
            </div>
            {side === "back" && (
              <div className={`color`}>
                <div>
                  <div>색상을 선택해주세요</div>
                  <div>(로고 주변 배경 색에 적용됩니다)</div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
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
          </div>
          <Btn type="button" onClick={select} color={"#FF7A00"}>
            선택하기
          </Btn>
        </Playground>
      </Container>

      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .color {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .color div:first-child {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
      `}</style>
    </>
  );
};

export default SelectTamplate;
