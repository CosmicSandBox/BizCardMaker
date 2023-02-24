import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Three from "./Three";
import { Btn } from "../styles/basicStyles";
import styled from "styled-components";
import Share from "./Share";
import { m } from "framer-motion";

const ResultPageStyle = styled.section`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 1rem;
    padding: 44px 0;
  }
`;

const ResultPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const downloadImg = (side) => {
    const links = [state.frontImgUrl, state.backImgUrl];

    const link = document.createElement("a");
    document.body.appendChild(link);

    if (side === "front") {
      link.href = links[0];
      link.download = `like-lion-business-card-${0}.png`;
    } else {
      link.href = links[1];
      link.download = `like-lion-business-card-${1}.png`;
    }

    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <ResultPageStyle>
        <div
          style={{
            backgroundColor: "#FAF7F4",
            paddingTop: "20px",
            textAlign: "center",
            fontFamily: "ONE-Mobile-POP",
            borderRadius: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5%",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "ONE-Mobile-POP",
                fontSize: "1.4rem",
                marginBottom: "1rem",
                paddingBottom: "5%",
                borderBottom: "solid 1px lightgray",
              }}
            >
              {state.userInfo.name}님, 당신의 명함은
            </div>
            <Three
              frontImgSrc={state.frontImgUrl}
              backImgSrc={state.backImgUrl}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            <Btn
              type="button"
              onClick={() => downloadImg("front")}
              color={"#FF7A00"}
              style={{
                width: "40%",
                marginBottom: "2rem",
                marginTop: "1.3rem",
              }}
            >
              명함 앞면<br></br> 다운받기
            </Btn>
            <Btn
              type="button"
              onClick={() => downloadImg("back")}
              color={"#FF7A00"}
              style={{
                width: "40%",
                marginBottom: "2rem",
                marginTop: "1.3rem",
              }}
            >
              명함 뒷면<br></br> 다운받기
            </Btn>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#FAF7F4",
            padding: "20px",
            textAlign: "center",
            fontFamily: "ONE-Mobile-POP",
            borderRadius: "20px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            width: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "5%",
          }}
        >
          <div
            style={{
              fontSize: "1.3rem",
              background: "transparent",
              lineHeight: "130%",
              marginBottom: "3%",
            }}
          >
            다른 친구들도 명함을
            <br />
            만들 수 있게 도와줘!
            <br />
          </div>

          <div
            style={{
              width: "90%",
              backgroundColor: "lightgray",
              height: "1px",
              marginBottom: "4%",
            }}
          ></div>

          <Share />
        </div>

        <div
          style={{
            width: "90%",
            height: "1px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "15%",
          }}
        >
          <Btn
            type="button"
            onClick={() => {
              navigate("/");
            }}
            color={"#FF7A00"}
            style={{
              borderRadius: "20px",
              width: "90%",
            }}
          >
            다른 명함 만들러 가기
          </Btn>
        </div>

        <div
          style={{
            width: "90%",
            height: "1px",
            display: "flex",
            justifyContent: "center",
            marginBottom: "10%",
          }}
        >
          <Btn
            type="button"
            onClick={() => {
              window.open("https://www.instagram.com/hufsglobal_likelion/");
            }}
            color={"#FF7A00"}
            style={{
              borderRadius: "20px",
              width: "90%",
            }}
          >
            새로운 명함 디자인 추천하러 가기
          </Btn>
        </div>
      </ResultPageStyle>
    </>
  );
};

export default ResultPage;
