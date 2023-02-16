import { FacebookIcon, TwitterIcon, FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { shareKakao } from "../utils/shareKakaoLink";
import { useEffect } from "react";


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
            url: '/name',
        })
          .then(() => console.log('공유 성공'))
          .catch((error) => console.log('공유 실패', error));
      }


      //web share api
      const handle = () => {
        if (navigator.share) {
            navigator.share({
                title: '기록하며 성장하기',
                text: 'Hello World',
                url: 'https://shinsangeun.github.io',
            });
        }else{
            alert("공유하기가 지원되지 않는 환경 입니다.")
        }
      }
      


  
    return (
        <>
            <FacebookShareButton url="/name">
                <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
            </FacebookShareButton>
            <TwitterShareButton url="/name">
                <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
            </TwitterShareButton>

            <CopyToClipboard text={"/name"}>
					<button>URL</button>
			</CopyToClipboard>
            <button onClick={() => {shareKakao("/home", "내 생애 첫 명함")}}>카카오</button>
            <button>4</button>
        </>
    );
}

export default Share;