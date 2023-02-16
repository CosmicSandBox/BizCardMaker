import { FacebookIcon, TwitterIcon, FacebookShareButton, TwitterShareButton } from "react-share";
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

    if (navigator.share) {
        navigator.share({
            title: '내 생애 첫 명함',
            text: '명함 한 번 만들어보고 싶묘? 그럼 들어와보묘~🐰',
            url: '/',
        })
          .then(() => console.log('공유 성공'))
          .catch((error) => console.log('공유 실패', error));
      }


      //web share api
      const handle = () => {
        if (navigator.share) {
            navigator.share({
                title: '내 생애 첫 명함',
                text: '명함 한 번 만들어보고 싶묘? 그럼 들어와보묘~🐰',
                url: '/',
            });
        }else{
            alert("공유하기가 지원되지 않는 환경 입니다.")
        }
      }
      


  
    return (
        <>
            <div
                style={{width: "100%"}}>
                {/* 카카오 */}
                <BTN 
                    onClick={() => {shareKakao("/", "내 생애 첫 명함")}}>
                        <Img src="img/kakaotalk_logo.png" />
                </BTN>
                {/* 페이스북 */}
                <FacebookShareButton url="/name">
                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                </FacebookShareButton>
                {/* 트위터 */}
                <TwitterShareButton url="/name">
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton>
                {/* url 복사 */}
                <CopyToClipboard text={"http://localhost:3000/"}>
                        <BTN>
                            <Img src="img/url.png"
                                style={{border: "solid 1px black"}} />
                        </BTN>
                </CopyToClipboard>
                {/* 기타 */}
                {/* <button onClick={handle}>기타</button> */}
            </div>
        </>
    );
}

const Img = styled.img`
    width: 46.5px;
    height: 46.5px;
    border-radius: 50%;
`;

const BTN = styled.button`
    background-color: transparent;
    border: none;
`;

export default Share;