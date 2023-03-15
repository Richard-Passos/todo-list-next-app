import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: url(${({ theme }) => theme.bgPath}) no-repeat top / contain
    ${({ theme }) => theme.colors.secondary};
`;

export const Content = styled.main`
  width: 90%;
  max-width: 56rem;
  min-height: 100vh;
  padding: 8rem 0;
  margin: 0 auto;
`;
