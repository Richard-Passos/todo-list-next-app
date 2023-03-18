/* Logic */
import styled from "styled-components";

// C === Container
export const CList = styled.div`
  background-color: ${({ theme }) => theme.colors.containerBg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadow} 0 2rem 3rem -1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .disable {
    display: none;
  }

  .no-tasks {
    padding: 3rem 0 1.5rem;
  }

  .task-completed {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: line-through;
  }
`;
