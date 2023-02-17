import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 1%;
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
  overflow: scroll;
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
  margin: 0 auto;
  text-align: center;
`;

export const Btn = styled.button`
  /* width: ${(props) =>
    props.size ? (props.size === "medium" ? "50%" : "80%") : "50%"}; */
    width: 80%;
  height: 65px;
  background: ${(props) => props.color};
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 16px;
  font-family: "yg-jalnan";
  cursor: "pointer";
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Under = styled.div`
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505050;
  font-size: 12px;
  background: transparent;
`;
