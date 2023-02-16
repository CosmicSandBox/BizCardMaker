import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const BizContainer = styled.div`
  width: 21.875rem;
  height: 12.75rem;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;


const TopBox = styled.div`
  width: 54.7%;
  height: 20%;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: transparent;
  margin-top: 10.5%;
  margin-bottom: 2.7%;
`;

const BottomBox = styled.div`
  height: 33%;
  width: 46.5%;
  background-color: transparent;
  display: flex;
  align-items: flex-start;
  justify-content: left;
`;

const TTextBox = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BTextBox = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 10.3px;
  background-color: transparent;
  margin-bottom: 6.3px;
`;



const BasicCardTwo = ({ children }) => {

  const location = useLocation();
  console.log('state', location.state);
  
  const [userInfo] = useState(
      location.state
  );

  



  return (
    <>
      <div>{children}</div>
      <BizContainer style={{backgroundImage: "url(/img/006.jpg)"}}>
        <TopBox>
            <TTextBox>
                <Text style={{fontSize: "1.3rem", fontWeight: "bold"}}>
                {userInfo.name}</Text>
                <Text style={{fontSize: "0.9rem", color: "lightgray", paddingTop: "2.5%"}}>
                &nbsp; {'<'} {userInfo.nickname} {'>'}</Text>
            </TTextBox>
 
        </TopBox>

        <BottomBox>
            <BTextBox>
                <Text style={{paddingLeft: "4.3px"}}>
                {userInfo.major}</Text>
                <Text style={{paddingLeft: "7px", marginBottom: "9.36px"}}>
                {userInfo.email}</Text>
                <Text style={{paddingLeft: "8px", marginBottom: "9.27px"}}>
                {userInfo.contact}</Text>
                <Text>{userInfo.mbti}</Text>   
            </BTextBox>   
        </BottomBox>

      </BizContainer>
    </>
  );
};

export default BasicCardTwo;
