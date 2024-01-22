import styled from "styled-components";

export const ThreePageStyle = styled.section`
  & {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    > .comment {
      color: gray;
      font-size: 0.7rem;
    }
  }
`;
