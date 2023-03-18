/* Style */
import { shade } from "polished";

/* Logic */
import styled from "styled-components";

export const Actions = styled.div`
  width: 100%;
  padding: 1.75rem clamp(2rem, 3vw, 3rem);
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.4rem;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 1rem;

    input[type="radio"] {
      display: none;

      :checked + label {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    label {
      font-weight: bold;
      transition: 0.2s;

      :hover {
        cursor: pointer;
        color: ${({ theme }) => shade(0.5, theme.colors.primary)};
      }
    }

    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 1.75rem 3.5rem;
      background-color: ${({ theme }) => theme.colors.containerBg};
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.colors.shadow} 0 2rem 3rem -1rem;

      position: absolute;
      top: 150%;
      left: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  button {
    background-color: transparent;
    color: inherit;
    border: none;
    transition: 0.2s;

    :hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
