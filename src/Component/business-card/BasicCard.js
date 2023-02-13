import React from "react";

const BasicCard = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        width: 21.875rem;
        height: 12.75rem;
        background: yellow;
      `}</style>
    </>
  );
};

export default BasicCard;
