import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-height: 8vh;
  font-size: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    color: #fff;
    font-size: 4.5em;
    letter-spacing: 1.2rem;
  }

  & > img {
    cursor: pointer;
  }
`;
