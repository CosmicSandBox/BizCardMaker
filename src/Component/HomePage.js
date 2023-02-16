import React from "react";
import Three from "./Three";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;



const Bizcard = styled.div`
  width: 50vh;
  background-color: pink;
`;

const JW = styled.div`
  background-color: black;
`;




const HomePage = ({}) => {
  const navigate = useNavigate();
  return (
    <>
      <Section>
          {/* 이 부분 새로 만드시는 게 편할 것 같아요 */}
        <JW>
            <div>아직도 명함 없는</div>
            <div>한국외대생이 있다부..?</div>
          <div>{/* <img src=""></img> */}</div>
        </JW>

        <div>
          <div>너만의 명함을</div>
          <div>

            <div>만들어봐재우!asdasasdasasdasdsaddsadd!</div>
            {/* <img></img> */}
          </div>
        </div>
        {/* 여기까지 알아서~ */}

        <Bizcard>
          <Three imgSrc={"/biz_card_sample.svg"} />
          <div>손가락으로 이리저리 돌려보세요!</div>
        </Bizcard>


        <button onClick={()=>{navigate("/name")}}>start</button>
      </Section>

    </>
  );
};

export default HomePage;
