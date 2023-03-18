/* Logic */
import styled from "styled-components";

export const CheckBox = styled.div`
  min-width: 2rem;
  max-width: 2rem;
  min-height: 2rem;
  max-height: 2rem;
  margin-top: 0.2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};

  position: relative;

  :hover {
    cursor: pointer;
  }

  .check {
    background-color: ${({ theme }) => theme.colors.containerBg};
    border-radius: 50%;

    position: absolute;
    inset: 0.1rem;

    :after {
      content: "";
      width: 0.3rem;
      height: 0.6rem;
      border: solid #fff;
      border-width: 0 0.3rem 0.3rem 0;
      box-shadow: 0.05rem 0.05rem 0 ${({ theme }) => theme.colors.dark};
      opacity: 0;
      transition: 0.5s;
      transform: rotate(35deg);

      position: absolute;
      top: 0.37rem;
      left: 0.6rem;
      z-index: 1;
    }
  }
`;

export const Input = styled.input`
  opacity: 0;

  position: absolute;

  &:checked + ${CheckBox} {
    width: 10rem;
    background-image: ${({ theme }) => theme.colors.checkBackground};

    .check {
      background-color: transparent !important;

      :after {
        opacity: 1;
      }
    }
  }
`;
