import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  background: url(${({ theme }) => theme.images.mobileBgPath}) no-repeat top /
    contain ${({ theme }) => theme.colors.bg};

  @media screen and (min-width: 500px) {
    background-image: url(${({ theme }) => theme.images.bgPath});
  }
`;

export const Content = styled.main`
  width: 90%;
  max-width: 56rem;
  min-height: 100vh;
  padding: 8rem 0;
  margin: 0 auto;
`;
