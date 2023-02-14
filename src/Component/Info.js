import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Undermsg from "./Undermsg";
import TopLion from "./TopLion";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 44px;
  height: 812px;
`;

const TopContainer = styled.div`
  width: 90%;
  height: 65px;
  margin: 0 auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Playground = styled.div`
  width: 90%;
  height: 655px;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
`;

const TopText = styled.div`
  width: 100%;
  height: 68px;
  text-align: center;
  line-height: 160%;
  color: #412917;
  margin-bottom: 57px;
  border-radius: 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
`;

const InfoPleaseBox = styled.div`
  color: #412917;
  font-size: 16px;
  text-align: left;
  background-color: transparent;
`;

const Detail = styled.div`
  color: #7e593e;
  height: 28px;
  font-size: 12px;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const Box = styled.div`
  margin: 0 auto;
  width: 87%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  width: 87%;
  height: 65px;
  background: ${(props) => props.color};
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  margin-bottom: 70px;
`;

const InputBox = styled.div`
  width: 87%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Box2 = styled.div`
  width: 85%;
  height: 50px;
  padding: 5px;
  padding-top: 15px;
  padding-bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;

const InputInfo = styled.input`
  width: 85%;
  height: 40px;
  border-width: 1px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  border-bottom: solid 1px #94987e;
  &:focus {
    outline: none;
  }
`;

function Info() {
  console.log("시작------");
  //이동 navigate
  const navigate = useNavigate();
  //이름 받아오기
  const location = useLocation();
  console.log("state", location.state);

  const [userInfo, setUserInfo] = useState(location.state);

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
  //top 메시지 변경
  const top = [
    `반가워요 ${userInfo.name}님,\n재밌는 별명을 가지고 계신가요?`,
    `${userInfo.name}님은 어떤 학과 소속이신가요?`,
    `${userInfo.name}님의 연락처를 입력해주세요`,
    "거의 다 왔어요!\n이메일을 입력해주세요",
    "마지막으로 MBTI를 입력해주세요!",
  ];
  const [topmsg, setTopmsg] = useState(top[0]);
  const Changetopmsg = () => {
    setTopmsg(top[count]);
  };

  //plzmsg 바꾸기
  const plz = [
    "닉네임을 입력해주세요",
    "학과를 입력해주세요",
    "연락처를 입력해주세요",
    "이메일을 입력해주세요",
    "MBTI를 입력해주세요",
  ];
  const [plzmsg, setPlzmsg] = useState(plz[0]);
  const Changeplz = () => {
    setPlzmsg(plz[count]);
  };

  //detailmsg 바꾸기
  const detail = [
    "선택사항",
    "(예: 멋쟁이사자학과)",
    "전화번호 혹은 SNS 아이디를 입력해주세요",
    "학교 이메일을 입력해주세요 (예: likelion@hufs.ac.kr)",
    "알파벳 4글자를 입력해주세요 (예:ENTP)",
  ];
  const [detailmsg, setDetailmsg] = useState(detail[0]);
  const ChangeDetail = () => {
    setDetailmsg(detail[count]);
  };

  //input 추가하기
  const addBox = () => {
    const List = styled.div`
      width: 100%;
      height: 50px;
      background-color: transparent;
      border: none;
      border-top: solid 0.3px #94987e;
      font-size: 1rem;

      display: flex;
      justify-content: center;
      align-items: center;
      &:focus {
        outline: none;
      }
    `;
    return <List>{input}</List>;
  };

  const [inputbox, setInputbox] = useState([]);

  //초기화
  const inputRef = useRef(null);
  const onReset = () => {
    setInput("");
  };

  const poslist = ["106px", "147px", "190px", "232px"];
  const prevlist = ["64px", "106px", "147px", "190px"];
  const [pos, setPos] = useState("64px");
  const [prevpos, setPrevpos] = useState("32px");

  const Lion = () => {
    if (count === 2) {
      setPrevpos(prevlist[0]);
      setPos(poslist[0]);
    } else if (count === 3) {
      setPrevpos(prevlist[1]);
      setPos(poslist[1]);
    } else if (count === 4) {
      setPrevpos(prevlist[2]);
      setPos(poslist[2]);
    } else if (count === 5) {
      setPrevpos(prevlist[3]);
      setPos(poslist[3]);
    }
    // } else if(count === 6) {
    //     setPrevpos('232px')
    //     setPos('269px')
    // } else if(count === 7) {
    //     setPrevpos('269px')
    //     setPos('308px')
    // }
  };

  //클릭
  const onClick = () => {
    if (count === 5) {
      navigate("/select-template");
    } else {
      //msg 변경
      setCount((prev) => prev + 1);
      Changetopmsg();
      Changeplz();
      ChangeDetail();
      //값 저장
      setUser((user) => [...user, input]);
      //값 초기화
      onReset();
      //input 추가
      setInputbox([...inputbox, addBox()]);
    }
    //사자
    Lion();
  };
  console.log(user);
  console.log("여긴 info" + pos);

  return (
    <>
      <GlobalStyle />
      <Container>
        <TopContainer>
          <TopLion count={count} prevpos={prevpos} pos={pos} />
        </TopContainer>
        <Playground>
          <TopText> {topmsg} </TopText>
          <Box>
            <Box2>
              <InfoPleaseBox> {plzmsg} </InfoPleaseBox>
              <Detail> {detailmsg} </Detail>
            </Box2>
            <InputInfo onChange={onChange} placeholder="이곳에 입력하세요" />
            <InputBox>{inputbox.map((elem) => elem)}</InputBox>
          </Box>
          <Btn type="button" onClick={onClick} color={color}>
            다음 단계
          </Btn>
          {/* <Undermsg /> */}
        </Playground>
      </Container>
    </>
  );
}

export default Info;
