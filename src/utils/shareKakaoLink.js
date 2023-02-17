export const shareKakao = (route, title) => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("105025b8e877139f01383d68d0d24980");
      }
  
      kakao.Link.sendDefault({
        objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입
        content: {
          title: title, // 인자값으로 받은 title
          description: "너만의 명함을 만들고 싶다면? 이쪽으로 들어와 보묘~🐰", // 인자값으로 받은 title
          imageUrl: "https://user-images.githubusercontent.com/78716896/219692563-2c10d68a-ffc8-4d87-9147-574a55b95430.png",
          link: {
            mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
            webUrl: route
          }
        },
        buttons: [
          {
            title: "명함 만들기",
            link: {
              mobileWebUrl: route,
              webUrl: route
            }
          }
        ]
      });
    }
  };