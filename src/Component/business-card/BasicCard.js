import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const BasicCard = ({ children }) => {
  // const location = useLocation();
  // console.log('state', location.state);
  
  // const [userInfo, setUserInfo] = useState(
  //     location.state
  // );


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
