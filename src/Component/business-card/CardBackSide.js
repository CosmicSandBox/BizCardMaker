import React from "react";
import BasicCard from "./BasicCard";

const CardBackSide = ({ bgColor, icon }) => {
  return (
    <>
      <BasicCard>
        <div
          style={{
            background: bgColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={`/bizIcon/${icon}`}></img>
        </div>
      </BasicCard>
    </>
  );
};

export default CardBackSide;
