import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Three from "./Three";
import { Btn } from "../styles/basicStyles";
import BasicCardOne from "./business-card/BasicCardOne";
import BasicCardTwo from "./business-card/BasicCardTwo";
import BasicCardThree from "./business-card/BasicCardThree";
import CardBackSide from "./business-card/CardBackSide";

const ResultPage = ({}) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);
  const getResult = () => {
    const result = [];
    if (state.frontCardIndex === 1) {
      result.push(<BasicCardOne />);
    } else if (state.frontCardIndex === 2) {
      result.push(<BasicCardTwo />);
    } else {
      result.push(<BasicCardThree />);
    }
    result.push(
      <CardBackSide
        bgColor={state.backColor}
        icon={`logo0${state.backLogoIndex}.png`}
      ></CardBackSide>
    );
    return result;
  };
  console.log(state.frontImgUrl);
  return (
    <section>
      <div>{state.userInfo.name}님, 당신의 명함은</div>
      {getResult()}
      <div>
        <Three frontImgSrc={state.frontImgUrl} backImgSrc={state.backImgUrl} />
        <div>손가락으로 이리저리 돌려보세요</div>

        <Btn type="button" onClick={null} color={"#FF7A00"}>
          명함 다운받기
        </Btn>
      </div>

      <div>
        다른 외대생들도 명함을<br></br> 만들 수 있게 도와줘!<br></br> 지금 바로
        공유하기
      </div>
    </section>
  );
};

export default ResultPage;
