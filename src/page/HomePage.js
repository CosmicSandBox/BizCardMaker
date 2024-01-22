import React, { useState, useMemo } from "react";
import Three from "../Component/Three";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Btn,
  Section,
  Intro,
  TopText,
  StyledInput,
  StyledLabel,
  StyledP,
} from "../styles/basicStyles";

const HomePage = () => {
  const [state, setState] = useState(false);
  const [color, setColor] = useState("#D3D3D3");
  const colorOnclick = useMemo(() => {
    if (state === false) {
      setColor("#D3D3D3");
    } else {
      setColor("#FF7A00");
    }
  }, [state]);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Section>
          <Intro>
            <TopText style={{ marginBottom: "25px", textAlign: "center" }}>
              아직도 명함 없는
              <br />
              <span style={{ color: "#D94925" }}>한국외대생</span>이 있다부?
            </TopText>

            <TopText style={{ fontSize: "6vh" }}>
              너만의&nbsp;
              <span style={{ color: "#D94925" }}>명함</span>
              을<br /> 만들어봐!&nbsp;
              <img
                src="img/BizcardIcon.png"
                style={{
                  width: "7vh",
                  position: "absolute",
                  paddingTop: "1.1vh",
                }}
              />
            </TopText>
          </Intro>

          <Three
            frontImgSrc={"/biz_card_sample.svg"}
            backImgSrc={"/biz_card_back_sample.png"}
            isHome={true}
          />

          <StyledLabel htmlFor={"fefe"}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StyledInput
                type="checkbox"
                onClick={async () => {
                  await colorOnclick;
                  setState((current) => !current);
                }}
              />
              <StyledP>개인정보 활용동의</StyledP>
            </div>
            <p
              style={{ fontSize: "12px", color: "gray", paddingLeft: "2.2rem" }}
            >
              개인정보는 명함 제작에만 사용되며 이후 전부 파기됩니다.
            </p>
          </StyledLabel>

          <Btn
            color={color}
            onClick={() => {
              if (state === true) {
                navigate("/name");
              } else {
                return;
              }
            }}
            size={"medium"}
            style={{ width: "65%" }}
          >
            시작!
          </Btn>
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
