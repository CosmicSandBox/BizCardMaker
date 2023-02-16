import React from "react";
// import BasicCard from "./BasicCard";

const CardBackSide = ({ bgColor, icon, pickedEvent }) => {
  return (
    <>
      {/* <BasicCard>  */}
      <div
        style={{
          background: `${bgColor}`,
          width: "21.875rem",
          height: "12.75rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          pickedEvent(icon);
        }}
      >
        <img src={`/bizIcon/${icon}`} style={{ width: "3rem" }}></img>
      </div>
      {/* </BasicCard> */}
    </>
  );
};

export default CardBackSide;
