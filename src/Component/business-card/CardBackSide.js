import React from "react";

const CardBackSide = ({ bgColor, icon, index }) => {
  return (
    <>
      <div
        className={`card-back-side-${index}`}
        style={{
          background: `${bgColor}`,
          width: "100%",
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
