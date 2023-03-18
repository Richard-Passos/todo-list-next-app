/* Style */
import { CheckBox } from "./CheckBox-style";

/* Logic */
import styled from "styled-components";

export const TaskRow = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray};

  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    width: 80%;
    padding: 1rem clamp(1rem, 3vw, 2rem);

    display: flex;
    justify-content: flex-start;
    gap: 2rem;

    p {
      max-width: 100%;
      padding: 0.4rem 1rem 0.25rem 0;
      font-size: 1.6em;
      overflow: hidden;

      white-space: nowrap;
      text-overflow: ellipsis;

      :hover {
        cursor: pointer;
        overflow: auto;
        text-overflow: initial;
      }

      @media screen and (max-width: 600px) {
        overflow: auto;
        text-overflow: initial;
      }

      /* Scroll style */
      ::-webkit-scrollbar {
        height: 0.5rem;
      }
      ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.light};
      }
      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.dark};
      }
    }

    :hover ${CheckBox} {
      background-image: ${({ theme }) =>
        theme.colors.checkBackground} !important;
    }
  }

  .removeTask {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 2rem;

    position: relative;

    ::before,
    ::after {
      content: "";
      width: 1.5rem;
      height: 0.1rem;
      background-color: ${({ theme }) => theme.colors.gray};

      position: absolute;
      top: 0.8rem;
      z-index: 1;

      display: none;

      @media screen and (max-width: 600px) {
        display: initial;
      }
    }

    ::before {
      transform: rotate(-45deg);
    }
    ::after {
      transform: rotate(45deg);
    }

    :hover {
      ::before,
      ::after {
        background-color: ${({ theme }) => theme.colors.text};
      }
    }
  }

  :hover .removeTask {
    cursor: pointer;

    :before,
    :after {
      display: initial;
    }
  }
`;
