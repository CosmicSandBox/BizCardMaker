import styled from "styled-components";

export const SliderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const SliderBody = styled.div`
  display: flex;
  justify-content: center;
  height: 20rem;

  section.slide-section {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    .slick-slider {
      width: 80%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .slick-list {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: black;
    }
    .photo-box {
      display: flex !important;
    }
  }
`;

export const ColorSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;
