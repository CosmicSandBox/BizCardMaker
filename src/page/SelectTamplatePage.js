import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopLion from "../Component/TopLion";
import Slide from "../Component/Slide";
import BasicCardOne from "../Component/business-card/BasicCardOne";
import BasicCardTwo from "../Component/business-card/BasicCardTwo";
import BasicCardThree from "../Component/business-card/BasicCardThree";
import CardBackSide from "../Component/business-card/CardBackSide";
import html2canvas from "html2canvas";
import {
  Container,
  TopContainer,
  Playground,
  GuideText,
  Btn,
} from "../styles/basicStyles";
import { SliderBox, ColorSelectBox } from "../styles/slideStyles";

const backSideColor = [
  "#FFFFFF",
  "#FF9933",
  "#66ccff",
  "#9966FF",
  "#142745",
  "#292929",
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

const SelectTamplatePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [side, setSide] = useState("front"); //'front', 'back'
  const [selectedFrontCard, setSelectedFrontCard] = useState(1);
  const [selectedBackColor, setSelectedBackColor] = useState("#292929");
  const [selectedBackLogo, setSelectedBackLogo] = useState(1);
  const [finalFrontUrl, sefFinalFrontUrl] = useState(null);

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
    const date = Math.floor(new Date().getTime() / 1000);
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
          imgSrc = canvas.toDataURL(`/${date}`);
        }
      );

      sefFinalFrontUrl(imgSrc);
      setSide("back");
    } else {
      className = `.card-back-side-${selectedBackLogo - 1}`;
      await html2canvas(document.querySelector(className), { scale: 10 }).then(
        (canvas) => {
          imgSrc = canvas.toDataURL(`/${date}`);
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

        <Playground>
          {side === "front" ? (
            <GuideText>
              이제 가장 마음에 드는<br></br> 명함 디자인을 골라주세요
            </GuideText>
          ) : (
            <GuideText>
              명함 뒷 면에 쓰일 마음에 드는 <br></br>
              로고와 색을 선택해주세요
            </GuideText>
          )}
          <SliderBox>
            <Slide
              photos={
                side === "front"
                  ? [<BasicCardOne />, <BasicCardTwo />, <BasicCardThree />]
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

            {side === "back" && (
              <ColorSelectBox>
                <div>
                  <div style={{fontFamily: "Pretendard-Regular"}}>색상을 선택해주세요</div>
                  <div style={{fontFamily: "Pretendard-Regular"}}>(로고 주변 배경 색에 적용됩니다)</div>
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
                          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                        }}
                        onClick={() => {
                          setSelectedBackColor(color);
                        }}
                      ></div>
                    );
                  })}
                </div>
              </ColorSelectBox>
            )}
          </SliderBox>
          <Btn type="button" onClick={select} color={"#FF7A00"}>
            선택하기
          </Btn>
        </Playground>
      </Container>
    </>
  );
};

export default SelectTamplatePage;
