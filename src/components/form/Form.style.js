/* Style */
import { lighten, shade } from "polished";

/* Logic */
import styled from "styled-components";

// C === Container
export const CForm = styled.form`
  input {
    width: 100%;
    padding: 2rem 4rem;
    background-color: ${({ theme }) => theme.colors.containerBg};
    color: ${({ theme }) => theme.colors.text};
    border: none;
    border-radius: 1rem;
    font-size: 1.6em;
    box-shadow: ${({ theme }) => theme.colors.shadow} 0 2rem 3rem -1rem;
    caret-color: ${({ theme }) => theme.colors.primary};

    ::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    ::-webkit-search-cancel-button {
      cursor: pointer;
      font-size: 1.5rem;
    }
  }
`;
