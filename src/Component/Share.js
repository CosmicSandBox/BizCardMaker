import { FacebookIcon, TwitterIcon, FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Share() {

    const onHandle = () => {
        // //모바일
        // if (navigator.share) {
        //     navigator.share({
        //         title: '내 생애 첫 명함',
        //         text: '명함 한 번 만들어보고 싶묘? 그럼 들어와보묘~🐰',
        //         url: '/name',
        //     })
        //       .then(() => console.log('공유 성공'))
        //       .catch((error) => console.log('공유 실패', error));
        //   }

    }

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://developers.kakao.com/sdk/js/kakao.js"; // 카카오톡 SDK
    //     script.async = true;
      
    //     document.body.appendChild(script);
      
    //     return () => {
    //       document.body.removeChild(script); // return으로 제거해주기
    //     };
    //   }, []);
  
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
            <button>3</button>
            <button>4</button>
        </>
    );
}

export default Share;