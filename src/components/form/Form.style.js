/* Style */
import { lighten, shade } from "polished";

/* Logic */
import styled from "styled-components";

// C === Container
export const CForm = styled.form`
  padding: 1.5rem 3rem;
  background-color: ${({ theme }) => theme.colors.containerBg};
  border: none;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 2rem 3rem -1rem;

  input {
    width: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: none;
    font-size: 1.6em;
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
