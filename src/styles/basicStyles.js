import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 44px;
`;

export const TopContainer = styled.div`
  width: 90%;
  height: 65px;
  margin: 0 auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Playground = styled.div`
  width: 90%;
  height: 655px;
  margin: 0 auto;
  padding-top: 30px;
  text-align: center;
`;

export const Btn = styled.button`
  width: 87%;
  height: 65px;
  background: ${(props) => props.color};
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  margin-bottom: 70px;
  font-family: 'yg-jalnan';
`;

export const Under = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505050;
  font-size: 12px;
`;
