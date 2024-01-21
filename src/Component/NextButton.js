import React from "react";
import { useNavigate } from "react-router-dom";
import { Btn } from "../styles/basicStyles";

function NextButton({ info, color }) {
  const navigate = useNavigate();

  const Nav = () => {
    if (info.length >= 1) {
      navigate("/Info", {
        state: { name: info },
      });
    } else {
      alert("정보을 입력하세요!");
    }
  };

  return (
    <Btn
      type="button"
      onClick={() => {
        Nav();
      }}
      color={color}
    >
      다음 단계
    </Btn>
  );
}

export default NextButton;
