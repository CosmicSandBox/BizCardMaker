import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const BizContainer = styled.div`
  width: 100%;
  height: 12.75rem;
  background-color: white;
`;

const TTextBox = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 11%;
  margin-top: 22%;
`;

const BTextBox = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const BasicText = styled.p`
  font-size: 12px;
  color: #062b48;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;
`;

const Text = styled.div`
  font-size: 10.3px;
  color: #484340;
  font-family: "Noto Sans KR", sans-serif;
  word-break: keep-all;
`;

const BasicCardTwo = ({}) => {
  const location = useLocation();
  const [userInfo] = useState(location.state);

  return (
    <>
      <div className="basic-three" style={{ width: " 100%" }}>
        <BizContainer>
          <div
            style={{
              width: "100%",
              height: "94%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "37%",
                height: "81%",
                borderRightStyle: "solid",
                borderRightWidth: "2px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "4.7%",
              }}
            >
              <img
                src="img/HUFS_LIKELION.png"
                style={{ width: "54%", marginBottom: "6.8%" }}
              />
              <div
                style={{
                  fontWeight: "bolder",
                }}
              >
                H U F S
              </div>
            </div>
            <div
              style={{
                width: "63%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                paddingLeft: "3%",
              }}
            >
              <TTextBox>
                <Text style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                  {userInfo.name}
                </Text>
                <Text
                  style={{
                    fontSize: "0.9rem",
                    color: "lightgray",
                    paddingTop: "2.5%",
                  }}
                >
                  &nbsp; {"<"} {userInfo.nickname} {">"}
                </Text>
              </TTextBox>

              <BTextBox>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "2%",
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
                    marginBottom: "2%",
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
                    marginBottom: "2%",
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
                    marginBottom: "2%",
                  }}
                >
                  <BasicText>MBTI.</BasicText>
                  <Text style={{ paddingLeft: "4px" }}>{userInfo.mbti}</Text>
                </div>
              </BTextBox>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#F5941F",
              bottom: "0",
              width: "100%",
              height: "6%",
            }}
          ></div>
        </BizContainer>
      </div>
    </>
  );
};

export default BasicCardTwo;
