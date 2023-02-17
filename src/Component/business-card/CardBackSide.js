import React from "react";

const CardBackSide = ({ bgColor, icon }) => {
  return (
    <>
      <div
        className={`card-back-side`}
        style={{
          background: `${bgColor}`,
          width: "21.875rem",
          height: "12.75rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`/bizIcon/${icon}`}
          style={{ width: "3rem", background: "transparent" }}
        ></img>
      </div>
    </>
  );
};

export default CardBackSide;
