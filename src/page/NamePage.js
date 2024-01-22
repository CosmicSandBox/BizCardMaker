import NextButton from "../Component/NextButton";
import GlobalStyle from "../Component/GlobalStyle";
import { useState } from "react";
import TopLion from "../Component/TopLion";
import {
  Container,
  TopContainer,
  Playground,
  GuideText,
  MainInputLabel,
  SubInputLabel,
  Input,
} from "../styles/basicStyles";

function Name() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#D3D3D3");

  const onChange = (e) => {
    setInput(e.target.value);
    setColor(input.length <= 1 ? "#D3D3D3" : "#FF7A00");
  };

  let [inputclicked, setInputClicked] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Container>
        <TopContainer>
          <TopLion lioncount={0} />
        </TopContainer>
        <Playground>
          <GuideText>먼저 당신의 이름을 알려주세요</GuideText>
          <MainInputLabel>이름</MainInputLabel>
          <SubInputLabel>NAME</SubInputLabel>
          <Input
            onChange={onChange}
            placeholder={inputclicked === true ? "" : "김멋사"}
            onFocus={() => {
              setInputClicked(true);
            }}
            onBlur={() => {
              setInputClicked(false);
            }}
          />
        </Playground>
        <NextButton info={input} color={color} />
      </Container>
    </>
  );
}

export default Name;
