import styled from "styled-components";
import NextButton from "./NextButton";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import Undermsg from "./Undermsg";
import TopLion from "./TopLion";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 44px;
`;

const TopContainer = styled.div`
  width: 90%;
  height: 65px;
  margin: 0 auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Playground = styled.div`
  width: 83%;
  height: 655px;
  margin: 0 auto;
  padding-top: 49px;
  text-align: center;
`;

const NameText = styled.div`
  width: 100%;
  height: 30px;
  text-align: center;
  color: #412917;
  margin-bottom: 90px;
  border-radius: 0;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  font-family: 'ONE-Mobile-POP';
`;

const NamePleaseBox = styled.div`
  width: 88%;
  color: #412917;
  font-size: 1.15rem;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 3px;
  font-family: 'yg-jalnan';
`;

const Detail = styled.div`
  color: #7e593e;
  width: 88%;
  font-size: 0.8rem;
  text-align: left;
  margin: 0 auto;
  font-family: 'TmoneyRoundWindExtraBold';
  margin-bottom: 5px;

`;

const InputName = styled.input`
  width: 77%;
  height: 38px;
  padding: 12px 20px;
  border-width: 1px;
  border: none;
  outline: none;
  margin-top: 5px;
  margin-bottom: 100px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 4px;
  font-size: 1rem;
  font-family: 'yg-jalnan';
  color: rgba(0,0,0,0.8);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #A9A9A9;
  }
`;

function Name() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#D3D3D3");

  const onChange = (e) => {
    setInput(e.target.value);
    setColor(input.length <= 1 ? "#D3D3D3" : "#FF7A00");
  };

  //input focus, blur
  let [inputclicked, setInputClicked] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Container>
        <TopContainer>
          <TopLion lioncount={0} />
        </TopContainer>
        <Playground>
          <NameText>먼저 당신의 이름을 알려주세요</NameText>
            <NamePleaseBox>
              이름
            </NamePleaseBox>
            <Detail>
              NAME
            </Detail>
            <InputName
              onChange={onChange}
              placeholder={inputclicked === true ? "" : "김멋사"}
              onFocus={() => {
                setInputClicked(true);
              }}
              onBlur={() => {
                setInputClicked(false);
              }}
              // autoFocus
            />
          <NextButton info={input} color={color} classN={"Name"} />
        </Playground>
      </Container>
    </>
  );
}

export default Name;
