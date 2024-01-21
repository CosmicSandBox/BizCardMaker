import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderBody } from "../styles/slideStyles";

const Slide = ({ photos, pickEvent = null, side }) => {
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

  const sliderRef = useRef();
  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    handleOnClick(0);
  }, [side]);

  return (
    <SliderBody>
      <section className={`slide-section`}>
        <Slider {...settings} ref={sliderRef}>
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
    </SliderBody>
  );
};

export default Slide;
