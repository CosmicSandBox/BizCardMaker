import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ photos, pickEvent = null }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      pickEvent(index + 1);
    },
  };

  return (
    <>
      <div className={`slide-body`}>
        <section className={`slide-section`}>
          <Slider {...settings}>
            {photos.map((photo, index) => {
              return (
                <div
                  className={`photo-box`}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
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
          height: 100%;
        }
        section.slide-section {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          overflow-x: hidden;
        }
      `}</style>
      <style jsx global>{`
        section.slide-section .slick-slider {
          width: 80%;
          height: 80%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slick-prev:before,
        .slick-next:before {
          color: black;
        }
        .photo-box {
          display: flex !important;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default Slide;
