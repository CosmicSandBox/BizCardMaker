export const shareKakao = () => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init("105025b8e877139f01383d68d0d24980");
      }
  
      kakao.Link.sendCustom({
        templateId: 90053
  });
};
};