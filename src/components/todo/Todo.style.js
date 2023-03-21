import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .DnD-message {
    margin-top: 10rem;
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.4em;

    align-self: center;

    .DnD-hamb {
      font-size: 2em;

      position: relative;
      top: 0.6rem;
    }

    @media screen and (min-width: 600px) {
      margin-top: 2rem;
    }
  }
`;
