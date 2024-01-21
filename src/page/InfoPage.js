import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../Component/GlobalStyle";
import styled from "styled-components";
import TopLion from "../Component/TopLion";
import {
  Container,
  TopContainer,
  Playground,
  GuideText,
  MainInputLabel,
  SubInputLabel,
  Input,
  InfoListBox,
  Box,
  Btn,
} from "../styles/basicStyles";
// import { Btn } from "../Component/NextButton";

function Info() {
  //이동 navigate
  const navigate = useNavigate();
  //이름 받아오기
  const location = useLocation();

  const [userInfo] = useState(location.state);

  //인풋값에 따른 버튼 색
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#D3D3D3");

  //입력값 관리
  const onChange = (e) => {
    setInput(e.target.value);
    setColor(input.length <= 1 ? "#D3D3D3" : "#FF7A00");
  };

  //유저 정보 저장
  const [user, setUser] = useState([userInfo.name]);

  //count
  const [count, setCount] = useState(1);

  //input focus, blur
  let [inputclicked, setInputClicked] = useState(false);

  //lion
  const [lioncount, setLioncount] = useState(1);

  //top 메시지 변경
  const top = [
    "",
    `반가워요 ${userInfo.name}님,\n재밌는 별명을 가지고 계신가요?`,
    `${userInfo.name}님은 \n어떤 학과 소속이신가요?`,
    `${userInfo.name}님의 \n연락처를 입력해주세요`,
    "거의 다 왔어요!\n이메일을 입력해주세요",
    "마지막으로 \nMBTI를 입력해주세요!",
  ];

  //plzmsg 바꾸기
  const plz = ["", "닉네임", "학과", "연락처", "이메일", "MBTI"];

  //detailmsg 바꾸기
  const detail = ["", "NICKNAME", "MAJOR", "CONTACT", "E-MAIL", ""];

  //input initmsg
  const initinput = [
    "",
    "아기 사자",
    "정글탐험학과",
    "010-xxxx-xxxx  /  hufsglobal_likelion",
    "likelion@hufs.ac.kr",
    "CUTE",
  ];

  //box 추가하기
  const addBox = () => {
    const List = styled.div`
      width: 100%;
      background-color: #faf7f4;
      border: none;
      font-size: 0.9rem;
      font-family: "yg-jalnan";
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      box-shadow:
        rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      border-radius: 20px;
      margin-bottom: 10px;
      &:focus {
        outline: none;
      }
    `;

    return <List>{input}</List>;
  };

  const [inputbox, setInputbox] = useState([]);

  //값 저장 및 초기화
  const Send = () => {
    setUser((user) => [...user, input]);
    setInput("");
  };

  //클릭
  const onClick = () => {
    if (input.length <= 1) {
      alert("정보를 입력하세요!");
    } else {
      if (count === 5) {
        if (user.length === 5) {
          navigate("/select-template", {
            state: {
              name: user[0],
              nickname: user[1],
              major: user[2],
              contact: user[3],
              email: user[4],
              mbti: input,
            },
          });
        }
      } else {
        //값 저장 및 초기화
        Send();
        setCount((prev) => prev + 1);
        //input 추가
        setInputbox([...inputbox, addBox()]);
        //사자
        setLioncount((prev) => prev + 1);
        //색 초기화
        setColor("#D3D3D3");
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <TopContainer>
          <TopLion lioncount={lioncount} />
        </TopContainer>
        <Playground>
          <GuideText> {top[count]} </GuideText>
          <MainInputLabel>{plz[count]}</MainInputLabel>
          <SubInputLabel>{detail[count]}</SubInputLabel>
          <Box>
            <Input
              onChange={onChange}
              placeholder={inputclicked === true ? "" : initinput[count]}
              value={input}
              onFocus={() => {
                setInputClicked(true);
              }}
              onBlur={() => {
                setInputClicked(false);
              }}
            />
            <InfoListBox>{inputbox.map((elem) => elem)}</InfoListBox>
          </Box>
        </Playground>
        <Btn type="button" onClick={onClick} color={color}>
          다음 단계
        </Btn>
      </Container>
    </>
  );
}

export default Info;
