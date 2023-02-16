import React from "react";
import Three from "./Three";

const HomePage = ({}) => {
  return (
    <>
      <section className={`home`}>
        <div>
          <div>
            <div>아직도 명함 없는</div>
            <div>한국외대생이 있다부?</div>
          </div>
          <div>{/* <img src=""></img> */}</div>
        </div>

        <div>
          <div>너만의 명함을</div>
          <div>
            <div>만들어봐재우!</div>
            {/* <img></img> */}
          </div>
        </div>

        <div className={`biz-card`}>
          <Three imgSrc={"/biz_card_sample.svg"} />
          <div>손가락으로 이리저리 돌려보세요!</div>
        </div>

        <button>start</button>
      </section>
      <style jsx>{`
        section.home {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          height: 100vh;

          .biz-card {
            width: 50vw;
            background-color: pink;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
