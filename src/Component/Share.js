

function Share() {
    const onHandle = () => {
        if (navigator.share) {
            navigator.share({
                title: '내 생애 첫 명함',
                text: '명함 한 번 만들어보고 싶묘? 그럼 들어와보묘~🐰',
                url: '/name',
            })
              .then(() => console.log('공유 성공'))
              .catch((error) => console.log('공유 실패', error));
          }
    }
  
    return (
        <>
            <button onClick={() => {onHandle()}}>
                공유하기
            </button>
        </>
    );
}

export default Share;