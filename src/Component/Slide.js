import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ photos, pickEvent = null }) => {
  // const [pickCard, setPickCard] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={`slide-body`}>
        <section className={`slide-section`}>
          <Slider {...settings}>
            {photos.map((photo, index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    console.log(index);
                    // setPickCard(index);
                    pickEvent(index);
                  }}
                >
                  {photo}
                </div>
              );
            })}
          </Slider>
        </section>
      </div>

      <style jsx>{`
        div.slide-body {
          display: flex;
          justify-content: center;
          height: 100vh;
        }
        section.slide-section {
          background-color: pink;
          display: flex;
          width: 50vw;
          justify-content: center;
          align-items: center;
          overflow-x: hidden;
        }
      `}</style>
      <style jsx global>{`
        section.slide-section .slick-slider {
          width: 80%;
        }
      `}</style>
    </>
  );
};

export default Slide;
