import React, { useState, useMemo } from "react";
import Three from "./Three";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fffbee;
  height: 100vh;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  color: #412917;
  font-style: Noto Sans;
`;
const Btn = styled.button`
  width: 133px;
  height: 65px;
  background: ${(props) => props.color};
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  &:active {
    position: relative;
    transform: scale(0.95);
  }
`;

const Bizcard = styled.div`
  width: 50vh;
  background-color: pink;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ff7a00;
  }
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p`
  margin-left: 0.25rem;
`;

const HomePage = () => {
  const [state, setState] = useState(false);
  const [color, setColor] = useState("#D3D3D3");
  const colorOnclick = useMemo(() => {
    if (state === false) {
      setColor("#D3D3D3");
      console.log("흰색");
    } else {
      setColor("#FF7A00");
      console.log("주황색");
    }
  }, [state]);
  const navigate = useNavigate();
  return (
    <>
      <Section>
        {/* 이 부분 새로 만드시는 게 편할 것 같아요 */}
        <Intro>
          <div>
            <img src="img/nocardyet.png" />
          </div>
          <div>
            <img src="img/makeyours.png" />
          </div>
          <div>손가락으로 이리저리 돌려보세요!</div>
        </Intro>

        <div className={`biz-card`}>
          <Three
            frontImgSrc={"/biz_card_sample.svg"}
            backImgSrc={"/biz_card_back_sample.png"}
            isHome={true}
          />
          <div>손가락으로 이리저리 돌려보세요!</div>
        </div>

        <StyledLabel htmlFor={"fefe"}>
          <StyledInput
            type="checkbox"
            onClick={async () => {
              await colorOnclick;
              setState((current) => !current);
            }}
          />
          <StyledP>개인정보 활용동의</StyledP>
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
        >
          시작!
        </Btn>
      </Section>
    </>
  );
};

export default HomePage;
