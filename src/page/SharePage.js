import {
  FacebookIcon,
  TwitterIcon,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { shareKakao } from "../utils/shareKakaoLink";
import { useEffect } from "react";
import styled from "styled-components";

function Share() {
  // kakao sdk 초기화
  // status가 변경될 때마다 실행됨. status가 ready일 때 초기화를 시도.
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  //url
  const onClick = () => {
    alert("복사 완료!");
  };

  return (
    <>
      <Container>
        {/* 카카오 */}
        <BTN
          onClick={() => {
            shareKakao("/", "내 생애 첫 명함");
          }}
        >
          <Img src="img/kakaotalk_logo.png" />
        </BTN>
        {/* 페이스북 */}
        <FacebookShareButton url="http://localhost:3000/">
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        {/* 트위터 */}
        <TwitterShareButton url="http://localhost:3000/">
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        {/* url 복사 */}
        <CopyToClipboard text={"https://biz-card-maker.vercel.app/"}>
          <BTN onClick={onClick}>
            <URL>URL</URL>
          </BTN>
        </CopyToClipboard>
        {/* 기타 */}
        {/* <button onClick={handle}>기타</button> */}
      </Container>
    </>
  );
}

const Container = styled.div`
  //부모 컴포넌트에 share 감싸는 box 지정해주셨으면 width 100%로 변경해서 사용하셔도 될 것 같습니다.
  //제가 보기 편하려고 80% 한 거예용, height도 입맛에 맞게 바꾸세용
  width: 80%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 46.5px;
  height: 46.5px;
  border-radius: 50%;
`;

const BTN = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`;

const URL = styled.div`
  width: 46.5px;
  height: 46.5px;
  border-radius: 50%;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  color: ivory;
`;

export default Share;
