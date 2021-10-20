import styled, { css } from "styled-components";

export const comments = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;

  ${({single}) => single && css`
    padding: 0px;
  `}
`;

export const comment = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;
