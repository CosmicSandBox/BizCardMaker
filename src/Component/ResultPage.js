import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Three from "./Three";
import { Btn } from "../styles/basicStyles";
import styled from "styled-components";

const ResultPageStyle = styled.section`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 2rem;
    padding: 2rem 0;

    > div:first-child,
    div.comment {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }

    > div.comment {
      gap: 0.5rem;
      font-size: 1.375rem;
    }
  }
`;

const ResultPage = () => {
  const { state } = useLocation();
  const downloadImg = () => {
    const links = [state.frontImgUrl, state.backImgUrl];
    for (let i = 0; i < links.length; i++) {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = links[i];
      link.download = `like-lion-business-card-${i}.png`;
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <ResultPageStyle>
        <div>
          <div>{state.userInfo.name}님, 당신의 명함은</div>
          <Three
            frontImgSrc={state.frontImgUrl}
            backImgSrc={state.backImgUrl}
          />
        </div>

        <Btn type="button" onClick={() => downloadImg()} color={"#FF7A00"}>
          명함 다운받기
        </Btn>

        <div className="comment">
          <span>다른 외대생들도 명함을</span>
          <span>만들 수 있게 도와줘!</span>
          <span>지금 바로 공유하기</span>
        </div>

        <Btn type="button" onClick={null} color={"#FF7A00"}>
          다른 명함 만들러 가기
        </Btn>
      </ResultPageStyle>
    </>
  );
};

export default ResultPage;
