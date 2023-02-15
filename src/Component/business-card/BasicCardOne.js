import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const BizContainer = styled.div`
  width: 21.875rem;
  height: 12.75rem;
  background-size: 100%;
  display: flex;
`;


const LeftBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: transparent;
  padding-top: 0.5rem;
`;

const RBox = styled.div`
  width: 40%;
  height: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  width: 75%;
  height: 32.5%;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const RTextBox = styled.div`
  width: 70%;
  height: 24%;
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

// const RTextBox = styled.div`
//   width: 65%;
//   height: 50%;
//   background-color: transparent;
//   display: flex;
//   justify-content: end;
//   align-items: flex-end;
//   flex-direction: column;
// `;

const Text = styled.div`
  font-size: 11px;
  background-color: transparent;
  margin-bottom: 6.3px
`;





const BasicCardOne = ({ children }) => {

  const location = useLocation();
  console.log('state', location.state);
  
  const [userInfo] = useState(
      location.state
  );

  //이미지
  



  return (
    <>
      <div>{children}</div>
      <BizContainer style={{backgroundImage: "url(/img/004.jpg)"}}>
        <LeftBox>
          <TextBox>
            <Text style={{paddingLeft: "4px"}}>
              Global Business&Technology학부</Text>
            <Text style={{paddingLeft: "7px", marginBottom: "8px"}}>
              kye1115z@hufs.ac.kr</Text>
            <Text style={{paddingLeft: "8px", marginBottom: "8.2px"}}>
              010-2990-0251</Text>
            <Text >ESFJ</Text>   
          </TextBox>    
        </LeftBox>

        <RBox>
          <RTextBox>
            <Text style={{fontSize: "1.3rem", fontWeight: "bold"}}>
              김예은</Text>
            <Text style={{fontSize: "0.9rem", color: "lightgray"}}>
              봉황의 기운</Text>
          </RTextBox>
        </RBox>

      </BizContainer>
    </>
  );
};

export default BasicCardOne;
