import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 1%;
  width: 100%;
  height: 1rem;
  margin: 0 auto;
  padding: 2rem;
  overflow: scroll;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 65px;
  margin: 0 auto;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 12px;
`;

export const Playground = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export const Btn = styled.button`
  width: 90%;
  min-height: 65px;
  background: ${(props) => props.color};
  border-radius: 50px;
  border: none;
  color: white;
  font-size: 16px;
  font-family: "yg-jalnan";
  cursor: "pointer";
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 50px auto 0;
`;

export const Under = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505050;
  font-size: 12px;
  background: #fffbee;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  color: #412917;
  position: relative;
  margin-bottom: 20px;
`;

export const TopText = styled.div`
  font-family: "ONE-Mobile-POP";
  font-size: 25px;
  white-space: pre-wrap;
  line-height: 120%;
  color: black;
`;
export const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ff7a00;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  user-select: none;
  gap: 0.3rem;
  margin-top: 12px;
  margin-bottom: 20px;
`;

export const StyledP = styled.p`
  margin-left: 0.25rem;

  font-family: "PretendardWindRegular";
`;

export const GuideText = styled.div`
  width: 100%;
  text-align: center;
  color: #412917;
  line-height: 160%;
  margin-bottom: 80px;
  border-radius: 0;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: keep-all;
  white-space: pre-line;
  font-family: "ONE-Mobile-POP";
`;

export const MainInputLabel = styled.div`
  color: #412917;
  font-size: 1.15rem;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 3px;
  font-family: "yg-jalnan";
`;

export const SubInputLabel = styled.div`
  color: #7e593e;
  font-size: 0.8rem;
  text-align: left;
  margin: 0 auto;
  font-family: "TmoneyRoundWindExtraBold";
  margin-bottom: 5px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  border-width: 1px;
  border: none;
  outline: none;
  margin-top: 5px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  font-size: 1rem;
  font-family: "yg-jalnan";
  color: rgba(0, 0, 0, 0.8);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a9a9a9;
  }
`;
export const InfoListBox = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: transparent;
`;

export const Box = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
