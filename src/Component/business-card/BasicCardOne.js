import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const BizContainer = styled.div`
  width: 100%;
  height: 12.75rem;
  background-size: 48%;
  background-position: 50% 50%;
  background-color: white;
  background-repeat: no-repeat;
`;

const LeftBox = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  padding-left: 1.2rem;
`;

const RBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
  height: 32.5%;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  word-break: keep-all;
`;

//중간
const RTextBox = styled.div`
  width: 65%;
  height: 35%;
  background-color: transparent;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  flex-direction: column;
`;

const BasicText = styled.p`
  font-size: 12px;
  margin-bottom: 6.5px;
  color: #062b48;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 11px;
  background-color: transparent;
  margin-bottom: 6.3px;
  /* color: #484340; */
  font-family: "Noto Sans KR", sans-serif;
  word-break: keep-all;
`;

const BasicCardOne = ({}) => {
  const location = useLocation();
  const [userInfo] = useState(location.state);
  console.log(userInfo);

  return (
    <>
      <div className="basic-one" style={{ width: "100%" }}>
        <BizContainer style={{ backgroundImage: "url(/img/HUFSLogoOp.png" }}>
          <div
            style={{
              height: "4.15rem",
              paddingLeft: "0.33rem",
              paddingTop: "0.33rem",
              display: "flex",
            }}
          >
            <img src="img/HUFSlogo_only.gif" style={{ height: "1.9rem" }} />
            <img
              src="img/HUFS_title.gif"
              style={{
                height: "1.15rem",
                marginTop: "0.4rem",
                marginLeft: "0.32rem",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LeftBox>
              <TextBox>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BasicText>Major.</BasicText>
                  <Text style={{ paddingLeft: "4px" }}>{userInfo.major}</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BasicText>E-mail.</BasicText>
                  <Text style={{ paddingLeft: "4px" }}>{userInfo.email}</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BasicText>Mobile.</BasicText>
                  <Text style={{ paddingLeft: "4px" }}>{userInfo.contact}</Text>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <BasicText>MBTI.</BasicText>
                  <Text style={{ paddingLeft: "4px" }}>{userInfo.mbti}</Text>
                </div>
              </TextBox>
            </LeftBox>

            <RBox>
              <RTextBox>
                <Text style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                  {userInfo.name}
                </Text>
                <Text style={{ fontSize: "0.9rem", color: "lightgray" }}>
                  {userInfo.nickname}
                </Text>
              </RTextBox>
            </RBox>
          </div>
          <div
            style={{
              backgroundColor: "#062B48",
              bottom: "0",
              width: "100%",
              height: "6%",
              marginTop: "2.76rem",
            }}
          ></div>
        </BizContainer>
      </div>
    </>
  );
};

export default BasicCardOne;
